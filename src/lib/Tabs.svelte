<script>
    import { tick } from 'svelte';
    import { fade } from 'svelte/transition';

    export let tabsItems = [];
    export let activeTabValue = 0;

    // TODO extract utility for generating id?
    export let id = `${Date.now().toString()}`;
    const buttonRefs = new Array(tabsItems.length);

    const setActiveIndex = (index) => (activeTabValue = index);

    const handleKeyUp = async (evt) => {
        if (evt.key === 'ArrowRight') {
            activeTabValue = activeTabValue + 1 >= tabsItems.length ? 0 : activeTabValue + 1;
            await tick();
            buttonRefs[activeTabValue].focus();
        }
        if (evt.key === 'ArrowLeft') {
            activeTabValue = activeTabValue - 1 < 0 ? tabsItems.length - 1 : activeTabValue - 1;
            await tick();
            buttonRefs[activeTabValue].focus();
        }
    };

    $: isActiveTab = (index) => activeTabValue === index;
</script>

<div class="tabs">
    <ul role="tablist" class="tabs__list">
        {#each tabsItems as item, idx}
            <li class="tabs__list-item {isActiveTab(idx) ? 'active' : ''}"
                role="tab"
                aria-controls="tab-panel-{idx}-{id}"
                aria-selected={isActiveTab(idx)}
            >
                <button
                        class="tabs__button"
                        bind:this={buttonRefs[idx]}
                        on:click={() => setActiveIndex(idx)}
                        on:keyup={handleKeyUp}
                        id="tab-label-{idx}-{id}"
                        tabindex={isActiveTab(idx) ? 0 : -1}
                >
                    {item.label}
                </button>
            </li>
        {/each}
    </ul>
    <div class="tabs__panels-holder">
        {#each tabsItems as item, idx}
            {#if activeTabValue === idx}
                <div
                        class="tabs__panel"
                        in:fade
                        role="tabpanel"
                        id="tab-panel-{idx}-{id}"
                        aria-labelledby="tab-label-{idx}-{id}"
                >
                    <svelte:component this={item.component} />
                </div>
            {/if}
        {/each}
    </div>
</div>

<style lang="scss">
  .tabs {

    &__list {
      align-items: center;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      list-style: none;
      margin-bottom: 0;
      overflow-x: auto;
      padding-left: 0;
    }

    &__list-item {

      &.active {
        color: fuchsia;

        .tabs__button {
          border-bottom-color: fuchsia;
        }
      }
    }

    &__button {
      align-items: center;
      background: none;
      border-bottom-color: transparent;
      border-bottom-style: solid;
      border-width: 0 0 2px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 3px;
      height: 3rem;
      justify-content: center;
      line-height: 1;
      margin: 0;
      padding: 0.5rem 1rem;
      transition: border-color 240ms cubic-bezier(0.45, 0, 0.125, 1) 0s;

      &:hover {
        border-color: gray;
      }
    }

    &__panels-holder {
      padding: 2.5em 0;
    }

    &__panel {
      border: 1px dotted fuchsia; // todo: remove before merge!
    }
  }
</style>