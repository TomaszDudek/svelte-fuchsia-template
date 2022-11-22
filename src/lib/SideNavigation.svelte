<script>
    import { sectionNavItems } from '../store.js';
    import { onMount } from 'svelte';

    const activeClass = 'side-navigation__list-item--is-active'
    let id;

    onMount(() => {
        window.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {

                entries.forEach((entry) => {
                    id = entry.target.getAttribute('id');
                    const element = document.querySelector(`nav ul li a[href="#${id}"]`);

                    if (element !== null) {
                        if (entry.intersectionRatio > 0) {
                            element
                                .parentElement
                                .classList
                                .add(activeClass);
                        } else {
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

      &__link {
        transition: color 500ms;
      }
    }

    :global(.side-navigation__list-item--is-active a) {
      color: white;
      transition: color 500ms;

      @media (prefers-color-scheme: light) {
        color: black;
      }
    }
</style>

<div class="side-navigation">
    <nav class="side-navigation__wrapper">
        <ul class="side-navigation__list">
            {#each $sectionNavItems as item}
                <li class="side-navigation__list-item">
                    <a class="side-navigation__link" href="#{item.id}">{item.title}</a>
                </li>
            {/each}
        </ul>
    </nav>
</div>