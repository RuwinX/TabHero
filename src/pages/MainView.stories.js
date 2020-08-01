import { action } from '@storybook/addon-actions';

import MainView from './MainView.svelte';

export default {
    title: 'Pages/MainView',
    component: MainView,
};

const tags = [
    { text: 'Youtube', added: true },
    { text: 'Coffee!', added: true },
    { text: 'Study Philosophy', added: true },
    { text: 'Events', added: false },
    { text: 'Reading List', added: false },
    { text: 'Medium', added: false },
    { text: 'Design', added: false },
    { text: 'On The Road', added: false },
    { text: 'Recipe', added: true },
    { text: 'Want To Watch', added: false },
    { text: 'Docs', added: true },
];

export const Default = () => ({
    Component: MainView,
    props: {
        tags: tags,
        currentTabLink: 'www.google.co.in',
        addTagsInput: 'Re'
    },
    on: { tagClick: action('tagClicked') }
});
