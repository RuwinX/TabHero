import NameInput from './NameInput.svelte';

export default {
    title: 'NameInput',
    component: NameInput,
};

export const NoValue = () => ({
    Component: NameInput,
    props: {
        value: '',
    }
});

export const SomeValue = () => ({
    Component: NameInput,
    props: {
        value: 'This is some value',
    }
});
