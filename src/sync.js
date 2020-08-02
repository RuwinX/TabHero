import { omit } from 'lodash-es';

import { urlEqual, linkFromTab } from './utils';
import {
    getAllTags, getAllLinks, getTagsLinks,
    setAllTags, setAllLinks, setTagsLinks
} from './services/storage';

export const initAppState = async (currentTab) => {
    /**
     * Return the initialised the application state
     * given the current browser's tab url and the data in the persistent storage
     */

    const [ tags, links, tagsLinks ] = await Promise.all([
        getAllTags(),
        getAllLinks(),
        getTagsLinks()
    ]);
    const storageData = { tags, links, tagsLinks };

    const currentLink = getLinkOfUrl(storageData, currentTab.url);

    const tagIds = currentLink === undefined
        ? new Set()
        : getTagIds(storageData, currentLink);

    return {
        tags: Object.entries(tags).map(([ id, tagBody ]) => ({
            id,
            name: tagBody.name,
            added: tagIds.has(id)
        })),
        currentLink: linkFromTab(currentTab, currentLink)
    };
};

const getLinkOfUrl = ({ links }, url) => {
    const res = Object.entries(links)
        .find(([ id, linkBody ]) => urlEqual(linkBody.url, url));

    if (res === undefined) return undefined;

    const [ id, body ] = res;

    return {
        id,
        ...body
    }
};

export const getTagIds = ({ tags, tagsLinks }, link) => {
    const targetTagIds = tagsLinks
        .filter(({ linkId }) => linkId === link.id)
        .map(({ tagId }) => tagId);
    return new Set(targetTagIds);
};

export const appToStorage = async (tags, currentLink) => {
    // TODO: if any of the set storage calls fail, retry that which failed. If retry can't succeed, rollback those that succeeded

    if (currentLink === undefined || currentLink === null) return;

    const [ storageTags, storageLinks, storageTagsLinks ] = await Promise.all([
        getAllTags(),
        getAllLinks(),
        getTagsLinks()
    ]);

    const linkHasTags = tags.some(tag => tag.added);
    const updatedTags = {
        ...storageTags,
        ...Object.fromEntries(tags.map(({ id, name }) => [ id, { name } ]))
    };
    const updatedLinks = linkHasTags
        ? { ...storageLinks, [currentLink.id]: omit(currentLink, ['id']) }
        : omit(storageLinks, currentLink.id);

    const candidateAddedTagIds = new Set(tags.filter(tag => tag.added).map(tag => tag.id));
    let updatedTagsLinks = [];
    for (const { tagId, linkId } of storageTagsLinks) {
        if (linkId === currentLink.id) {
            if (candidateAddedTagIds.has(tagId)) {
                // they used to be and are still associated. Keep this rel record
                // remove the candidate for the "append step"
                updatedTagsLinks.push({ tagId, linkId });
                candidateAddedTagIds.delete(tagId);
            }
        } else {
            updatedTagsLinks.push({ tagId, linkId });
        }
    }
    updatedTagsLinks = [
        ...updatedTagsLinks,
        ...[...candidateAddedTagIds].map(tagId => ({ tagId, linkId: currentLink.id }))
    ];

    console.log(updatedTags);
    console.log(updatedLinks);
    console.log(updatedTagsLinks);
};
