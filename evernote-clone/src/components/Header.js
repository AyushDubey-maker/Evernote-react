import React ,{useState}from 'react'
import './Header.scss'
import PropTypes from 'prop-types';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { Button } from '@material-ui/core';
import { auth } from '../firebase';
import firebase from 'firebase'
import AddTask from '../layout-components/AddTask';
function Header({ darkMode, setDarkMode }) {
    const user=firebase.auth().currentUser
    const [shouldShowMain, setShouldShowMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);
    return (
        <header className="header" data-testid="header">
        <nav>
          <div className="logo">
            <img src="https://evernote.com/img/logo/evernote/primary.svg"/>
          </div>
          <div className="settings">
            <ul>
              <li className="settings__add">
                <button
                  data-testid="quick-add-task-action"
                  aria-label="Quick add task"
                  type="button"
                  onClick={() => {
                    setShowQuickAddTask(true);
                    setShouldShowMain(true);
                  }}
                >
                  <AddOutlinedIcon/>
                </button>
              </li>
              <li className="settings__darkmode">
                <button
                  data-testid="dark-mode-action"
                  aria-label="Darkmode on/off"
                  type="button"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  <NightsStayOutlinedIcon />
                </button>
              </li>
            </ul>
              <div className="user_info">
            <p>Hello {user.displayName}</p>
                <Button className="logout_btn" variant="contained" color="secondary" onClick={()=>auth.signOut()}>Logout</Button>
                </div>
          </div>
        </nav>
  
        <AddTask
          showAddTaskMain={false}
          shouldShowMain={shouldShowMain}
          showQuickAddTask={showQuickAddTask}
          setShowQuickAddTask={setShowQuickAddTask}
        />
      </header>
    )
}
Header.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
  };
export default Header
