import Clipboard from 'clipboard'

let successCallback: Function | null
let errorCallback: Function | null
let clipboardInstance: Clipboard | null

const clipboard = {
  created(el: HTMLInputElement, binding:any,vnode:any,prevNode:any){

  },
  beforeMount(el: HTMLInputElement, binding: any,vnode:any,prevNode:any) {
    if (binding.arg === 'success') {
      successCallback = binding.value
    } else if (binding.arg === 'error') {
      errorCallback = binding.value
    } else {
      clipboardInstance = new Clipboard(el, {
        text() { return binding.value },
        action() { return binding.arg === 'cut' ? 'cut' : 'copy' }
      })
      clipboardInstance.on('success', e => {
        const callback = successCallback
        callback && callback(e)
      })
      clipboardInstance.on('error', e => {
        const callback = errorCallback
        callback && callback(e)
      })
    }
  },
  mounted(el: HTMLInputElement, binding:any){
    console.log(3)
  },
  beforeUpdate(el: HTMLInputElement, binding:any) {
    console.log(4)
    if (binding.arg === 'success') {
      successCallback = binding.value
    } else if (binding.arg === 'error') {
      errorCallback = binding.value
    } else {
      clipboardInstance = new Clipboard(el, {
        text() { return binding.value },
        action() { return binding.arg === 'cut' ? 'cut' : 'copy' }
      })
    }
  },
  updated(el: HTMLInputElement, binding:any){
    console.log(5)
  },
  beforeUnmount(el: HTMLInputElement, binding:any) {
    console.log(6)
    if (binding.arg === 'success') {
      successCallback = null
    } else if (binding.arg === 'error') {
      errorCallback = null
    } else {
      if (clipboardInstance) {
        clipboardInstance.destroy()
      }
      clipboardInstance = null
    }
  },
  unmounted(el: HTMLInputElement, binding:any){
    console.log(7)
  }
}

export default clipboard