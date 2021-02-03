import { Avatar } from '@material-ui/core'
import React,{useState} from 'react'
import './MessageSender.css'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import {useStateValue} from "./StateProvider"
import firebase from 'firebase'
import db from './Firebase'



function MessageSender() {
    const [{user}, dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        //some database stuff gnna happen here
        db.collection('posts').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imageUrl
        })

        setInput('')
        setImageUrl('')
    }

    return (
        <div className="messageSender" >
            <div className="messageSender__top">
                <Avatar src={user.photoURL}  />
                <form >
                    <input 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    className='messageSender__input'
                     placeholder={`Whats on your mind ${user.displayName} ?`}
                    />
                    <input 
                    value={imageUrl}
                    onChange={(e)=>setImageUrl(e.target.value)}
                    placeholder='image url (Optional) '/>
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>      
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
