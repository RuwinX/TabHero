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
        border: 1px solid black;
    }

    .row {
        display: flex;
        justify-content: space-around;
    }
    .row:not(:last-of-type) {
        margin-bottom: 1rem;
    }

    .cell {
        width: 50%;
    }

    .center {
        max-width: max-content;
        margin: auto;
    }
</style>

<div class="container">
    {#each rows as [first, second]}
        <div class="row">
            <div class="cell">
                <div class="center">
                    {#if first}
                        <Tag text={first.text} added={first.added} />
                    {/if}
                </div>
            </div>
            <div class="cell">
                <div class="center">
                    {#if second}
                        <Tag text={second.text} added={second.added} />
                    {/if}
                </div>
            </div>
        </div>
    {/each}
</div>
