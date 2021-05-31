import { App } from 'vue'
import elementUI from './elementUI'
import notification from './notification'
import axios from './axios'

const install = function (app: App<Element>) {
	elementUI(app)
	notification(app)
	axios(app)
}

export default install