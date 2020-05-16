import TopBar from './TopBar.svelte';

export default {
    title: 'TopBar',
    component: TopBar,
};


export const loggedIn = () => ({
    Component: TopBar,
    props: {
        loggedIn:true,
        loginFlow:false
    },
  });

  export const NotLoggedIn = () => ({
    Component: TopBar,
    props: {
        loggedIn:false,
        loginFlow:false
    },
  });

  export const loggingInProcess = () => ({
    Component: TopBar,
    props: {
        loggedIn:false,
        loginFlow:true
    },
  });