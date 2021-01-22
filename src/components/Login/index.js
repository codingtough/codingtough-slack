import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../Firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../StateProvider/reducer';
import './Login.css';

function Login() {
   const [state, dispatch] = useStateValue();

   const signIn = () => {
      auth
         .signInWithPopup(provider)
         .then( result => {
            dispatch({
               type: actionTypes.SET_USER,
               user: result.user
            })
         })
         .catch( error => {
            alert(error.message);
         })
   }
   return (
      <div className="login">
         <div className="login__container">
            <img 
               src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/7e/Slack_logo.svg/langfr-150px-Slack_logo.svg.png" 
               alt="Slack"
            />
            <div className="login__text">
               <h1>Sign in to Codingtough Slack-clone</h1>
            </div>

            <Button 
               type="submit"   
               onClick={signIn}
            >
               Sign In With Google
            </Button>
         </div>
      </div>
   )
}

export default Login
