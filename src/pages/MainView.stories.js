import { action } from '@storybook/addon-actions';

import MainView from './MainView.svelte';

export default {
    title: 'Pages/MainView',
    component: MainView,
};

const tags = [
    { id: 'xyz', added: true, name: 'Youtube' },
    { id: 'xyz', added: true, name: 'Coffee!' },
    { id: 'xyz', added: true, name: 'Study Philosophy' },
    { id: 'xyz', added: false, name: 'Events' },
    { id: 'xyz', added: false, name: 'Reading List' },
    { id: 'xyz', added: false, name: 'Medium' },
    { id: 'xyz', added: false, name: 'Design' },
    { id: 'xyz', added: false, name: 'On The Road' },
    { id: 'xyz', added: true, name: 'Recipe' },
    { id: 'xyz', added: false, name: 'Want To Watch' },
    { id: 'xyz', added: true, name: 'Docs' },
];

export const Default = () => ({
    Component: MainView,
    props: {
        tags: tags,
        currentTabUrl: 'www.google.co.in',
        addTagsInput: 'Re'
    },
    on: {
        tagClick: action('tagClicked'),
        selectSuggestion: action('selectSuggestion'),
        selectNew: action('selectNew')
    }
});

export const AddTagsCaseInsensitiveInputButNoMatch = () => ({
    Component: MainView,
    props: {
        tags: tags,
        currentTabUrl: 'www.google.co.in',
        addTagsInput: 'recipe'
    },
    on: {
        tagClick: action('tagClicked'),
        selectSuggestion: action('selectSuggestion'),
        selectNew: action('selectNew')
    }
});
