import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className='storyReel' >
            <Story
                image='./images/dp3.jpg'
                profileSrc='./images/av1.jpg'
                title='Mariana'
            />
            <Story
                image='./images/dp1.jpg'
                profileSrc='./images/av2.jpg'
                title='Rose'
            />
            <Story
                image='./images/dp2.jpg'
                profileSrc='./images/av3.jpg'
                title='Sara'
            />
            <Story
                image='./images/dp4.jpg'
                profileSrc='./images/sb1.jpg'
                title='star boy'
            />
        </div>
    )
}

export default StoryReel
