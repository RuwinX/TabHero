<script>
    import { currentTabTags } from '../store.js';

    import MainView from './MainView.svelte';

    export let currentTabLink = '';

    let addTagsInput = '';

    function handleTagClick(event) {
        const tagId = event.detail.tagId;
        currentTabTags.update(prev => {
            return prev.map(tag => (
                tag.id === tagId
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
