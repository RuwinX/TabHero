<script>
    import { chunk } from 'lodash-es';
    import Tag from './Tag.svelte';

    export let tags;

    const rows = chunk(tags, 2);
</script>

<style>
    .container {
        padding-top: 1rem;
        padding-bottom: 1rem;

        /* DEBUG */
        /* background-color: red; */
        /* border: 1px solid black; */
    }

    .row {
        display: flex;
        justify-content: space-between;
    }
    .row:not(:last-of-type) {
        margin-bottom: 1rem;
    }
</style>

<div class="container">
    {#each rows as [first, second]}
        <div class="row">
            {#if first}
                <Tag text={first.text} added={first.added} />
            {/if}
            {#if second}
                <Tag text={second.text} added={second.added} />
            {/if}
        </div>
    {/each}
</div>
