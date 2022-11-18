<script>
    import { sectionNavItems } from '../store.js';
</script>

<style lang="scss">
    .side-navigation {
      background-color: rgba(fuchsia, .123);
      position: fixed;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

      &__list {
        margin: 0;
        padding: 15px 10px;
        list-style: none;
      }
    }
</style>

<div class="side-navigation">
    <ul class="side-navigation__list">
        {#each $sectionNavItems as item}
            <li class="side-navigation__list-item">
                <a href="#{item.replace(/\s/g,'')}">{item}</a>
            </li>
        {/each}
    </ul>
</div>