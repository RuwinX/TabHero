
class Collection {
    constructor(name = 'Default Collection') {
        this.name = name;
        this.createdAt = new Date();
        this.urls = new Set();
    }

    get isEmpty() {
        return this.urls.size === 0;
    }
}

class User {
    constructor(id = 0) {
        this.id = id;
        this.collections = new Map();
        this.tags = new Set();
        // this.urls = new Set();
        this.tag_urls = new Map(); // String - Set
        this.url_tags = new Map(); // String - Set
    }

    getCollectionTags(collectionId) {
        let tags = [];
        this.collections.get(collectionId).urls.forEach(url => {
            tags = tags.concat(Array.from(this.url_tags.get(url))); // make more fluent?
        });
        return tags;
    }

    createCollection(collectionId, ...urls) {
        if (!this.collections.has(collectionId)) {
            this.collections.set(collectionId, new Collection(collectionId));
        }
        let collection = this.collections.get(collectionId);
        urls.forEach(url => {
            // sanitize or validate url - regex ?
            collection.urls.add(url);
            // this.urls.add(url)
        });
    }

    createTag(name) {
        this.tags.add(name);
    }

    tagUrl(url, ...tags) {
        tags.forEach(tag => {
            this.createTag(tag);
            if (this.tag_urls.has(tag)) {
                urls = this.tag_urls.get(tag);
                urls.add(url);
            } else {
                let urlSet = new Set(url);
                this.tag_urls.set(tag, urlSet);
            }
            if (this.url_tags.has(url)) {
                tags = this.url_tags.get(url);
                tags.add(tag);
            } else {
                let tagSet = new Set(tag);
                this.url_tags.set(url, tagSet);
            }
        });
    }

    deleteCollection(collectionId) {
        this.collections.delete(collectionId);
        // TODO: cleanup links in maps that aren't in any collections
    }

    deleteTag(tag) {
        // TODO: cleanup in url_tags at some point
        this.tag_urls.delete(tag);
    }
}

let registered = BaseClass => class extends BaseClass {
    sync() {
        // TODO: firebase adapter
    }
}

export { User };