import { App } from 'vue'
import clipboard from './clipboard'

const install = function (app: App<Element>) {
  app.directive('copy', clipboard)
}

export default install