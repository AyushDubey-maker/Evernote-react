import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import firebase from 'firebase'
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { db } from '../firebase';
import PropTypes from 'prop-types';
// import '../components/Sidebar.scss'
function IndiviualProject({project }) {
    const [showConfirm, setShowConfirm] = useState(false);
    const { projects, setProjects } = useProjectsValue();
    const { setSelectedProject } = useSelectedProjectValue();
    const user=firebase.auth().currentUser
    const deleteProject = (docId) => {
          db
          .collection('projects')
          .doc(user?.uid)
          .collection('user-projects')
          .doc(docId)
          .delete()
          .then(() => {
            setProjects([...projects]);
            setSelectedProject('INBOX');
          });
      };
    return (
        <>
         {/* dot is called bullet */}
      <span className="sidebar__dot">•</span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShowConfirm(!showConfirm);
        }}
        tabIndex={0}
        role="button"
        aria-label="Confirm deletion of project"
      >
        <DeleteIcon className="delete-btn" onClick={() => deleteProject(project.docId)} />
        {/* {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure you want to delete this project?</p>
              <button
                type="button"
                onClick={() => deleteProject(project.docId)}
              >
                Delete
              </button>
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setShowConfirm(!showConfirm);
                }}
                tabIndex={0}
                role="button"
                aria-label="Cancel adding project, do not delete"
              >
                Cancel
              </span>
            </div>
          </div>
        )} */}
      </span>
    </>
  );
}

IndiviualProject.propTypes = {
  project: PropTypes.object.isRequired,
};
export default IndiviualProject
