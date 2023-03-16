<script>
  import { slide } from 'svelte/transition';
  import noUiSlider from 'nouislider';
  import wNumb from 'wnumb';
  import { onMount } from 'svelte';
  import 'nouislider/dist/nouislider.css';

  export let tableData = [
    {
      'Table Header one': 'Table Content No. 1.1',
      'Table Header two': 'Table Content No. 1.2',
      'Table Header three': 'Table Content No. 1.3',
    },
    {
      'Table Header one': 'Table Content No. 2.1',
      'Table Header two': 'Table Content No. 2.2',
      'Table Header three': 'Table Content No. 2.3',
    },
    {
      'Table Header one': 'Table Content No. 3.1',
      'Table Header two': 'Table Content No. 3.2',
      'Table Header three': 'Table Content No. 3.3',
    },
  ];
  export let showSlider = false;
  let startAt = 0;
  let endAt = 10;
  let itemsLength = tableData.length;
  let sliderElement;

  if (showSlider) {
    onMount(() => {
      const slider = noUiSlider.create(sliderElement, {
        start: [startAt, endAt],
        connect: true,
        step: 1,
        tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
        range: {
          min: 0,
          max: itemsLength,
        },
      });

      slider.on('change', updateItems);
    });

    const updateItems = (values) => {
      startAt = Math.floor(values[0]);
      endAt = Math.floor(values[1]);
    };
  }

  let sortBy = { col: Object.keys(tableData[0])[0], ascending: true };

  $: sort = (column) => {
    if (sortBy.col == column) {
      sortBy.ascending = !sortBy.ascending;
    } else {
      sortBy.col = column;
      sortBy.ascending = true;
    }

    // Modifier to sorting function for ascending or descending
    let sortModifier = sortBy.ascending ? 1 : -1;

    let sort = (a, b) =>
      a[column] < b[column] ? -1 * sortModifier : a[column] > b[column] ? 1 * sortModifier : 0;

    tableData = tableData.sort(sort);
  };
</script>

{#if showSlider}
  <div class="slider">
    <div class="slider__start-value">0</div>
    <div class="slider__holder" bind:this={sliderElement} />
    <div class="slider__end-value">{itemsLength}</div>
  </div>
{/if}

<table>
  <thead>
    <tr>
      {#each Object.keys(tableData[0]) as columnHeader}
        <th on:click={sort(columnHeader)}>{columnHeader}</th>
      {/each}
    </tr>
  </thead>

  <tbody>
    {#each Object.values(tableData.slice(startAt, endAt)) as row}
      <tr transition:slide>
        {#each Object.values(row) as cell}
          <td>{cell}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style lang="scss">
  .slider {
    display: flex;
    margin-bottom: 10px;
    margin-top: 20px;

    &__start-value {
      margin-right: 20px;
    }

    &__holder {
      display: block;
      width: 100%;
    }

    &__end-value {
      margin-left: 20px;
    }
  }

  :global(.noUi-target) {
    border-color: rgba(fuchsia, 0.25);
  }

  :global(.noUi-connects) {
    background: rgba(black, 0.75);

    @media (prefers-color-scheme: light) {
      background: white;
    }
  }

  :global(.noUi-handle) {
    background: rgba(black, 0.95);
    border-radius: 2px;
    border: 1px solid $c-brand-primary;
    box-shadow: inset 0 0 1px $c-brand-primary, inset 0 1px 7px rgba($c-brand-primary, 0.7),
      0 3px 6px -3px rgba($c-brand-primary, 0.5);
    cursor: grab;

    @media (prefers-color-scheme: light) {
      background: white;
      box-shadow: inset 0 0 1px #fff, inset 0 1px 7px #ebebeb, 0 3px 6px -3px #bbb;
    }
  }

  :global(.noUi-connect) {
    background: rgba($c-brand-primary, 0.5);

    @media (prefers-color-scheme: light) {
      background: $c-brand-primary;
    }
  }

  :global(.noUi-tooltip) {
    background: black;
    color: white;
    opacity: 0;
    pointer-events: none;
    transition: opacity 1800ms ease;

    @media (prefers-color-scheme: light) {
      background: white;
      color: black;
    }
  }

  :global(.noUi-active .noUi-tooltip) {
    background: black;
    color: white;
    opacity: 1;
    transition: opacity 150ms ease;

    @media (prefers-color-scheme: light) {
      background: white;
      color: black;
    }
  }

  table {
    border-collapse: collapse;
    margin-bottom: 3rem;
    margin-top: 1rem;
    width: 100%;
  }

  thead {
    tr {
      font-size: 18px;

      th {
        border-bottom: 2px solid rgba($c-brand-primary, 0.35);
        cursor: pointer;
      }
    }
  }

  tbody {
    tr {
      font-weight: 300;

      &:nth-child(odd) {
        background-color: rgba($c-brand-primary, 0.05);
      }

      &:last-child {
        td {
          border-bottom: none;
        }
      }

      td {
        border-bottom: 1px solid rgba($c-brand-primary, 0.15);
        margin: 0;
        padding: 10px 5px;
      }
    }
  }
</style>
