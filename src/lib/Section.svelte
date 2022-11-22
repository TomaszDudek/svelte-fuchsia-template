<script>
    import { onMount } from 'svelte';
    import { sectionNavItems } from '../store.js';

    export let title = '';
    export let highlighted = false;

    const id = title?.replace(/\s/g,'');

    onMount(() => {
        if (title !== '') {
            $sectionNavItems = [...$sectionNavItems, {title: title, id: id}];
        }
    })
</script>

<section class="section{highlighted ? ' section--is-highlighted' : ''}" {id}>
    {#if (title)}
        <div class="section__header">
            <h2 class="section__tilte">{title}</h2>
        </div>
    {/if}
    <div class="section__container">
       <slot></slot>
    </div>
</section>

<style lang="scss">
  .section {
    padding: 4rem 0;
    width: 100vw;

    &--is-highlighted {
      background-color: $c-section-bg;
    }

    &__container {
      @extend .container;
    }
  }
</style>