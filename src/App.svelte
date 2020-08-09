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
        /* Max width and height of popup: https://stackoverflow.com/a/47570170 */
        width: 310px;
        height: 540px;

        display: flex;
        flex-direction: column;
    }

    .body {
        flex-grow: 1;

        /* the app body has a border. Hence, overflow at this layer, not at the app container layer */
        overflow: auto;

        border: .1rem solid var(--col-primary);
        border-top: 0;
        border-bottom-left-radius: .5rem;
        border-bottom-right-radius: .5rem;
    }
</style>

<div class="container">
    <TopBar state="" user="" />
    <div class="body">
        <Main />
    </div>
</div>
