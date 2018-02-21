import Vue from 'vue'
import Vuex from 'vuex'
import app from './app/app'
import film from './film/film'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    film
  }
})
