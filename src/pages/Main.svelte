<script>
    import { currentTabTags } from '../store.js';

    import MainView from './MainView.svelte';

    export let currentTabLink = '';

    let addTagsInput = '';

    function addExistingTag(event) {
        const { tagId } = event.detail;
        currentTabTags.update(prev => {
            return prev.map(tag => (
                tag.id === tagId
                    ? { ...tag, added: !tag.added }
                    : tag
            ));
        });
    }

    function addNewTag(event) {
        const { tagName } = event.detail;
        alert(tagName);
    }
</script>

<MainView
    {currentTabLink}
    tags={$currentTabTags}
    {addTagsInput}
    on:tagClick={addExistingTag}
    on:selectSuggestion={addExistingTag}
    on:selectNew={addNewTag} />
