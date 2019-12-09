import React from 'react'
import Friend from './Friend'



const FriendList = (props) => {
    const friends = props.friends.map(friend => <Friend name={friend.name} age={friend.age} pets={friend.pets} />)
 return <div>
     {friends}

 </div>
}


export default FriendList