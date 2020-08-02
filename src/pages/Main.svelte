<script>
    import { v4 as uuidv4 } from 'uuid';

    import { currentTabTags, currentTabLink } from '../store.js';

    import MainView from './MainView.svelte';

    let addTagsInput = '';

    function addExistingTag(event) {
        const { tagId } = event.detail;
        currentTabTags.update(prev => {
            return prev.map(tag => (
                tag.id === tagId
                    ? { ...tag, added: !tag.added }
                    : tag
            ));
        });
    }

    function addNewTag(event) {
        const { tagName } = event.detail;
        const newTag = {
            id: uuidv4(),
            name: tagName,
            added: true
        };
        currentTabTags.update(prev => [newTag, ...prev]);
    }
</script>

<MainView
    currentTabLink={$currentTabLink ? $currentTabLink.url : ''}
    tags={$currentTabTags}
    {addTagsInput}
    on:tagClick={addExistingTag}
    on:selectSuggestion={addExistingTag}
    on:selectNew={addNewTag} />
