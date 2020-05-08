<script>
    import { chunk, range } from 'lodash-es';
    import TagGrid from './TagGrid.svelte'

    export let tags;

    const pages = chunk(tags, 6);
    let currentIndex = 0;
    $: currentPage = pages[currentIndex];
    $: console.log(currentPage);

    function incrementPage() {
        if (currentIndex >= pages.length - 1) return;
        currentIndex = currentIndex + 1;
    }

    function decrementPage() {
        if (currentIndex <= 0) return;
        currentIndex = currentIndex - 1;
    }

    function setPage(index) {
        currentIndex = index;
    }
</script>

<div class="container">
    <div class="content">
        <TagGrid tags={currentPage} />
    </div>
    {#if pages.length > 1}
        <nav>
            <button on:click={decrementPage}>&lt;</button>
            <ul>
                {#each range(pages.length) as i}
                    <li>
                        <span class={i === currentIndex ? 'current' : ''} on:click={() => setPage(i)}></span>
                    </li>
                {/each}
            </ul>
            <button on:click={incrementPage}>&gt;</button>
        </nav>
    {/if}
</div>

<style>
    nav {
        display: flex;
        justify-content: space-between;
    }

    nav ul {
        padding: 0;
        margin: 0;
        list-style-type: none;

        flex-grow: 1;
        display: flex;
    }

    li {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li span {
        height: 5px;
        width: 80%;
        border-radius: 2px;
        background-color: #d8d8d8;
        cursor: pointer;
    }
    li span.current {
        background-color: #146cdb;
    }

    button {
        border: none;
        background-color: white;
    }
</style>
