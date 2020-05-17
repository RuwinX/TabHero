<script>
    export let suggestions;
    export let value;

    $: exactMatchFound = suggestions.includes(value);
</script>

<div class="container">
    <div class="input-container">
        <input type="text" {value}>
    </div>
    <ul>
        <li class="first-item">
            <div>{value}</div>
        </li>
        {#each suggestions as item}
            <li>
                <div>
                    {item}
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .container {
        font-family: Avenir;
        font-weight: 900;
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
        width: 100%;
    }

    li {
        padding: 2px 10px;
    }
    li:not(:last-child){
        border-bottom: solid 0.5px #146cdb;
    }
</style>
