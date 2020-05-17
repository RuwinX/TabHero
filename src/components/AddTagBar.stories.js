import { action } from '@storybook/addon-actions';

import AddTagBar from './AddTagBar.svelte';

export default {
    title: 'AddTagBar',
    component: AddTagBar,
};

export const Foo = () => ({
    Component: AddTagBar,
    props: {
        value: 'Go',
        suggestions: ['Goa', 'Google'],
    },
    on: {},
});
