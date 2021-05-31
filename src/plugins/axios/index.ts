import { App } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import _get from 'lodash/get'
import { ElMessageBox } from 'element-plus';


export default function loadComponent(app: App<Element>) {
	axioInterceptor(axios)
    app.use(VueAxios, axios)
}

const errorAlert = (err:any) => {
    const msg = _get(err, 'response.data.msg')
    ElMessageBox({
        title: '错误',
        message: `${msg}`,
        type: 'error'
    })
}

const axioInterceptor = (axios:any) => {
    axios.interceptors.request.use(
        (config:any) => {
            //增加随机数
            config.params = Object.assign({
                _t: (new Date).getTime()
            }, config.params)
            return config
        }
    )

    axios.interceptors.response.use(
        (response:any) => {
            const data = _get(response, 'data')
            return data
        },
        (error:any) => {
            const closeAlert = error.config.closeAlert || _get(error, 'config.data') && JSON.parse(_get(error, 'config.data')).closeAlert
            !closeAlert && errorAlert(error)
            return Promise.reject(error)
        }
    )
}