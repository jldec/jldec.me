import Neat from './components/Neat.svelte';
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
    CalendarDays
  },
};

export default config;
