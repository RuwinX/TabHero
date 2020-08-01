<script>
    import { onMount } from 'svelte';

    import TopBar from './components/TopBar.svelte';
    import Main from './pages/Main.svelte';

    import { getCurrentTab, registerOnTabUpdate } from './services/chrome';
    import { syncTagsState } from './sync';

    let currentTab = {};
    let currentTabTags = [];

    onMount(async () => {
        currentTab = await getCurrentTab();
        currentTabTags = await syncTagsState(currentTab.url);

        const removeListener = registerOnTabUpdate(async (newTab) => {
            currentTab = await getCurrentTab();
            currentTabTags = await syncTagsState(currentTab.url);
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
    <Main currentTabLink={currentTab.url} tags={currentTabTags} />
</div>
