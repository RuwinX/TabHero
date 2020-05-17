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
        <li class="new">
            <div>
                <span>{value}</span>
                <span class="prompt">+Create New Tag and Add</span>
            </div>
        </li>
        {#each suggestions as item}
            <li>
                <div>
                    <span>{item}</span>
                    <span class="prompt">+Add</span>
                </div>
            </li>
        {/each}
    </ul>
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
    }

    li {
        padding: 2px 10px;
    }
    li:not(:last-child){
        border-bottom: solid 0.5px #146cdb;
    }
    li.new {
        font-weight: 900;
    }

    .prompt {
        font-size: .5rem;
        font-weight: 900;
        color: #249c68;
        vertical-align: middle;
        margin-left: .25rem;
    }
</style>
