import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import { AccountCircle, ChatBubbleOutline, ExpandMore, NearMe, ThumbUp } from '@material-ui/icons'
import { useState } from 'react'

function Post({profilePic, image, username, timestamp,message}) {
    const [color, setColor] = useState('gray')

    const handleColor= ()=>{
        setColor('rgb(51, 67, 245)')
    }
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}
                className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p className=""> {message} </p>
            </div>
            <div className="post__image">
                <img src={image} alt="" className=""/>
            </div>
            <div className="post__options">
                <div className="post__option" onClick={handleColor} >
                     <ThumbUp style={{color:color}}  />
                     <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircle />
                    <ExpandMore />
                </div>
             </div>
        </div>
    )
}

export default Post
