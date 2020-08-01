<script>
    import { onMount } from 'svelte';

    import { currentTabTags } from './store.js';

    import TopBar from './components/TopBar.svelte';
    import Main from './pages/Main.svelte';

    import { getCurrentTab, registerOnTabUpdate } from './services/chrome';
    import { syncTagsState } from './sync';

    let currentTab = {};

    onMount(async () => {
        currentTab = await getCurrentTab();
        const tags = await syncTagsState(currentTab.url);
        currentTabTags.set(tags);

        const removeListener = registerOnTabUpdate(async (newTab) => {
            currentTab = await getCurrentTab();
            const tags = await syncTagsState(currentTab.url);
            currentTabTags.set(tags);
        });

        return () => {
            removeListener();
        };
    });
</script>

<style>
    .container {
        width: 300px;
    }
</style>

<div class="container">
    <TopBar state="" user="" />
    <Main currentTabLink={currentTab.url} tags={$currentTabTags} />
</div>
