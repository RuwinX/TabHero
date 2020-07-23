<style>
    .container {
        background-color: var(--col-light-primary);
        border: solid 0.5px var(--col-primary);
        border-radius: 1.5rem;
        width: 20ch;  /* few ch higher than .text width */
    }
    .container.added {
        background-color: var(--col-primary);
    }

    .text {
        font-family: Avenir;
        font-weight: var(--font-weight-thicc);
        font-size: var(--font-size-md);
        color: var(--col-primary);
        text-align: center;
        margin: auto;
        cursor: default;

        width: 13ch;
        line-height: 1.5em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .text.added {
        color: var(--col-light-primary);
    }

    /* TODO: include hover case for feedback */
</style>

<div class="container {addedClass}" on:click|stopPropagation={handleClick}>
    <div class="text {addedClass}">{text}</div>
</div>

<script>
    export let text;
    export let added;

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    const handleClick = () => {
        dispatch('click');
    };

    const addedClass = added ? 'added' : '';
</script>
