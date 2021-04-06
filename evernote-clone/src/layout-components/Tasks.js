import React, { useEffect } from 'react'
import { useTasks } from '../fire-hooks';
import AddTask from './AddTask'
import Checkbox from './Checkbox'
import {useSelectedProjectValue,useProjectsValue} from '../context/index'
import { collatedTasksExist, getTitle ,getCollatedTitle} from '../helpers';
import { collatedTasks } from '../constants';
function Tasks() {
    const { selectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const { tasks } = useTasks(selectedProject);

    let projectName = '';

    if(projects && projects.length > 0 && selectedProject && !collatedTasksExist(selectedProject)){
      projectName=getTitle(projects,selectedProject).name
    }
    if (collatedTasksExist(selectedProject) && selectedProject) {
      projectName = getCollatedTitle(collatedTasks,selectedProject).name

    }
    
  useEffect(() => {
    document.title = `${projectName}: EverNote`;
  });
    return (
        <div className="tasks" data-testid="tasks">
        <h2 data-testid="project-name">{projectName}</h2>
  
        <ul className="tasks__list">
          {tasks.map((task) => (
            <li key={`${task.id}`}>
              <Checkbox id={task.id} taskDesc={task.task} />
              <span>{task.task}</span>
            </li>
          ))}
        </ul>
  
        <AddTask />
      </div>
    )
}

export default Tasks
