<script>
    import { onMount } from 'svelte';

    const itemsToShow = 5;

    let logos = [
        { src: 'https://via.placeholder.com/175x175?text=1', alt: 'Logo 1' },
        { src: 'https://via.placeholder.com/175x175?text=2', alt: 'Logo 2' },
        { src: 'https://via.placeholder.com/175x175?text=3', alt: 'Logo 3' },
        { src: 'https://via.placeholder.com/175x175?text=4', alt: 'Logo 4' },
        { src: 'https://via.placeholder.com/175x175?text=5', alt: 'Logo 5' },
        { src: 'https://via.placeholder.com/175x175?text=6', alt: 'Logo 6' },
        { src: 'https://via.placeholder.com/175x175?text=7', alt: 'Logo 7' },
        { src: 'https://via.placeholder.com/175x175?text=8', alt: 'Logo 8' },
        { src: 'https://via.placeholder.com/175x175?text=9', alt: 'Logo 9' },
        { src: 'https://via.placeholder.com/175x175?text=10', alt: 'Logo 10' },
    ];

    let pool = logos.slice(itemsToShow);
    let lastInt = null;

    const getRandomInt = (max) => {
        let randomInt = Math.floor(Math.random() * max);
        while (randomInt === lastInt) {
            randomInt = Math.floor(Math.random() * max);
        }
        lastInt = randomInt;
        return randomInt;
    }

    const exchange = () => {
        setTimeout(() => {
            const element = document.querySelectorAll('.logo-carpet__image')[getRandomInt(itemsToShow)];
            element.classList.add('logo-carpet__image--fade');
            pool = [...pool, { src: element.src, alt: element.alt }];

            setTimeout(() => {

                setTimeout(() => {
                    element.src = pool[0].src;
                    element.alt = pool[0].alt;
                    pool.shift();
                });

                element.classList.remove('logo-carpet__image--fade');
            }, 3000);
            exchange();
        }, 5000);
    }

    onMount(() => {
        exchange();
    });

</script>

<style lang="scss">
  .logo-carpet {

    &__list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__container {
      display: block;
      margin: 0;
      padding: 0;
    }

    &__image {
      opacity: 1;
      transition: opacity 1000ms ease-in-out;

      &--fade {
        opacity: 0;
      }
    }
  }

  :global(.logo-carpet__image--fade) {
    opacity: 0 !important;
  }
</style>

<div class="logo-carpet">
    <h3>Logo Carpet Component works!</h3>
    <ul class="logo-carpet__list">
        {#each logos.slice(0, itemsToShow) as logo}
            <li class="logo-carpet__container">
                <img loading="lazy"
                     height="175"
                     width="175"
                     class="logo-carpet__image"
                     src={logo.src}
                     alt={logo.alt}>
            </li>
            {:else}
            <li>No Logos to show!</li>
        {/each}
    </ul>
</div>