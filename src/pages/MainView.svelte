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
        .filter(tag => tag.name.toLowerCase().startsWith(addTagsInput.toLowerCase()))
        .map(({ id, name }) => ({ id, name }));
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

    .row {
        display: flex;
        justify-content: center;
    }
    .row:not(:last-child) {
        margin-bottom: .75rem;
    }

    .stretch {
        /* This element should have normal layout, so that its child get's the automatic width: 100% */
        flex-grow: 1;
    }
    .stretch > :global(*) {
        height: 100%;
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
    }
</style>

<div class="container">
    <section>
        <div class="row">
            <ActionButton text="Save All Open Tabs" />
        </div>
        <div class="row">
            <SearchButton text="Search Tab Hero" />
        </div>
    </section>
    <section>
        <div class="row">
            <Heading text="Manage Tags" />
        </div>
        <div class="row">
            <p class="url-text">{currentTabUrl}</p>
        </div>
        <div class="row">
            <div class="stretch tag-pages-wrapper">
                <TagPages {tags} on:tagClick />
            </div>
        </div>
    </section>
    <section>
        <div class="row">
            <Heading text="Add Tags" />
        </div>
        <div class="row">
            <div class="stretch">
                <AddTagBar suggestions={tagSuggestions} bind:input={addTagsInput} on:selectSuggestion on:selectNew />
            </div>
        </div>
    </section>
</div>
