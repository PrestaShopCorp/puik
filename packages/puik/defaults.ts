import Components from './component';
import Plugins from './plugin';
import type { App, Component } from 'vue';

export default {
  install(app: App) {
    Components.forEach((component: Component) => {
      if (component.name) {
        app.component(component.name, component);
      }
    });

    Plugins.forEach((plugin) => {
      if (plugin.name) {
        app.config.globalProperties[plugin.name] = plugin;
      }
    });
  }
};
