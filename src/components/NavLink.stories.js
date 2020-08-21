import { action } from '@storybook/addon-actions';

import NavLink from './NavLink.svelte';

export default {
    title: 'NavLink',
    component: NavLink,
};

export const DefaultAndClicked = () => ({
    Component: NavLink,
    props: {
        text: 'Some Text Content'
    },
    on: { click: action('click') }
});
