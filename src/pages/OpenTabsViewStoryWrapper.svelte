<script>
    import { Router } from 'svelte-routing';
    import OpenTabsView from './OpenTabsView.svelte';

    export let links;
</script>

<Router>
    <OpenTabsView
        {links} />
</Router>

