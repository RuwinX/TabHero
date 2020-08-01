<script>
    import { createEventDispatcher } from 'svelte';

    import { ADD_TAG_INPUT_MAX_LENGTH } from '../constants';

    export let suggestions = [];
    export let input = '';
    const MAX_LEN = ADD_TAG_INPUT_MAX_LENGTH;

    $: exactMatchFound = suggestions.find(tag => tag.name === input) !== undefined;
    $: empty = input === '';

    const dispatch = createEventDispatcher();

    function handleSuggestionClick(tagId) {
        dispatch('selectSuggestion', { tagId });
    }
    function handleNewClick(inputText) {
        dispatch('selectNew', {
            tagName: inputText
        });
    }
</script>

<div class="container" class:empty>
    <div class="input-container" class:empty>
        <input
            bind:value={input}
            type="text"
            placeholder="Search from your tag library or create a new tag!">
    </div>
    {#if input.length > MAX_LEN}
        <div class="info-prompt-wrapper">
            <span class="prompt">Please add tags under {MAX_LEN + 1} characters only</span>
        </div>
    {:else if input !== ''}
        <ul>
            {#if !exactMatchFound}
                <li class="new" on:click={e => handleNewClick(input)}>
                    <span>{input}</span>
                    <span class="item-prompt-wrapper">
                        <span class="prompt">+Create New Tag and Add</span>
                    </span>
                </li>
            {/if}
            {#each suggestions as { id, name }}
                <li on:click={e => handleSuggestionClick(id)}>
                    <span>{name}</span>
                    <span class="item-prompt-wrapper">
                        <span class="prompt">+Add</span>
                    </span>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .container {
        color: var(--col-primary);

        border: solid 0.5px var(--col-primary);
        border-top-left-radius: .25rem;
        border-top-right-radius: .25rem;
    }
    .container.empty {
        border-radius: .25rem;
    }

    .input-container {
        /* without horizontal padding, input always overflows the container */
        padding: .5rem 1rem;
        border-bottom: solid 0.5px var(--col-primary);
    }
    .input-container.empty {
        border-bottom: none;
    }

    input {
        width: 100%;
        font-weight: var(--font-weight-thicc);
        color: inherit;
        outline: none;
    }
    input:placeholder-shown {
        font-weight: var(--font-weight-thinn);
        font-size: var(--font-size-sm);
        font-style: oblique;
    }

    ul {
        /* cut off the scrollable view's last visible item */
        max-height: 5rem;
        overflow-y: scroll;
    }

    li {
        cursor: default;
        padding: .2rem 1rem;
        font-weight: var(--font-weight-thin);
    }
    li:not(:last-child){
        border-bottom: solid 0.5px var(--col-primary);
    }
    li.new {
        font-weight: var(--font-weight-thicc);
    }
    li:hover {
        background-color: var(--col-primary);
    }
    li:hover * {
        color: var(--col-light-primary);
    }

    .prompt {
        font-size: var(--font-size-xsm);
        font-weight: var(--font-weight-thicc);
        color: var(--col-tertiary);
        vertical-align: middle;
    }

    .info-prompt-wrapper {
        text-align: center;
    }
    .item-prompt-wrapper {
        margin-left: .25rem;
        white-space: nowrap;
    }
</style>
