import { v4 as uuidv4 } from 'uuid';
import normalizeUrl from 'normalize-url';

export const urlEqual = (url1, url2) => {
    return normalizeUrl(url1) === normalizeUrl(url2);
};

export const linkFromTab = (tab, link) => {
    /**
     * Update the link fields given the tab fields. Only the link's id will persist through the promotion.
     * All tab related fields will be overridden by the tab
     */
    return {
        id: link ? link.id : uuidv4(),
        url: normalizeUrl(tab.url),
        title: tab.title,
        faviconUrl: tab.faviconUrl,
    };
};
