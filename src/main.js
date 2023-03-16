import './app.scss';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
  props: {
    brandName: 'Fuchsia',
  },
});

export default app;
