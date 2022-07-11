import fetchUser from './services/rando-user'
import './App.css';
import { useEffect, useState } from 'react';
import UserSummary from './Components/UserSummary';

// import axios from 'axios';




function App() {
const [currentUser, setCurrentUser] = useState(null)

useEffect(()=>{
  refreshUser()
},[])

async function refreshUser(){
  const results = await fetchUser()
  setCurrentUser(results.data.results)
  
  return results.data.results
}

  return (
    <div className="App">
      <button onClick={()=>refreshUser()}>Refresh User</button>
      <UserSummary userData={currentUser}></UserSummary>
    </div>
  );
}

export default App;
