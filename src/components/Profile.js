import React from 'react';

import { auth } from '../utils/firebase'
import { useSelector } from 'react-redux';

const Profile = ( { user }) => {

    let currentUser = useSelector((state) => state.login.user);

    return (
        <div className="home">
            <img src={currentUser.photoURL} alt="" />
            <h1>Hello, <span></span>{currentUser.displayName}</h1>
            <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
        </div>
    )
}

export default Profile;