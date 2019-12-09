import React from 'react'
import friendData from './friendData'
import FriendList from './FriendsList';


function App(){
    
    return <div>
          <FriendList friends={friendData}/>


        </div>
}

export default App