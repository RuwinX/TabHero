<script>
    import { onMount, onDestroy } from 'svelte';
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
            const { tags, currentLink } = await initAppState(newTab);
            currentTabTags.set(tags);
            currentTabLink.set(currentLink);
        });

        return async () => {
            removeListener();
        };
    });

    const unsubscribe = currentTabTags.subscribe(async tags => {
        await appToStorage(get(currentTabTags), get(currentTabLink));
    });

    onDestroy(unsubscribe);
</script>

<style>
    .container {
        width: 310px;
    }
</style>

<div class="container">
    <TopBar state="" user="" />
    <Main />
</div>
