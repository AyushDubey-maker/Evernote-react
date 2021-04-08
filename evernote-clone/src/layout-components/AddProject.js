import React, { useState } from 'react'
import firebase from 'firebase'
import { generatePushId } from '../helpers'
import { useProjectsValue } from '../context'
import { db } from '../firebase'
import PropTypes from 'prop-types';
function AddProject({shouldShow=false}) {
    const [show,setShow]=useState()
    const [projectName,setProjectName]=useState('')
    const projectId=generatePushId();
    const {projects,setProjects}=useProjectsValue()
    const user=firebase.auth().currentUser
    const addProject=()=>{
        projectName && db.collection('projects').doc(user?.uid).collection('user-projects').add({
            projectId,
            name:projectName
        }).then(()=>{
            setProjects([...projects])
            setProjectName('')
            setShow(false)
        })
    }
    return (
        <div className="add-project" data-testid="add-project">
          {show && (
                <div className="add-project__input" data-testid="add-project-inner">
                <input
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="add-project__name"
                  data-testid="project-name"
                  type="text"
                  placeholder="Name your project"
                />
                  <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
            data-testid="add-project-submit"
          >
            Add Project
          </button>
          <span
            aria-label="Cancel adding project"
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => setShow(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setShow(false);
            }}
            role="button"
            tabIndex={0}
          >
            Cancel
          </span>
        </div>
          )}
             <span className="add-project__plus">+</span>
      <span
        aria-label="Add Project"
        data-testid="add-project-action"
        className="add-project__text"
        onClick={() => setShow(!show)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShow(!show);
        }}
        role="button"
        tabIndex={0}
      >
        Add Project
      </span>
        </div>
    )
}

export default AddProject
