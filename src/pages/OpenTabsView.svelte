<script>
    import LinksList from '../components/LinksList.svelte';
    import Heading from '../components/Heading.svelte';
    import ActionButton from '../components/ActionButton.svelte';
    import Info from '../components/Info.svelte';

    export let links = [];
</script>

<div class="container">
    <section>
        <div class="row">
            <Info content={[
                [false, 'You have'],
                [true, `${links.length} tabs`],
                [false, 'currently open'],
            ]}/>
        </div>
        <div class="row">
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
