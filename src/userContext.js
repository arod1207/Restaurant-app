import React, { useState, useEffect, createContext } from 'react'

import firebase from firebase
import { auth } from './firbase'

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [ user, setUser ] = useState(null)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  console.log('👱', user);


  useEffect(() => {

    firebase.auth().createUserWithEmailandPassword(email, password).then((console.log('user added')))

  }, [])
}