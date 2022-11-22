<script>
  import SideNavigation from './lib/SideNavigation.svelte';
  import BrandLogo from './assets/fuchsia-muster-logo.svg';
  import PageHeader from './lib/PageHeader.svelte';
  import Stage from "./lib/Stage.svelte";
  import Section from './lib/Section.svelte';
  import ScrollSpy from './lib/ScrollSpy.svelte';
  import Input from './lib/Input.svelte';
  import Textarea from './lib/Textarea.svelte';

  export let brandName;

  const loremIpsum = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
</script>

<ScrollSpy />
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
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </Section>
  <Section title="Buttons">
    <button type="button">button Text</button>
    <button type="button">button Text</button>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </Section>
  <Section highlighted title="UI & Inputs">
    <h3>The Input Component</h3>

    <Input/>
    <Input placeholder="Hier kommt die Maus"/>
    <Input type="nummber"/>
    <Input type="search"/>
    <Input type="password"/>
    <h3>The Textarea Component</h3>
    <Textarea/>
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
