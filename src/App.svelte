<script>
import TagPages from './components/TagPages.svelte';
import Main from './components/Main.svelte';
import User from './_User.js'

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
</script>

<TagPages tags={[...tags, ...tags, ...tags]} />
<Main />
