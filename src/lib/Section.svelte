<script>
    import { onMount } from 'svelte'

    export let title = '';
    export let highlighted = false;

    const id = '';

    onMount(() => {
        if (title !== '') {
            console.log('onMont', title); // todo: remove before merge!
        }
    })

    const createID = (title) => {
        console.log(title);
    }
</script>

<section class="section{highlighted ? ' section--is-highlighted' : ''}">
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
      width: 100vw;
        padding: 4rem 0;

        &--is-highlighted {
            background-color: $c-section-bg;
        }

      &__container {
        @extend .container;
      }
    }
</style>