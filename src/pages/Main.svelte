<script>
    import ActionButton from '../components/ActionButton.svelte';
    import SearchButton from '../components/SearchButton.svelte';
    import TagPages from '../components/TagPages.svelte';
    import AddTagBar from '../components/AddTagBar.svelte';
    import Heading from '../components/Heading.svelte';

    export let currentTabLink = '';
    export let tags = [];

    let addTagsInput = '';
    $: tagNames = tags.map(tag => tag.text);
    $: tagSuggestions = tagNames.filter(tagName => tagName.startsWith(addTagsInput));
</script>

<style>
    .container {
        border: .1rem solid var(--col-primary);
        border-top: 0;
        border-bottom-left-radius: .5rem;
        border-bottom-right-radius: .5rem;
    }

    section {
        padding: 1rem .5rem;

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
    .row > .stretch {
        flex-grow: 1;
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
            <p>{currentTabLink}</p>
        </div>
        <TagPages {tags} />
    </section>
    <section>
        <div class="row">
            <Heading text="Add Tags" />
        </div>
        <div class="row">
            <div class="stretch">
                <AddTagBar suggestions={tagSuggestions} bind:input={addTagsInput} />
            </div>
        </div>
    </section>
</div>
