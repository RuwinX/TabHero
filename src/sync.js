import { linkFromTab } from './utils';
import {
    getAllTags, getAllLinks, getTagsLinks,
    setAllTags, setAllLinks, setTagsLinks
} from './services/storage';
import {
    getLinkOfUrl, getTagIds,
    settleTags, settleLinks, settleTagsLinks
} from './services/resolve';

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

export const appToStorage = async (tags, currentLink) => {
    // TODO: if any of the set storage calls fail, retry that which failed. If retry can't succeed, rollback those that succeeded

    if (currentLink === undefined || currentLink === null) return;

    const [ storageTags, storageLinks, storageTagsLinks ] = await Promise.all([
        getAllTags(),
        getAllLinks(),
        getTagsLinks()
    ]);

    const updatedTags = settleTags({ tags: storageTags }, { tags });
    const updatedLinks = settleLinks({ links: storageLinks }, { tags, currentLink });
    const updatedTagsLinks = settleTagsLinks({ tagsLinks: storageTagsLinks }, { tags, currentLink });

    console.log(updatedTags);
    console.log(updatedLinks);
    console.log(updatedTagsLinks);
    // await setAllTags(updatedTags)
    // await setAllLinks(updatedLinks)
    // await setTagsLinks(updatedTagsLinks)
};
