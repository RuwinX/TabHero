<script>
    import LinksList from '../components/LinksList.svelte';
    import Heading from '../components/Heading.svelte';
    import ActionButton from '../components/ActionButton.svelte';
    import Info from '../components/Info.svelte';
    import NameInput from '../components/NameInput.svelte';

    export let links = [];
    export let collectionName = '';
</script>

<div class="container">
    <section>
        <div class="row center">
            <NameInput bind:value={collectionName} />
        </div>
        <div class="row center">
            <Info content={[
                [false, 'You have'],
                [true, `${links.length} tabs`],
                [false, 'currently open'],
            ]}/>
        </div>
        <div class="row center">
            <ActionButton text="Save" />
        </div>
    </section>
    <section>
        <div class="row">
            <Heading text="List of Current Tabs" />
        </div>
        <div class="row">
            <LinksList {links} faviconSize={16} />
        </div>
    </section>
</div>
