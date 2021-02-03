import React, {useState, useEffect} from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import db from './Firebase'

function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{

        db.collection('posts').orderBy("timestamp", "desc").onSnapshot((snapshot)=>
          setPosts(snapshot.docs.map((doc)=>({
            id: doc.id,
            data : doc.data()
          })))
        )
      }, [])

    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender/>

        {
            posts.map(({id,data})=>(
              <Post 
                key={id} 
                postId={id}  
                username={data.username} 
                message={data.message} 
                image={data.image}
                profilePic={data.profilePic}
                timestamp={data.timestamp}
                />
              ))
        }
 
          

        </div>
    )
}

export default Feed
