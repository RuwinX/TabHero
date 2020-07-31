import { getChromeStorage } from './chrome';

export const getAllTags = () => {
    return getChromeStorage('tags', {});
};

export const getAllLinks = () => {
    return getChromeStorage('links', {});
};

export const getTagsLinks = async () => {
    const tagsLinks = await getChromeStorage('tags-links', []);
    return tagsLinks.map(([ tagId, linkId ]) => {
        return {
            tagId,
            linkId,
        };
    });
};
