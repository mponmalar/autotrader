import { React, useState, useEffect } from 'react';
import Login from '../components/Login';
import Profile from '../components/Profile';
import firebase from '../utils/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../store/loginslice';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from '../utils/firebase';

function GoogleAuth() {

    const dispatch = useDispatch();

    //const [user, setUser] = useState(null);
    let currentUser = useSelector((state) => state.login.user);

    useEffect( () => {
        firebase.auth().onAuthStateChanged( currentUser => {
          isUserAuthenticated(currentUser);
        //setUser(user);
    })
    console.log(currentUser);
    }, []);

    const isUserAuthenticated = async (currentUser) => {
      const docRef = doc(db, "users", currentUser.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let user = {
          ...currentUser,
          user: docSnap.data(),
        }
        console.log("Document data:", docSnap.data());
        dispatch(updateUser(user));
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    return (
      <p id="zero-state">
        {currentUser ? <Profile /> : <Login /> }
      </p>
    );
  }

  export default GoogleAuth;