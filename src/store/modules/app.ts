import * as types from '../mutation-types'
import { ActionContext } from 'vuex'

interface AppState{
	testStr1:string,
	testStr2:number
}

const state:AppState = {
  testStr1: '3',
  testStr2: 3
}

const mutations = {
  [types.SET_TEST1] (state: AppState, teststr1: string) {
    state.testStr1 = teststr1
  },
  [types.SET_TEST2] (state: AppState, teststr2: number) {
    state.testStr2 = teststr2
  },
}

const actions = {
  settest1 ({ commit }: ActionContext<AppState, any>, teststr1: string) {
    commit(`${types.SET_TEST1}`, teststr1)
  },

  async settest2 ({ commit }: ActionContext<AppState, any>, teststr2: number) {
    try{
    	setTimeout(()=>{
    		commit(`${types.SET_TEST2}`, teststr2)
    		return Promise.resolve(true)
    	},1000)
    }catch(e){
    	return Promise.reject(e)
    }
  }
}

const getters = {
	testStr2ingetter:(state:AppState) => {
      return state.testStr2
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}