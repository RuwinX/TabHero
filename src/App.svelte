<script>
    import { onMount } from 'svelte';
    import { get } from 'svelte/store';

    import { currentTabTags, currentTabLink } from './store.js';

    import TopBar from './components/TopBar.svelte';
    import Main from './pages/Main.svelte';

    import { getCurrentTab, registerOnTabUpdate } from './services/chrome';
    import { initAppState, appToStorage } from './sync';

    onMount(async () => {
        const currentTab = await getCurrentTab();
        const { tags, currentLink } = await initAppState(currentTab);
        currentTabTags.set(tags);
        currentTabLink.set(currentLink);

        const removeListener = registerOnTabUpdate(async (newTab) => {
            // TODO: sync app state to storage before syncing new tab data from storage
            await appToStorage(get(currentTabTags), get(currentTabLink));

            const { tags, currentLink } = await initAppState(newTab);
            currentTabTags.set(tags);
            currentTabLink.set(currentLink);
        });

        return async () => {
            removeListener();
            // await appToStorage(get(currentTabTags), get(currentTabLink));
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
