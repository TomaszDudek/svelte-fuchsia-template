<script>
  import { onMount } from 'svelte';
  import YouTubePlayer from 'youtube-player';

  export let videoId = 'Qp8U_cevJd8';

  let isPlaying = false;

  const id = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(2, 10);
  const stateNames = {
    '-1': 'unstarted',
    0: 'ended',
    1: 'playing',
    2: 'paused',
    3: 'buffering',
    5: 'video cued',
  };

  onMount(() => {
    const player = YouTubePlayer(id, {
      videoId: videoId,
    });

    player.on('ready', function () {});

    player.on('playing', function () {});

    player.on('stateChange', function (event) {
      if (!stateNames[event.data]) {
        throw new Error('Unknown state (' + event.data + ').');
      }
      toggle(event.data);
    });
  });

  const toggle = (event) => {
    if (event === 1 || event === 3) {
      isPlaying = true;
    }
    if (event === 2 || event === 0) {
      isPlaying = false;
    }
  };
</script>

<div class="youtube-player" class:is-playing={isPlaying}>
  <div {id} class="youtube-player__iframe" />
</div>

<style lang="scss">
  .youtube-player {
    border: 1px dotted hsl(var(--c-brand-primary));
    position: relative;
    height: 0;
    padding-top: 40%;
    transition: padding-top 300ms ease-in-out;

    &::after {
      position: absolute;
      background-color: hsl(var(--c-brand-primary) / 0.5);
      content: '';
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      pointer-events: none;
      opacity: 1;
      transition: opacity 250ms ease-in-out;
    }

    &__iframe {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  :global(.youtube-player.is-playing) {
    padding-top: 56.25%;

    &::after {
      opacity: 0;
    }
  }
</style>
