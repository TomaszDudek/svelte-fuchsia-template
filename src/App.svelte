<script>
  import SideNavigation from './lib/SideNavigation.svelte';
  import BrandLogo from './assets/fuchsia-muster-logo.svg';
  import PageHeader from './lib/PageHeader.svelte';
  import Stage from "./lib/Stage.svelte";
  import Section from './lib/Section.svelte';
  import ScrollSpy from './lib/ScrollSpy.svelte';
  import Input from './lib/Input.svelte';
  import Textarea from './lib/Textarea.svelte';
  import LogoCarpet from './lib/LogoCarpet.svelte';
  import YoutubePlayer from './lib/YoutubePlayer.svelte';
  import BackToTop from './lib/BackToTop.svelte';
  import Table from './lib/Table.svelte';
  import Tabs from './lib/Tabs.svelte';
  import ExampleTabOne from './lib/ExampleTabOne.svelte';
  import ExampleTabThree from './lib/ExampleTabThree.svelte';
  import ExampleTabTwo from './lib/ExampleTabTwo.svelte';

  export let brandName;

  const loremIpsum = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'

  const data = [];
  for (let i = 0; i < 50; i++) {
    data.push({
      Name: "Person " + (i + 1),
      Age: Math.floor(Math.random() * 100),
      City: "City " + (i + 1),
      Order: `B-${Math.floor(Math.random() * 10000)}`,
      Account: `KD-${Math.floor(Math.random() * 100000)}`,
    });
  }

  const tabsItems = [
    { label: 'The Tab One', component: ExampleTabOne },
    { label: 'The Tab Two', component: ExampleTabTwo },
    { label: 'The Tab Three', component: ExampleTabThree },
  ];
</script>

<ScrollSpy />
<PageHeader brandName={brandName}/>
<main>
  <Stage brandName="{brandName}" id="pageTop"/>

  <Section title="This is the first Section">
    <p>{loremIpsum}</p>
  </Section>
  <Section highlighted>
    <LogoCarpet/>
  </Section>
  <Section title="This is the next Section">
    <p>{loremIpsum}</p>
    <h1 class="h1">Überschrift erster Ordnung</h1>
    <h2 class="h2">Überschrift zweiter Ordnung</h2>
    <h3 class="h3">Überschrift dritter Ordnung</h3>
    <h4 class="h4">Überschrift vierter Ordnung</h4>
    <h5 class="h5">Überschrift fünfter Ordnung</h5>
    <h6 class="h6">Überschrift sechster Ordnung</h6>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
      takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et
      accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet.</p>
    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
      feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
      delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
      elit,
      sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
      commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
      vel
      illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
      praesent
      luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
    <h1 class="h1">Überschrift erster Ordnung</h1>
    <h2 class="h2">Überschrift zweiter Ordnung</h2>
    <p>Lorem ipsum dolor sit amet, consetetur <a href="#" class="text-link">sadipscing elitr</a>, sed diam nonumy
      eirmod
      tempor invidunt <a href="#" class="text-link">ut labore et dolore</a> magna aliquyam erat, sed <a href="#"
                                                                                                        class="text-link">diam
        voluptua</a>. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
      takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et
      accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet. Lorem ipsum dolor sit amet, <em>consetetur sadipscing</em> elitr, sed diam nonumy eirmod
      tempor
      invidunt
      ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
      ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    <h3 class="h3">Überschrift dritter Ordnung</h3>
    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
      feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
      delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
      elit,
      sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    <h3 class="h3">Überschrift dritter Ordnung</h3>
    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
      commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
      vel
      illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
      praesent
      luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
    <h4 class="h4">Überschrift vierter Ordnung</h4>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <em>Stet clita kasd gubergren, no
        sea
        takimata sanctus</em> est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
      Lorem ipsum dolor sit amet.</p>
    <h4 class="h4">Überschrift vierter Ordnung</h4>
    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie <strong>consequat</strong>, vel
      illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
      praesent
      luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
      adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    <hr class="hr">
    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie <strong>consequat</strong>, vel
      illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
      praesent
      luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
      adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    <ul class="unordered-list">
      <li>Punkt 1</li>
      <li>Punkt 2</li>
      <li>Punkt 3</li>
      <li>Punkt 4</li>
    </ul>
    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation <strong>ullamcorper suscipit</strong> lobortis nisl
      ut
      aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
      molestie
      consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
      blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
    <ol class="ordered-list">
      <li>Punkt 1</li>
      <li>Punkt 2</li>
      <li>Punkt 3</li>
    </ol>
    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
      commodo consequat. Duis autem vel eum iriure <strong>dolor in hendrerit</strong> in vulputate velit esse
      molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
      dignissim
      qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
    <blockquote>
      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit.</p>
    </blockquote>
    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
      feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
      delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
      elit,
      sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
      commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
      vel
      illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
      praesent
      luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
  </Section>
  <YoutubePlayer videoId="5mpafLYHVd0"/>
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
  <Section title="The Youtube Player" sectionContainer=false noPaddingBottom=true>
    <YoutubePlayer/>
  </Section>
  <Section title="The Tabs Component" highlighted="true">
    <Tabs {tabsItems} />
  </Section>
  <Section title="Tabelle">
    <Table tableData={data} />
    <Table tableData={data} showSlider=true />
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
<BackToTop/>
<style>
  main {
    min-height: 200vh;
  }

  .logo {
    margin: 0 auto;
    width: 30vw;
  }
</style>
