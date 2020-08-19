<script>
    import ActionButton from '../components/ActionButton.svelte';
    import SearchButton from '../components/SearchButton.svelte';
    import TagPages from '../components/TagPages.svelte';
    import AddTagBar from '../components/AddTagBar.svelte';
    import Heading from '../components/Heading.svelte';

    export let tags = [];
    export let currentTabUrl = '';
    export let addTagsInput = '';

    $: tagSuggestions = tags
        .filter(tag => tag.name.toLowerCase().startsWith(addTagsInput.toLowerCase()));
</script>

<style>
    section {
        padding: 1rem .75rem;

        /* DEBUG */
        /* border: 1px solid black; */
        /* background-color: yellow; */
    }
    section:not(:last-child) {
        border-bottom: .1rem solid var(--col-primary);
    }

    .center {
        display: flex;
        justify-content: center;
    }

    .row:not(:last-child) {
        margin-bottom: .75rem;
    }

    .url-text {
        font-size: var(--font-size-md);
        overflow-x: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .tag-pages-wrapper {
        min-height: 8rem;
        display: flex;
    }
    .tag-pages-wrapper > :global(*) {
        /* the min-height of the parent means we gotta center this child */
        /* height: 100% here doesn't work for some reason, so using this instead */
        flex: 1;
    }
</style>

<div class="container">
    <section>
        <div class="row center">
            <ActionButton text="Save All Open Tabs" />
        </div>
        <div class="row center">
            <SearchButton text="Search Tab Hero" />
        </div>
    </section>
    <section>
        <div class="row center">
            <Heading text="Manage Tags" />
        </div>
        <div class="row center">
            <p class="url-text">{currentTabUrl}</p>
        </div>
        <div class="row tag-pages-wrapper">
            <TagPages {tags} on:tagClick />
        </div>
    </section>
    <section>
        <div class="row center">
            <Heading text="Add Tags" />
        </div>
        <div class="row">
            <AddTagBar suggestions={tagSuggestions} bind:input={addTagsInput} on:selectSuggestion on:selectNew />
        </div>
    </section>
</div>
