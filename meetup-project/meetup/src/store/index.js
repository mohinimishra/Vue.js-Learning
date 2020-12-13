import Vue from 'vue'
import Vuex from 'vuex'
import { firebase } from '@firebase/app'
require('firebase/auth')
require('firebase/database');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl:
          "https://static.amazon.jobs/locations/58/images/NYC.jpg?1547618121",
        id: 1,
        title: "meetups in new york",
        date: '27-07-2020',
        location: "Paris",
        description: "Great Place"
      },
      {
        imageUrl:
          "https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?k=6&m=946087016&s=612x612&w=0&h=FPq454ti8ZKPiMzyDPJ_A4BNQaN-2olcfg4TYgMFR1w=",
        id: 2,
        title: "meetups in Paris",
        date: '29-07-2020',
        location: "New York",
        description: "Great Place"
      },
    ],
    user: null,
    error: null
  },
  mutations: {
    registerUserForMeetup(state, payload) {
      const id = payload.id
      if (state.user.registerId.findIndex(meetup => meetup.id === id) >= 0) {
        return
      }
      state.user.registerId.push(id)
      state.user.fbKey[id] = payload.fbKey
    },
    unregisterUserForMeetup(state, payload) {
      const registerId = state.user.registerId
      registerId.splice(registerId.findIndex(meetup => meetup.id === payload), 1)
      Reflect.deleteProperty(state.user.fbKey, payload)
    },
    setLoadedMeetups(state, payload) {
      state.loadedMeetups = payload
    },
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload)
    },
    updateMeetup(state, payload) {
      const meetup = state.loadedMeetups.find(meetup => {
        return meetup.id === payload.id
      })
      if (payload.title) {
        meetup.title = payload.title
      }
      if (payload.description) {
        meetup.description = payload.description
      }
      if (payload.location) {
        meetup.location = payload.location
      }
      if (payload.date) {
        meetup.date = payload.date
      }
    },
    setUser(state, payload) {
      state.user = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    registerUserForMeetup({ commit, getters }, payload) {
      const user = getters.validateUser
      firebase.database().ref('users' + user.id).child('registrations')
        .push(payload)
        .then((data) => {
          commit('registerUserForMeetup', { id: payload, fbKey: data.key })
        })
        .catch((err) => { console.log(err) })
    },
    unregisterUserForMeetup({ commit, getters }, payload) {
      const user = getters.validateUser
      if (user.firebase) {
        return
      }
      const fbKey = user.fbKey[payload]
      firebase.database.ref('users' + user.id + 'registrations').child(fbKey).remove()
        .then(() => {
          commit('unregisterUserForMeetup', payload)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    loadMeetups({ commit }) {
      firebase.database().ref('meetups').once('value').then((data) => {
        const meetups = []
        const obj = data.val()
        for (let key in obj) {
          meetups.push({
            id: key,
            title: obj[key].title,
            description: obj[key].description,
            location: obj[key].location,
            imageUrl: obj[key].imageUrl,
            date: obj[key].date,
            createrId: obj[key].createrId
          })
        } commit('setLoadedMeetups', meetups)
      }).catch((err) => {
        console.log(err)
      })
    },
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        createrId: this.getters.validateUser.id
      }
      firebase.database().ref('meetups').push(meetup).then((data) => {
        const key = data.key
        commit('createMeetup', { ...meetup, id: key })
      }).catch((err) => {
        console.log(err)
      })
    },
    updateMeetupData({ commit }, payload) {
      const updateObj = {}
      if (payload.title) {
        updateObj.title = payload.title
      }
      if (payload.description) {
        updateObj.description = payload.description
      }
      if (payload.location) {
        updateObj.location = payload.location
      }
      if (payload.date) {
        updateObj.date = payload.date
      }
      firebase.database().ref('meetups').child(payload.id).update(updateObj)
        .then((data) => {
          commit('updateMeetup', payload)
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    User({ commit }, payload) {
      commit('clearError')
      firebase.default.auth().createUserWithEmailAndPassword(payload.email, payload.password).then((data) => {
        const newUser = {
          id: data.uid,
          registerId: [],
          fbKey: {},
        }
        commit('setUser', newUser)
      }).catch((err) => {
        commit('setError', err)
      })
    },
    autoSignin({ commit }, payload) {
      commit('setUser', { id: payload.uid, registerId: [], fbKey: {} })
    },
    logout({ commit }) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    clearError({ commit }) {
      commit('clearError')
    },
    signInUser({ commit }, payload) {
      commit('clearError')
      firebase.default.auth().signInWithEmailAndPassword(payload.email, payload.password).then((data) => {
        const newUser = {
          id: data.uid,
          registerId: [],
          fbKey: {},
        }
        commit('setUser', newUser)
      }).catch(err => {
        commit('setError', err)
        console.log(err)
      })
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup(state) {
      return (meetupId) => {
        return state.loadedMeetups.find((Meetup) => {
          return Meetup.id == meetupId
        })
      }
    },
    validateUser(state) {
      return state.user
    },
    error(state) {
      return state.error
    },

  }
})