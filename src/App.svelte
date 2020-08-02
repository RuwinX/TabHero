<script>
    import { onMount } from 'svelte';

    import { currentTabTags, currentTabLink } from './store.js';

    import TopBar from './components/TopBar.svelte';
    import Main from './pages/Main.svelte';

    import { getCurrentTab, registerOnTabUpdate } from './services/chrome';
    import { initAppState } from './sync';

    onMount(async () => {
        const link = await getCurrentTab();
        currentTabLink.set(link);
        const tags = await initAppState($currentTabLink.url);
        currentTabTags.set(tags);

        const removeListener = registerOnTabUpdate(async (newTabLink) => {
            // TODO: sync app state to storage before syncing new tab data from storage
            currentTabLink.set(newTabLink);
            const tags = await initAppState($currentTabLink.url);
            currentTabTags.set(tags);
        });

        return () => {
            removeListener();
        };
    });
</script>

<style>
    .container {
        width: 340px;
    }
</style>

<div class="container">
    <TopBar state="" user="" />
    <Main />
</div>
