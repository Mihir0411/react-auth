import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation, } from 'react-router';
import './login.css'


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const logInWithGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { Name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from)
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    const logInWithGithub = () => {
        var gitHubProvider = new firebase.auth.GithubAuthProvider();
        firebase
            .auth()
            .signInWithPopup(gitHubProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { Name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from)
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });

    }

    return (
        <div className="login">
            <h3>Registration Form</h3>
            <form action="">
                <label htmlFor="">Name</label><br></br>
                <input type="name" placeholder="Enter Your Name" /><br></br>
                <label htmlFor="">Email</label><br></br>
                <input type="email" placeholder="Enter Your Email" /><br></br>
                <label htmlFor="">Password</label><br></br>
                <input type="password" placeholder="Enter Your Password" />
            </form>
            <button onClick={logInWithGoogle}>Continue With Google</button><br></br>
            <button onClick={logInWithGithub}>Continue With Github</button>
        </div>
    );
};

export default Login;