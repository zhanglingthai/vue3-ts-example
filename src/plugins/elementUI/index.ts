import { App } from 'vue'
import { ElButton, ElMessage } from 'element-plus'
// 如果要使用.scss样式文件，则需要引入base.scss文件
import 'element-plus/packages/theme-chalk/src/base.scss'


export default function loadComponent(app: App<Element>) {
  //global set
  app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 }
  
  app.use(ElButton)
  app.config.globalProperties.$message = ElMessage
}