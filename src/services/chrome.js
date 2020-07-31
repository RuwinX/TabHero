export const getCurrentTab = () => {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const { title, url, favIconUrl } = tabs[0];
            resolve({
                title,
                url,
                faviconUrl: favIconUrl
            });
        });
    });
};

export const getChromeStorage = (key, defaultVal) => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(key, (result) => {
            const value = result[key] || defaultVal;
            resolve(value);
        });
    });
};
