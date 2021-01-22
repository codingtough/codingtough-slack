import React, { useState } from 'react';
import db from '../../Firebase';
import { useStateValue } from '../../StateProvider';
import firebase from 'firebase';
import './ChatInput.css';

function ChatInput({ channelName, channelId }) {
   const [input, setInput] = useState("");
   const [{ user }] = useStateValue();

   const sendMessage = e => {
      e.preventDefault();
      if(channelId && input !== "") {
         db.collection("rooms")
            .doc(channelId)
            .collection("messages")
            .add({
               message: input,
               timestamp: firebase.firestore.FieldValue.serverTimestamp(),
               user: user.displayName,
               userImage: user.photoURL
            })
         setInput("");
      }
   }

   return (
      <div className="chatInput">
            <form>
               <input 
                  placeholder={`Message #${channelName}`} 
                  value={input}
                  onChange={e => setInput(e.target.value)}
               />
               <button
                  onClick={sendMessage}
                  type="submit"
               >
                  Send
               </button>
            </form>
      </div>
   )
}

export default ChatInput;
