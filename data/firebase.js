import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length)
  firebase.initializeApp({
    apiKey: 'AIzaSyCbltLqaDMWmqq5gFClXlFh0GMYKBg1A3U',
    authDomain: 'brennancolbergdotcom.firebaseapp.com',
    databaseURL: 'https://brennancolbergdotcom.firebaseio.com',
    projectId: 'brennancolbergdotcom',
    storageBucket: 'brennancolbergdotcom.appspot.com',
    messagingSenderId: '541314534898',
    appId: '1:541314534898:web:f5ccef6098b46a4a306f6b',
    measurementId: 'G-R5V1RX2YD6',
  })

export const analyticsClient =
  typeof window === 'undefined' ? null : firebase.analytics()
export const authClient = firebase.auth()
export const firestoreClient = firebase.firestore()
