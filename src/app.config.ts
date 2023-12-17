import Neat from './components/Neat.svelte';
import Twitter from './components/Twitter.svelte';
import CalendarDays from './components/CalendarDays.svelte';

const config: App.AppConfig = {
  appComponents: {
  },
  layoutComponents: {
    Neat,
  },
  markdownComponents: {
  },
  iconComponents: {
    Twitter,
    CalendarDays
  },
};

export default config;
