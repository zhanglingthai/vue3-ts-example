import { App } from 'vue'

export default function loadComponent(app: App<Element>) {

  app.config.globalProperties.$notice = (title:string, content:string, iconurl:string):void => {
        Notification.requestPermission().then(function(permission) {
            if (permission == 'granted') {
                const mynotification = new Notification(title, {
                    body: content,
                    icon: iconurl
                })
                mynotification.onclick = function() {
                    alert(content)
                    mynotification.close()
                }
            }
        })
    }
}