import { App } from 'vue'
import Container from './Container.vue';

const install = function (app: App<Element>) {
  app.component('Container', Container)
  
}

export default install