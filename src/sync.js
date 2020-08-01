import { urlEqual } from './utils';
import { getAllTags, getAllLinks, getTagsLinks } from './services/storage';

export const syncTagsState = async (currentTabUrl) => {
    const [ tags, links, tagsLinks ] = await Promise.all([
        getAllTags(),
        getAllLinks(),
        getTagsLinks()
    ]);
    const storageData = { tags, links, tagsLinks };

    const targetLink = getLinkOfUrl(storageData, currentTabUrl);

    const tagIds = targetLink === undefined
        ? new Set()
        : getTagIds(storageData, targetLink);

    return Object.entries(tags).map(([ id, tagBody ]) => ({
        id,
        name: tagBody.name,
        added: tagIds.has(id)
    }));
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
