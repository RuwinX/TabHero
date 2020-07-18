<script>
    export let text = '';
</script>

<style>
    button {
        border: 1px solid transparent;
        border-radius: 4px;
        padding: .5rem .75rem;
        background-color: #ff388f;

        font-family: Avenir;
        font-weight: 500;
        font-size: 1.3rem;
        color: white;
    }

    button:active {
        border: 1px solid #ff388f;
        background-color: white;
        color: #ff388f;
    }
</style>

<button>{text}</button>
