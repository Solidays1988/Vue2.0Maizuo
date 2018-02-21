import axios from 'axios'

const state = {
  comingSoonFilms: [],
  nowPlayingFilms: [],
  detail: {},
  billboards: []
}

const mutations = {
  // 获取即将上映电影列表
  comingSoonFilms (state, data) {
    state.comingSoonFilms = data.films
  },
  // 获取即将上映电影列表
  nowPlayingFilms (state, data) {
    state.nowPlayingFilms = data.films
  },
  // 获取电影详情
  detail (state, data) {
    state.detail = data.film
  },
  // 获取广告列表
  billboards (state, data) {
    state.billboards = data.billboards
  }
}

const getters = {
  getComingSoonFilms (state) {
    return state.comingSoonFilms
  },
  getNowPlayingFilms (state) {
    return state.nowPlayingFilms
  },
  getDetail (state) {
    return state.detail
  },
  getBillboards () {
    return state.billboards
  }
}

const _get = ({ url, query }, commit) => {
  if (commit) commit('startLoading')
  let _url
  if (query) {
    _url = `http://localhost:8080/v4/api${url}?${query}`
  } else {
    _url = `http://localhost:8080/v4/api${url}`
  }

  return axios.get(_url)
    .then((res) => {
      if (commit) commit('finishLoading')
      if (res.status >= 200 && res.status < 300) {
        return res.data
      }
      return Promise.reject(new Error(res.status))
    })
}

const actions = {
  fetchComingSoonLists ({ commit }, page, count) {
    const url = '/film/coming-soon'
    const query = `count=${count}&page=${page}&_t=` + new Date().getTime()
    return _get({url, query}, commit)
      .then((json) => {
        if (json.status === 0) {
          return commit('comingSoonFilms', json.data)
        }
        return Promise.reject(new Error('fetchFilmsLists failure'))
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  fetchNowPlayingLists ({ commit }, page, count) {
    const url = '/film/now-playing'
    const query = `count=${count}&page=${page}&_t=` + new Date().getTime()
    return _get({ url, query }, commit)
      .then((json) => {
        if (json.status === 0) {
          return commit('nowPlayingFilms', json.data)
        }
        return Promise.reject(new Error('FETCH_NOW_PLAYING failure'))
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  fetchFilmDetail ({commit}, id) {
    const url = '/film/' + id
    const query = '_t=' + new Date().getTime()
    return _get({ url, query }, commit)
      .then((json) => {
        if (json.status === 0) {
          return commit('detail', json.data)
        }
        return Promise.reject(new Error('FETCH_DETAIL failure'))
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  },
  fetchBillboards ({commit}) {
    const url = '/billboard/home'
    const query = '_t=' + new Date().getTime()
    return _get({ url, query }, commit)
      .then((json) => {
        if (json.status === 0) {
          return commit('billboards', json.data)
        }
        return Promise.reject(new Error('FETCH_BANNER_SUCCESS failure'))
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
