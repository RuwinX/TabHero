import TopBar from './TopBar.svelte';

export default {
    title: 'TopBar',
    component: TopBar,
};

export const NotLoggedInDefaultAndHover = () => ({
    Component: TopBar,
    props: {
        state: 'NOT_LOGGED_IN',
        user: null,
    },
});

export const LoggingIn = () => ({
    Component: TopBar,
    props: {
        state: 'LOGGING_IN',
        user: 'somebody@example.com',
    },
});

export const LoggedInAndHoverOnIcons = () => ({
    Component: TopBar,
    props: {
        state: 'LOGGED_IN',
        user: 'somebody@example.com',
    },
});
