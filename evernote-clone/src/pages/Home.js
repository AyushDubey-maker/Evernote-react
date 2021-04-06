import React from 'react'
import './Home.css'
// import firebase from 'firebase'
import Header from '../components/Header'
import Content from '../components/Content'
import { ProjectsProvider, SelectedProjectProvider } from '../context'
function Home() {
    //const user=firebase.auth().currentUser
    return (
   
            <SelectedProjectProvider>
                <ProjectsProvider>
                <div className="home">
                <Header/>
     
                <Content/>
          
             </div>
             </ProjectsProvider>
            </SelectedProjectProvider>
    )
}

export default Home
