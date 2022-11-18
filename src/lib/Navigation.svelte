<script>
    let items = [
        {name: 'Home', href: '/', title: 'Homepage'},
        {name: 'Service', href: '/', title: 'Our service page'},
        {name: 'Contact', href: '/', title: 'Contact us'},
    ];
</script>

<nav class="navigation">
    <ul class="navigation__list">
        {#each items as item}
            <li class="navigation__item">
                <a class="navigation__link" href="{item.href}" title="{item.title}">{item.name}</a>
            </li>
            {:else}
                <span>No Navigation items</span>
        {/each}
    </ul>
</nav>

<style lang="scss">
  .navigation {

    &__list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
    }

    &__item {
      margin: 0 10px;
      padding: 0;
    }

    &__link {
    }
  }
</style>