<script>
    export let brandName
    let y;
</script>

<header class="page-header{ y > 250 ? ' page-header--is-sticky': ''}">
    <div class="page-header__container container">
        <div class="page-header__brand-holder">
            {brandName}
        </div>
        <div class="page-header__spacer"></div>
        <div class="page-header__navigation-holder">
            Nav
        </div>
    </div>
</header>

<style lang="scss">
  .page-header {
    align-items: center;
    background-color: rgba($f-brand-primary, .123);
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
      background-color: rgba($f-brand-primary, .75);
      height: 72px;
      transition: all 400ms ease;
    }

    &__container {
      display: flex;
      justify-content: space-between;
    }

    &__brand-holder {}

    &__spacer {
      margin: 0 auto;
    }

    &__brand-holder {}
  }

</style>

<svelte:window bind:scrollY={y}/>