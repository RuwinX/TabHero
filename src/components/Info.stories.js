import Info from './Info.svelte';

export default {
    title: 'Info',
    component: Info,
};

export const MediumFontSize = () => ({
    Component: Info,
    props: {
        content: [
            ['This is', false],
            ['some bold piece', true],
            ['of text', false],
            ['like BOLD', true],
            ['and here too', true],
        ]
    },
});

export const SmallFontSize = () => ({
    Component: Info,
    props: {
        fontSize: 'small',
        content: [
            ['This is', false],
            ['some bold piece', true],
            ['of text', false],
            ['like BOLD', true],
            ['and here too', true],
        ]
    },
});
