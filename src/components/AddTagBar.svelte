<script>
    export let suggestions;
    export let input;
    const MAX_LEN = 15;

    $: exactMatchFound = suggestions.includes(input);
</script>

<div class="container">
    <div class="input-container">
        <input type="text" value={input}>
    </div>
    {#if input.length > MAX_LEN}
        <div class="info-prompt-wrapper">
            <span class="prompt">Please add tags under {MAX_LEN + 1} characters only</span>
        </div>
    {:else}
        <ul>
            {#if !exactMatchFound}
                <li class="new">
                    <div>
                        <span>{input}</span>
                        <span class="item-prompt-wrapper">
                            <span class="prompt">+Create New Tag and Add</span>
                        </span>
                    </div>
                </li>
            {/if}
            {#each suggestions as item}
                <li>
                    <div>
                        <span>{item}</span>
                        <span class="item-prompt-wrapper">
                            <span class="prompt">+Add</span>
                        </span>
                    </div>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .container {
        font-family: Avenir;
        color: #146cdb;

        border: solid 0.5px #146cdb;
        border-top-left-radius: 2.5px;
        border-top-right-radius: 2.5px;
    }

    .input-container {
        /* without horizontal padding, input always overflows the container */
        padding: 5px 10px;
        border-bottom: solid 0.5px #146cdb;
    }
    input {
        /* form inputs don't inherit font styles */
        width: 100%;
        font-family: inherit;
        font-weight: 900;
        color: inherit;
        outline: none;
    }

    ul {
        /* cut off the scrollable view's last visible item */
        max-height: 4.5rem;
        overflow-y: scroll;
    }

    li {
        cursor: default;
        padding: 2px 10px;
    }
    li:not(:last-child){
        border-bottom: solid 0.5px #146cdb;
    }
    li.new {
        font-weight: 900;
    }
    li:hover {
        background-color: #146cdb;
    }
    li:hover * {
        color: #f0f6ef;
    }

    .prompt {
        font-size: .5rem;
        font-weight: 900;
        color: #249c68;
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
