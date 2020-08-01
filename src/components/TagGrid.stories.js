import { action } from '@storybook/addon-actions';

import TagGrid from './TagGrid.svelte';

export default {
    title: 'TagGrid',
    component: TagGrid,
};

const tags = [
    { text: 'Youtube', added: true },
    { text: 'Coffee!', added: true },
    { text: 'Study Philosophy', added: true },
    { text: 'Events', added: false },
    { text: 'Reading List', added: false },
    { text: 'Medium', added: false },
];

export const AllCellsFilled = () => ({
    Component: TagGrid,
    props: {
        tags: [...tags, ...tags]
    },
    on: { tagClick: action('tagClicked') }
});

export const EmptyCellsAndRows = () => ({
    Component: TagGrid,
    props: {
        minRows: 4,
        tags: tags.slice(0, 3)
    },
    on: { tagClick: action('tagClicked') }
});
