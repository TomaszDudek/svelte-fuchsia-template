<script>
    let items = ['Home', 'Service', 'Contact'];
</script>

<nav class="navigation">
    <ul class="navigation__list">
        {#each items as item}
            <li class="navigation__item">
                <a class="navigation__link" href="#">{item}</a>
            </li>
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

      &__link {}
    }
</style>