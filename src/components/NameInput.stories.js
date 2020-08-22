import NameInput from './NameInput.svelte';

export default {
    title: 'NameInput',
    component: NameInput,
};

export const NoValue = () => ({
    Component: NameInput,
    props: {
        value: '',
        placeholder: 'This is some placeholder',
    }
});

export const SomeValue = () => ({
    Component: NameInput,
    props: {
        value: 'This is some value',
        placeholder: 'placeholder',
    }
});
