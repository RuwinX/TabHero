<script>
    import { twelveHourTime } from '../utils';

    export let value = '';

    $: if (value === '') {
        const currentDate = new Date();
        value = `${twelveHourTime(currentDate)}, ${currentDate.toDateString()}`;
    }
</script>

<style>
    input {
        border: solid 0.5px var(--col-primary);
        border-radius: .25rem;
        width: 100%;
        font-size: var(--font-size-md);
        outline: none;
        text-align: center;
        padding: .5rem 1rem;
    }
</style>

<input
    bind:value
    type="text">

