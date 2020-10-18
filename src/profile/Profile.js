import React from 'react'

const Profile=(props)=> {
    console.log(`props:`,props)
    return (
        <div>
<h2>{props.fullName}</h2>
<h3>{props.bio}</h3>
<h3>{props.profession}</h3>
        </div>
    )
}
Profile.defaultProps={fullName : 'Malek Marzouki', bio:'a 27 year-old web developer',
profession: 'Future Developer' }
export default Profile;
