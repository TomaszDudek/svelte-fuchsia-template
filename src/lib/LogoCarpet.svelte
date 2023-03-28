<script>
  import { onMount } from 'svelte';

  export let itemsToShow = 5;
  export let delay = 1000;
  export let interval = 6000;
  export let animationBuffer = 1500;

  const fadeClass = 'logo-carpet__image--fade';
  const fadeElementClass = 'logo-carpet__image';

  let logos = [
    { src: 'images/example-data/Mercedes-Benz-Logo.svg.png', alt: 'Mercedes Logo' },
    { src: 'images/example-data/Allianz.svg.png', alt: 'Allianz Logo' },
    { src: 'images/example-data/Henkel-Logo.svg.png', alt: 'Henkel Logo' },
    { src: 'images/example-data/Volvo_logo1.svg.png', alt: 'Volvo' },
    { src: 'images/example-data/Groupe_PSA_logo.svg.png', alt: 'PSA Logo' },
    { src: 'images/example-data/Adobe_Corporate_Logo.png', alt: 'Adobe Logo' },
    { src: 'images/example-data/UBS_Logo_SVG.svg.png', alt: 'UBS Logo' },
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
  };

  const exchange = () => {
    setTimeout(() => {
      setInterval(() => {
        const element = document.querySelectorAll(`.${fadeElementClass}`)[
          getRandomInt(itemsToShow)
        ];
        if (element) {
          element.classList.add(fadeClass);
          pool = [...pool, { src: element.src, alt: element.alt }];

          setTimeout(() => {
            element.src = pool[0].src;
            element.alt = pool[0].alt;
            pool.shift();
            element.classList.remove(fadeClass);
          }, animationBuffer);
        }
      }, interval);
    }, delay);
  };

  onMount(() => {
    exchange();
  });
</script>

<div class="logo-carpet">
  <ul class="logo-carpet__list">
    {#each logos.slice(0, itemsToShow) as logo}
      <li class="logo-carpet__container">
        <img loading="lazy" class="logo-carpet__image" src={logo.src} alt={logo.alt} />
      </li>
    {:else}
      <li>No Logos to show!</li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .logo-carpet {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__container {
      align-items: center;
      display: flex;
      height: 175px;
      justify-content: center;
      margin: 0;
      padding: 0 20px;
      width: 175px;
    }

    &__image {
      display: block;
      height: auto;
      opacity: 1;
      transition: opacity 1000ms ease-in-out;
      width: 100%;

      &--fade {
        opacity: 0;
        transition: opacity 500ms ease-in-out;
        transition-delay: 100ms;
      }
    }
  }

  :global(.logo-carpet__image--fade) {
    opacity: 0 !important;
  }
</style>
