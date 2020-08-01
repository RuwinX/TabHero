<script>
    import MainView from './MainView.svelte';

    export let currentTabLink = '';
    export let tags = [];

    let addTagsInput = '';
</script>

<MainView
    {tags}
    {currentTabLink}
    {addTagsInput}
    on:tagClick={handleTagClick} />
