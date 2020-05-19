import TagPages from './TagPages.svelte';

export default {
    title: 'TagPages',
    component: TagPages,
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

export const OnePage = () => ({
    Component: TagPages,
    props: {
        tags: tags.slice(0, 6)
    },
});

export const ManyPages = () => ({
    Component: TagPages,
    props: {
        tags: [...tags, ...tags]
    },
});

export const EmptyRowsOnLastPage = () => ({
    Component: TagPages,
    props: {
        tags: tags.slice(0, 8)
    },
});
