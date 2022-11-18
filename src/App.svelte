<script>
  import SideNavigation from './lib/SideNavigation.svelte';

  export let brandName;
  import BrandLogo from './assets/fuchsia-muster-logo.svg';
  import PageHeader from './lib/PageHeader.svelte';
  import Stage from "./lib/Stage.svelte";
  import Section from './lib/Section.svelte';
  const loremIpsum = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
</script>

<PageHeader brandName={brandName}/>
<main>
  <Stage brandName="{brandName}"/>
  <Section title="This is the first Section" highlighted>
    <p>{loremIpsum}</p>
  </Section>
  <Section title="This is the next Section">
    <p>{loremIpsum}</p>
  </Section>
  <Section highlighted>
    <p>{loremIpsum}</p>
  </Section>
  <Section>
    <img class="logo" src="{BrandLogo}" alt="Logo">
  </Section>
  <Section highlighted title="SVG Icons">
    following
  </Section>
  <Section title="Buttons">
    <button type="button">button Text</button>
    <button type="button">button Text</button>
  </Section>
  <Section highlighted title="UI & Inputs">
    <input type="input">
    <input type="email">
    <br>
    following...
  </Section>
</main>
<SideNavigation/>
<style>
  main {
    min-height: 200vh;
  }

  .logo {
    width: 30vw;
  }
</style>
