import { action } from '@storybook/addon-actions';

import AddTagBar from './AddTagBar.svelte';

export default {
    title: 'AddTagBar',
    component: AddTagBar,
};

export const ManySuggestions = () => ({
    Component: AddTagBar,
    props: {
        input: 'G',
        suggestions: Array(10).fill('Google'),
    },
    on: {},
});

export const FewSuggestions = () => ({
    Component: AddTagBar,
    props: {
        input: 'Go',
        suggestions: ['Goa', 'Google'],
    },
    on: {},
});

export const ExactMatch = () => ({
    Component: AddTagBar,
    props: {
        input: 'Goa',
        suggestions: ['Goa'],
    },
    on: {},
});

export const InputMaxLength = () => ({
    Component: AddTagBar,
    props: {
        input: Array(15).fill('G').join(''),
        suggestions: [],
    },
    on: {},
});

export const InputLengthExceeded = () => ({
    Component: AddTagBar,
    props: {
        input: Array(16).fill('G').join(''),
        suggestions: [],
    },
    on: {},
});


