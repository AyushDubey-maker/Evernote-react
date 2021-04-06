import React from 'react'
import firebase from 'firebase'
import PropTypes from 'prop-types';
import { db } from '../firebase';
function Checkbox({ id, taskDesc }) {
    const user=firebase.auth().currentUser
    const archiveTask=()=>{
        db.collection('tasks').doc(user?.uid).collection('user-tasks').doc(id).update({
            archived:true
        })
    }
    return (
        <div
        className="checkbox-holder"
        data-testid="checkbox-action"
        onClick={() => archiveTask()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') archiveTask();
        }}
        aria-label={`Mark ${taskDesc} as done?`}
        role="button"
        tabIndex={0}
      >
        <span className="checkbox" />
      </div>
    )
}

export default Checkbox
Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    taskDesc: PropTypes.string.isRequired,
  };
  