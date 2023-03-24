<script>
  import SvgIcon from './SvgIcon.svelte';
  import { lightBulbLine } from '../assets/icons/icons.js';
  import { onMount } from 'svelte';

  const storageKey = 'theme-preference';
  let button;

  const onClick = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    setPreference();
  };

  const getColorPreference = () => {
    if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);
    else return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
  };

  const reflectPreference = () => {
    document.firstElementChild.setAttribute('data-theme', theme.value);
    button?.setAttribute('aria-label', theme.value);
  };

  const theme = {
    value: getColorPreference(),
  };

  window.onload = () => {
    reflectPreference();
  };

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({ matches: isDark }) => {
      theme.value = isDark ? 'dark' : 'light';
      setPreference();
    });

  onMount(() => {
    reflectPreference();
  });
</script>

<div class="dark-mode-toggle">
  <button
    bind:this={button}
    on:click={onClick}
    class={['dark-mode-toggle__button', theme.value].join(' ')}
    aria-live="polite"
    title="toggles dark day mode of the page"
  >
    <svg
      class={['icon icon--moon', theme.value === 'dark' ? 'visible' : 'hidden'].join(' ')}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      ><path
        d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
      /></svg
    >
    <svg
      class={['icon icon--sun', theme.value === 'light' ? 'visible' : 'hidden'].join(' ')}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 122.88"
      ><path
        d="M30,13.21A3.93,3.93,0,1,1,36.8,9.27L41.86,18A3.94,3.94,0,1,1,35.05,22L30,13.21Zm31.45,13A35.23,35.23,0,1,1,36.52,36.52,35.13,35.13,0,0,1,61.44,26.2ZM58.31,4A3.95,3.95,0,1,1,66.2,4V14.06a3.95,3.95,0,1,1-7.89,0V4ZM87.49,10.1A3.93,3.93,0,1,1,94.3,14l-5.06,8.76a3.93,3.93,0,1,1-6.81-3.92l5.06-8.75ZM109.67,30a3.93,3.93,0,1,1,3.94,6.81l-8.75,5.06a3.94,3.94,0,1,1-4-6.81L109.67,30Zm9.26,28.32a3.95,3.95,0,1,1,0,7.89H108.82a3.95,3.95,0,1,1,0-7.89Zm-6.15,29.18a3.93,3.93,0,1,1-3.91,6.81l-8.76-5.06A3.93,3.93,0,1,1,104,82.43l8.75,5.06ZM92.89,109.67a3.93,3.93,0,1,1-6.81,3.94L81,104.86a3.94,3.94,0,0,1,6.81-4l5.06,8.76Zm-28.32,9.26a3.95,3.95,0,1,1-7.89,0V108.82a3.95,3.95,0,1,1,7.89,0v10.11Zm-29.18-6.15a3.93,3.93,0,0,1-6.81-3.91l5.06-8.76A3.93,3.93,0,1,1,40.45,104l-5.06,8.75ZM13.21,92.89a3.93,3.93,0,1,1-3.94-6.81L18,81A3.94,3.94,0,1,1,22,87.83l-8.76,5.06ZM4,64.57a3.95,3.95,0,1,1,0-7.89H14.06a3.95,3.95,0,1,1,0,7.89ZM10.1,35.39A3.93,3.93,0,1,1,14,28.58l8.76,5.06a3.93,3.93,0,1,1-3.92,6.81L10.1,35.39Z"
      /></svg
    >
  </button>
</div>

<style lang="scss">
  .dark-mode-toggle {
    &__button {
      position: relative;
      cursor: pointer;
      height: 50px;
      overflow: hidden;
      width: 50px;
      background: transparent;
      border: none;
      border-radius: 2px;
    }
  }

  .icon {
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    display: block;
    position: absolute;
    height: auto;
    width: 30%;
    opacity: 1;
    transition: transform 350ms ease, opacity 100ms ease;
    will-change: transform, opacity;
    fill: hsl(var(--c-brand-primary));

    &.hidden {
      transform: translateY(200%);
      opacity: 0;
    }
  }
</style>
