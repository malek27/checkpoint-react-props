import React from 'react';
import Profile from './profile/Profile'
import './App.css'
import photo from "./profile/ProfilPhoto.jpg"
import Alert from './profile/Alert'
function App() {
  const styleObject={color: 'blue' , textAlign: 'center'};
  const alertMyInput = name => alert(name);
 return (
   <div style = {styleObject}>
     <img src={photo} alt='pic'/>
     <Profile profession='Future Developer'
      bio='a 27 year-old web developer' 
      fullName = 'Malek Marzouki'/>
     < Alert name="Malek" alertMyInput={alertMyInput} />
   </div>
  );
}

export default App;
