<script>
  import { onMount } from 'svelte';
  import { sectionNavItems, colorScheme } from '../store.js';

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
  class={[
    'section',
    $colorScheme,
    highlighted ? 'section--is-highlighted' : '',
    $$props.class,
  ].join(' ')}
  style={[noPaddingBottom ? 'padding-bottom: 0' : '', $$props.style].join(' ')}
  {id}
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

    &--is-relative {
      position: relative;
    }

    &--is-highlighted {
      background-color: $c-section-bg;
    }

    &__container {
      @extend .container;
    }
  }
</style>
