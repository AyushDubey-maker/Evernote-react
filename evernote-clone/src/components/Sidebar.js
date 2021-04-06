import React,{useState} from 'react'
import InboxIcon from '@material-ui/icons/Inbox';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import './Sidebar.scss'
import { useSelectedProjectValue } from '../context';
import Projects from '../layout-components/Projects';
import AddProject from '../layout-components/AddProject';
function Sidebar() {
    const {setSelectedProject}=useSelectedProjectValue()
    const [active, setActive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);
    return (
        <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
     <li
     data-test-id="inbox"
     className={active === 'inbox' ? 'active' : undefined}>
            <div
            data-testid="inbox-action"
            aria-label="Show inbox tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('inbox');
              setSelectedProject('INBOX');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('inbox');
                setSelectedProject('INBOX');
              }
            }}
          >
         <span>
             <InboxIcon/>
         </span>
         <span>Inbox</span>
         </div>
     </li>
     <li
      data-testid="today"
      className={active === 'today' ? 'active' : undefined}>
           <div
            data-testid="today-action"
            aria-label="Show today's tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('today');
              setSelectedProject('TODAY');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('today');
                setSelectedProject('TODAY');
              }
            }}
          >
         <span>
             <CalendarTodayOutlinedIcon/>
         </span>
         <span>Today</span>
         </div>
     </li>
     <li
      data-testid="next_7"
      className={active === 'next_7' ? 'active' : undefined}>
          <div
            data-testid="next_7-action"
            aria-label="Show tasks for the next 7 days"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('next_7');
              setSelectedProject('NEXT_7');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('next_7');
                setSelectedProject('NEXT_7');
              }
            }}
          >
         <span>
             <EventNoteOutlinedIcon/>
         </span>
         <span>Next 7 days</span>
         </div>
     </li>
    </ul>
    <div className="sidebar__middle"
     aria-label="Show/hide projects"
     onClick={() => setShowProjects(!showProjects)}
     onKeyDown={(e) => {
       if (e.key === 'Enter') setShowProjects(!showProjects);
     }}
     role="button"
     tabIndex={0}>
      <span><KeyboardArrowDownIcon  className={!showProjects ? 'hidden-projects' : undefined}/></span>
      <h2>Projects</h2>
    </div>
    <ul className="sidebar__projects">
{showProjects && <Projects/>}
    </ul>
  {showProjects && <AddProject/>}
        </div>
    )
}

export default Sidebar
