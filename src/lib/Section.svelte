<script>
  import { onMount } from 'svelte';
  import { sectionNavItems } from '../store.js';

  export let title = '';
  export let highlighted = false;
  export let sectionContainer = true;
  export let noPaddingBottom = false;

  const id = title?.replace(/\s/g, '').replace('&', '');

  onMount(() => {
    if (title !== '') {
      $sectionNavItems = [...$sectionNavItems, { title: title, id: id }];
    }
  });
</script>

<section
  class="section{highlighted ? ' section--is-highlighted' : ''}"
  {id}
  style={noPaddingBottom ? 'padding-bottom: 0' : ''}
>
  {#if title}
    <div class="section__header">
      <h2 class="section__tilte">{title}</h2>
    </div>
  {/if}

  <div class={sectionContainer === true ? 'section__container' : ''}>
    <slot />
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
