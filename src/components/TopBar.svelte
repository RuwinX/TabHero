<script>
    import Icon from './Icon';
    export let state;
    export let user;
</script>

<style>
    .container {
        display: flex;

        border-top-left-radius: .5rem;
        border-top-right-radius: .5rem;
        background-color: #146cdb;

        font-family: Avenir;
        color: white;

        padding: .5rem;
    }

    header {
        flex-grow: 1;
        text-align: center;
    }

    h1 {
        font-size: 1.75rem;
        font-weight: 700;

        margin-bottom: .25rem;
    }

    .info {
        font-size: .75rem;
    }
    .info.not-logged-in {
        text-decoration: underline;
    }
    .info.not-logged-in:hover {
        font-weight: 900;
    }

    .user {
        font-weight: 900;
    }

    button {
        border-radius: .5rem;
        border: 1px solid transparent;
        background: transparent;
    }
    button:hover {
        border-color: white;
    }
</style>

<div class="container">
    <aside>
        <button>
            <Icon icon="share" fill="#fff" />
        </button>
    </aside>
    <header>
        <h1>Tab Hero</h1>
        <div>
            {#if state === 'LOGGED_IN'}
                <span class="info logged-in">
                    Logged in as: <span class="user">{user}</span>
                </span>
            {:else if state === 'LOGGING_IN'}
                <span class="info logging-in">Login Flow</span>
            {:else}
                <span class="info not-logged-in">Login to sync data across devices</span>
            {/if}
        </div>
    </header>
    <aside>
        <button>
            <Icon icon="close" fill="#fff" />
        </button>
    </aside>
</div>
