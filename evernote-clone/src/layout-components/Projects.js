import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import IndiviualProject from './IndiviualProject';

function Projects({activeValue = null }) {
    const [active, setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    return (
        
        <div>
        {projects && projects.map(project=>(
            <li
            key={project.projectId}
            data-doc-id={project.docId}
            data-testId="project-action"
            className={
                active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
            }
            >
                <div
          role="button"
          data-testid="project-action"
          tabIndex={0}
          aria-label={`Select ${project.name} as the task project`}
          onClick={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setActive(project.projectId);
              setSelectedProject(project.projectId);
            }
          }}
        >
          <IndiviualProject project={project} />
        
        </div>
      </li>
        ))}    
        </div>
    )
}

export default Projects
