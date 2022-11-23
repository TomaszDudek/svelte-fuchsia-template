<script>
    import { sectionNavItems } from '../store.js';
    import { onMount } from 'svelte';

    const activeClass = 'active';
    const highlightedClass = 'highlighted'
    let id;

    onMount(() => {
        window.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {

                entries.forEach((entry) => {
                    id = entry.target.getAttribute('id');
                    const element = document.querySelector(`nav ul li a[href="#${id}"]`);

                    if (element !== null) {
                        if (entry.intersectionRatio > 0) {
                            stopHighlighting();
                            highlight(element);
                            element
                                .parentElement
                                .classList
                                .add(activeClass);
                        } else {
                            element.classList.remove(highlightedClass);
                            element
                                .parentElement
                                .classList
                                .remove(activeClass);
                        }
                    }
                });

            });

            // Track all sections that have an `id` applied
            document.querySelectorAll('section[id]').forEach((section) => {
                observer.observe(section);
            });

        });
    });

    const highlight = (element) => {
      element.classList.add(highlightedClass);
      setTimeout(() => {element.classList.remove(highlightedClass)}, 1000);
    }

    const stopHighlighting = () => {
        const elements = document.querySelectorAll(`.${highlightedClass}`);
        elements.forEach((el) => {
            el.classList.remove(highlightedClass);
        });
    }

    const scrollIntoView = ({ target }) => {
        const el = document.querySelector(target.getAttribute('href'));
        if (!el) return;
        el.scrollIntoView({
            behavior: 'smooth'
        });
    }

</script>

<style lang="scss">

    .side-navigation {
      align-items: center;
      bottom: 0;
      display: flex;
      left: auto;
      position: fixed;
      right: 0;
      text-align: right;
      top: 0;
      padding-right: 2vw;
      transition: all 350ms ease;
      pointer-events: none;

      &__list {
        pointer-events: auto;
        transition: all 650ms ease;
        list-style: none;
      }

      &__list-item {
        align-items: center;
        border-right: 4px solid rgba($c-brand-primary, .25);
        display: flex;
        height: 4px;
        justify-content: flex-end;
        margin: 8px 0;
        max-width: 135px;
        overflow: hidden;
        padding: 0 10px 0 0;
        transition: opacity 200ms ease, padding-top 300ms ease, padding-bottom 300ms ease;
        width: 20px;

        &.active {
          border-right-color: $c-brand-primary;
          overflow: visible;
        }
      }

      &__link {
        opacity: 0;
        text-decoration: none;
        transition: opacity 300ms ease, color 125ms ease, font-size 350ms ease, margin 350ms ease;
        color: rgba($c-brand-primary, .5);
        white-space: nowrap;

        &:hover {
          color: $c-brand-primary;
        }

        .active & {
          color: $c-brand-primary;
          font-size: 1.25rem;
          margin: 10px 0;
        }

        &.highlighted {
          color: $c-brand-primary;
          opacity: 1;
        }
      }

      &:hover {
        background: linear-gradient(to left, rgba(black, .3), rgba(black, 0));

        .side-navigation__list-item {
          height: auto;
          overflow: visible;
          padding-bottom: 4px;
          padding-top: 4px;
          width: auto;
        }

        .side-navigation__link {
          opacity: 1;
        }
      }
    }

    :global(.side-navigation__list-item.active) {
      border-right-color: $c-brand-primary !important;
      overflow: visible !important;
    }

    :global(.side-navigation__list-item.active a) {
      color: $c-brand-primary !important;
      font-size: 1.25rem !important;
      margin: 10px 0 !important;

      @media (prefers-color-scheme: light) {
        color: black;
      }
    }

    :global(.side-navigation__link.highlighted) {
      color: $c-brand-primary !important;
      opacity: 1 !important;
    }
</style>

<div class="side-navigation">
    <nav class="side-navigation__wrapper">
        <ul class="side-navigation__list">
            {#each $sectionNavItems as item}
                <li class="side-navigation__list-item">
                    <a class="side-navigation__link"
                       href="#{item.id}" on:click|preventDefault={scrollIntoView}>{item.title}</a>
                </li>
            {/each}
        </ul>
    </nav>
</div>