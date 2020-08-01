import { action } from '@storybook/addon-actions';

import AddTagBar from './AddTagBar.svelte';

import { ADD_TAG_INPUT_MAX_LENGTH } from '../constants';

export default {
    title: 'AddTagBar',
    component: AddTagBar,
};

export const EmptyInput = () => ({
    Component: AddTagBar,
    props: {
        input: '',
        suggestions: [],
    },
    on: {
        selectSuggestion: action('selectSuggestion'),
        selectNew: action('selectNew')
    },
});

export const ManySuggestions = () => ({
    Component: AddTagBar,
    props: {
        input: 'G',
        suggestions: Array(10).fill({ id: 'xyz', name: 'Google' }),
    },
    on: {
        selectSuggestion: action('selectSuggestion'),
        selectNew: action('selectNew')
    },
});

export const FewSuggestions = () => ({
    Component: AddTagBar,
    props: {
        input: 'Go',
        suggestions: [
            { id: 'xyz', name: 'Goa' },
            { id: 'xyz', name: 'Google' }
        ],
    },
    on: {
        selectSuggestion: action('selectSuggestion'),
        selectNew: action('selectNew')
    },
});

export const ExactMatch = () => ({
    Component: AddTagBar,
    props: {
        input: 'Goa',
        suggestions: [{ id: 'xyz', name: 'Goa' }],
    },
    on: {
        selectSuggestion: action('selectSuggestion'),
        selectNew: action('selectNew')
    },
});

export const InputMaxLength = () => ({
    Component: AddTagBar,
    props: {
        input: Array(ADD_TAG_INPUT_MAX_LENGTH).fill('G').join(''),
        suggestions: [],
    },
    on: {
        selectSuggestion: action('selectSuggestion'),
        selectNew: action('selectNew')
    },
});

export const InputMaxLengthExceeded = () => ({
    Component: AddTagBar,
    props: {
        input: Array(ADD_TAG_INPUT_MAX_LENGTH + 1).fill('G').join(''),
        suggestions: [],
    },
    on: {
        selectSuggestion: action('selectSuggestion'),
        selectNew: action('selectNew')
    },
});


