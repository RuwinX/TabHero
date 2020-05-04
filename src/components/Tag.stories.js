import { action } from '@storybook/addon-actions';

import Tag from './Tag.svelte';

export default {
    title: 'Tag',
    component: Tag,
};

export const AddedShort = () => ({
    Component: Tag,
    props: {
        text: 'Youtube',
        added: true,
    },
    on: { click: action('clicked') },
});

export const AddedLong = () => ({
    Component: Tag,
    props: {
        text: 'Study Philosophy',
        added: true,
    },
    on: { click: action('clicked') },
});

export const NotAddedShort = () => ({
    Component: Tag,
    props: {
        text: 'Youtube',
        added: false,
    },
    on: { click: action('clicked') },
});

export const NotAddedLong = () => ({
    Component: Tag,
    props: {
        text: 'Study Philosophy',
        added: false,
    },
    on: { click: action('clicked') },
});
