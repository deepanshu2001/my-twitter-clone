import React,{useEffect, useState} from 'react'
import './TwitterFeed.css'
import TwitterPost from './TwitterPost'
import TwittertweetBox from './TwittertweetBox'
import db from './firebase.js'
function TwitterFeed() {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot=>(
      setPosts(snapshot.docs.map(doc=>doc.data()))
    ))
  },[])
  return (
    <div className='twitterfeed'>
       <div className='twitterfeed__header'>
            <h2>Home</h2>
       </div>
       <TwittertweetBox/>
       {posts.map(post=>
        <TwitterPost 
        displayName={post.displayName} 
        username={post.username} 
        image={post.image} 
        avatar={post.avatar} 
        text={post.text} 
        verified={post.verified}/>
       )}
       
       
       
    </div>
  )
}

export default TwitterFeed
