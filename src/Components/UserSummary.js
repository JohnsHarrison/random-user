import { useState } from "react"
function UserSummary(props){
const [showMore,setShowMore] = useState(false)

if(!props.userData){
    return <h3>There is no user data</h3>
}else{
    const buttonText = showMore ? 'Show less' : 'Show more'
 return(
 <div>
    
    <div>
        {showMore && <img src={props.userData[0].picture.medium}></img>}
    </div>
    <h1>{props.userData[0].name.first} {props.userData[0].name.last}</h1>
    <h3>{props.userData[0].email}</h3>
    { showMore && <h3>{props.userData[0].location.city}, {props.userData[0].location.country}</h3>}
    { showMore && <h3>Cell:{props.userData[0].cell}</h3>}
    { showMore && <h3>Phone:{props.userData[0].phone}</h3>}
    <button onClick={()=>setShowMore(!showMore)}>{buttonText}</button>
 </div>
  )
   
}
 if(showMore(true)){
        
    } 

   
}
export default UserSummary