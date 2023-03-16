<script>
    import SvgIcon from './SvgIcon.svelte';
    import { lightBulbLine } from '../assets/icons/icons.js';
    import { onMount } from 'svelte';

    let theme = 'light';

    const toggleTheme = () => {
        console.log('click', theme === 'dark'); // todo: remove before merge!
        if (theme === 'dark') {
            theme = 'light';
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light');
            console.log('theme im if 1', theme); // todo: remove before merge!
        } else if (theme === 'light') {
            theme = 'dark';
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark');
            console.log('theme im if 1', theme); // todo: remove before merge!
        }
    }

    const detectColorScheme = () => {

        // local storage is used to override OS theme settings
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'dark') {
                theme = 'dark';
            }
        } else if (!window.matchMedia) {
            // matchMedia method not supported
            return false;

        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme = 'dark';
        }

        //dark theme preferred, set document with a `data-theme` attribute
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }

    onMount(() => {
        detectColorScheme();
        console.log('theme', theme); // todo: remove before merge!
    });
</script>

<div class="dark-mode-toggle">
    <button on:click={toggleTheme} class="dark-mode-toggle__button">
        <SvgIcon class="dark-mode-toggle__icon" d={lightBulbLine}/>
    </button>
</div>

<style lang="scss">
  .dark-mode-toggle {
    &__button {
      cursor: pointer;
    }
  }
</style>