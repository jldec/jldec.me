import Footer from './components/Footer.svelte';
import Neat from './components/Neat.svelte';
import Mono from './components/Mono.svelte';
import Twitter from './components/Twitter.svelte';

const config: App.AppConfig = {
  appComponents: {
    Footer
  },
  layoutComponents: {
    Neat,
    Mono
  },
  markdownComponents: {
  },
  iconComponents: {
    Twitter
  },
};

export default config;
