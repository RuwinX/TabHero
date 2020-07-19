<script>
    import TopBar from '../components/TopBar';
    import ActionButton from '../components/ActionButton';
    import SearchButton from '../components/SearchButton';
    import TagPages from '../components/TagPages';
    import AddTagBar from '../components/AddTagBar';
    import Heading from '../components/Heading';

    export let currentTabLink;
    export let tags;

    let addTagsInput = '';
    $: tagNames = tags.map(tag => tag.text);
    $: tagSuggestions = tagNames.filter(tagName => tagName.startsWith(addTagsInput));
</script>

<style>
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

    section {
        padding: 1rem .5rem;

        /* DEBUG */
        /* border: 1px solid black; */
        /* background-color: yellow; */
    }
</style>

<TopBar loggedIn={false} loginFlow={false} />
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
