export const getCurrentTab = () => {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const { title, url, pendingUrl, favIconUrl } = tabs[0];

            if (url === '' && pendingUrl === undefined) {
                return reject(new Error('Impossible state'));
            }

            resolve({
                title,
                url: url === '' ? pendingUrl : url,
                faviconUrl: favIconUrl
            });
        });
    });
};

export const getChromeStorage = (key, defaultVal = []) => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(key, (result) => {
            let value = result[key];
            value = value === null || value === undefined
                ? defaultVal
                : value;
            resolve(value);
        });
    });
};
