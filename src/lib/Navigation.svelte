<script>
  import DarkModeToggle from './DarkModeToggle.svelte';

  export let items = [
    { name: 'Home', href: '/', title: 'Homepage' },
    { name: 'Service', href: '/', title: 'Our service page' },
    { name: 'Plan', href: '/', title: 'Our plan page' },
    { name: 'Blog', href: '/', title: 'Our blog page' },
    { name: 'Contact', href: '/', title: 'Contact us' },
  ];

  let navigationOpen = false;

  const toggle = () => {
    navigationOpen = !navigationOpen;
  };
</script>

<nav class="navigation">
  <div class="navigation__container {navigationOpen ? 'navigation__container--is-open' : ''}">
    <ul class="navigation__list">
      {#each items as item}
        <li class="navigation__item">
          <a class="navigation__link" href={item.href} title={item.title}>{item.name}</a>
        </li>
      {:else}
        <span>No Navigation items</span>
      {/each}
    </ul>
    <button
      class="navigation__button navigation__button--close"
      aria-label="Close navigation"
      on:click={toggle}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          id="Vector"
          d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.05 18.364L5.636 16.95L10.586 12L5.636 7.04999L7.05 5.63599L12 10.586Z"
        />
      </svg>
    </button>
  </div>
  <div class="navigation__random-action-container">
    <DarkModeToggle />
    <!--
        <div class="dark-mode-toggle" data-component="DarkModeToggleComponent">
            <button type="button" class="dark-mode-toggle__button" aria-label="toggle dark mode">
                <svg class="dark-mode-toggle__button-icon">
                    <use xlink:href="#sprite-lightbulb-line"></use>
                </svg>
            </button>
        </div>
        -->
  </div>
  <button
    class="navigation__button navigation__button--open"
    aria-label="Open navigation"
    on:click={toggle}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
    </svg>
  </button>
</nav>

<style lang="scss">
  .navigation {
    $navigation-button-size: 50px;
    $navigation-breakpoint: $bp-tablet-portrait-min;

    align-items: center;
    display: flex;

    &__container {
      display: none;

      @include breakpoint($navigation-breakpoint) {
        position: relative;
        display: block;
        margin-right: 1em;
      }

      &--is-open {
        display: block;
        height: 100%;
        left: 0;
        min-height: 100vh;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
      }
    }

    &__random-action-container {
      display: flex;
    }

    &__list {
      list-style: none;
      animation: 0.6s ease 0s 1 normal both running open-menu;
      background: rgba(black, 0.85);
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      margin: 0;
      padding: 100px 20px;
      width: 100%;

      @include breakpoint($navigation-breakpoint) {
        animation: none;
        background-color: transparent;
        flex-direction: row;
        padding: 0;
      }
    }

    &__item {
      animation: 0.5s ease 0.3s 1 normal both running slide-up;
      margin-bottom: 0.75em;

      &:nth-child(2) {
        animation-delay: 0.4s;
      }

      &:nth-child(3) {
        animation-delay: 0.5s;
      }

      &:nth-child(4) {
        animation-delay: 0.6s;
      }

      &:nth-child(5) {
        animation-delay: 0.7s;
      }

      @include breakpoint($navigation-breakpoint) {
        animation: none;
        margin-bottom: 0;
        margin-right: 1em;
      }
    }

    &__link {
      // todo: create font style for menu links
      color: darken($c-brand-primary, 20%);
      display: block;
      text-align: center;
    }

    &__button {
      align-items: center;
      appearance: none;
      background: transparent;
      border: none;
      cursor: pointer;
      display: inline-flex;
      height: $navigation-button-size;
      justify-content: center;
      margin: 0;
      padding: 0;
      width: $navigation-button-size;

      @include breakpoint($navigation-breakpoint) {
        display: none;
      }

      &--close {
        animation: 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.5s 1 normal both running blob-up;
        fill: white;
        position: fixed;
        right: 20px;
        top: 25px;
      }
    }
  }

  @keyframes open-menu {
    from {
      background: rgba(white, 0.85);
      clip-path: circle(50px at 94.75% 8.5%);
      opacity: 0.5;
    }

    to {
      background: rgba(black, 0.85);
      clip-path: circle(150vmax at 94.75% 8.5%);
      opacity: 1;
    }
  }

  @keyframes blob-up {
    from {
      opacity: 0;
      transform: scale(0.1);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(24px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
