<script>
    import Navigation from "./Navigation.svelte";
    import { scrollPositionY } from '../store.js';
    import SvgIcon from './SvgIcon.svelte';
    import { lightBulbLine, burgerMenu } from '../assets/icons/icons.js'

    export let brandName

</script>

<header class="page-header{ $scrollPositionY > 100 ? ' page-header--is-sticky': ''}">
    <div class="page-header__container container">
        <div class="page-header__brand-holder">
            {brandName}
        </div>
        <div class="page-header__spacer"></div>
        <div class="page-header__navigation-holder">
            <Navigation />
            <SvgIcon d={lightBulbLine} />
        </div>
    </div>
</header>

<style lang="scss">
  .page-header {
    align-items: center;
    background-color: rgba(white, 0);
    bottom: auto;
    display: flex;
    height: 100px;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: all 100ms ease;
    width: 100%;
    z-index: 100;

    &--is-sticky {
      background-color: rgba(white, .15);
      height: 72px;
      transition: all 400ms ease;
      box-shadow: rgba(black, .15) 0 1px 6px;
    }

    &__container {
      display: flex;
      justify-content: space-between;
    }

    &__brand-holder {
      color: $c-brand-primary;
      text-transform: uppercase;
    }

    &__spacer {
      margin: 0 auto;
    }

    &__navigation-holder {
      display: flex;
      align-items: center;
    }

    @media (prefers-color-scheme: light) {
      &--is-sticky {
        background-color: rgba(white, .85);
      }
    }
  }

</style>

