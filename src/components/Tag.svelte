<style>
    .container {
        background-color: white;
        border: solid 0.5px #146cdb;
        border-radius: 13px;
        width: 20ch;  /* few ch higher than .text width */
    }
    .container.added {
        background-color: #146cdb;
    }

    .text {
        font-family: Avenir;
        font-weight: 900;
        color: #146cdb;
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
        color: #f0f6ef;
    }
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
