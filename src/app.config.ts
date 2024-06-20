import Neat from './components/Neat.svelte';
import CalendarDays from './components/CalendarDays.svelte';
import Discord from './components/Discord.svelte';

const config: App.AppConfig = {
  appComponents: {},
  layoutComponents: {
    Neat,
  },
  markdownComponents: {},
  iconComponents: {
    CalendarDays,
    Discord,
  },
};

export default config;
