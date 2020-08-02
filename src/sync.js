import { urlEqual, linkFromTab } from './utils';
import { getAllTags, getAllLinks, getTagsLinks } from './services/storage';

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

const appToStorage = () => {
    /**
     * take my app state (as args)
     * process the data/reformat etc
     * set the storage to that
     */
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
