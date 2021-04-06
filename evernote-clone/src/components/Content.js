import React from 'react'
import Tasks from '../layout-components/Tasks'
import './Content.scss'
import Sidebar from './Sidebar'
function Content() {
    return (
        <section className="content">
          <Sidebar/>
        <Tasks/>
        </section>
    )
}

export default Content
