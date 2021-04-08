import React, { useState } from 'react'
import './Home.css'
// import firebase from 'firebase'
import Header from '../components/Header'
import Content from '../components/Content'
import { ProjectsProvider, SelectedProjectProvider } from '../context'
function Home({darkModeDefault=false}) {
    //const user=firebase.auth().currentUser
    const [darkMode,setDarkMode]=useState(darkModeDefault)
    return (
   
            <SelectedProjectProvider>
                <ProjectsProvider>
                <main data-testid="application" className={darkMode?'darkmode':undefined}>
                <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
     
                <Content/>
          
             </main>
             </ProjectsProvider>
            </SelectedProjectProvider>
    )
}

export default Home
