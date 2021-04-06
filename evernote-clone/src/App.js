import './App.scss';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import Register from './login-pages/Register';
import Login from './login-pages/Login';
import Home from './pages/Home';
function App() {
  const [user,setUser]=useState('')
  useEffect(()=>{
    const unsubscribe=  auth.onAuthStateChanged((authUser)=>{
      if(authUser){
         setUser(authUser)
        
         if(authUser.displayName){
           //dont update username
         }
      }else{
          setUser(null);
      }
    })
    return()=>{
      //Perform some Cleanup actions.
      unsubscribe();
    }
  },[])
  return (
    <div className="App">
      <Router>
     
     {!user?(
   <Switch>

   <Route path="/register">
     <Register/>
     </Route>
     <Route path="/">
     <Login/>
    
     </Route>
     </Switch>
    
     ):(
<Switch>
  <Route path="/">
<Home/>
  </Route>
  </Switch>
     )}
     </Router>
    </div>
  );
}

export default App;
