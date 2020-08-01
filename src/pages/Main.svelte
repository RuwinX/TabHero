<script>
    import { currentTabTags } from '../store.js';

    import MainView from './MainView.svelte';

    export let currentTabLink = '';

    let addTagsInput = '';

    function handleTagClick(event) {
        const tagName = event.detail.tag;
        currentTabTags.update(prev => {
            return prev.map(tag => (
                tag.text === tagName
                    ? { ...tag, added: !tag.added }
                    : tag
            ));
        });
    }
</script>

<MainView
    {currentTabLink}
    tags={$currentTabTags}
    {addTagsInput}
    on:tagClick={handleTagClick} />
