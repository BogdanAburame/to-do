import React, { useState } from 'react';
import Section from '../Section/Section';
import "./Tasks.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import Mission from '../Mission/Mission';
import { useDispatch } from 'react-redux/es/exports';

const Tasks = props => {

  const dispatch = useDispatch()
  const setItems = (projectId, missionId, status) => {
    dispatch({type: 'MOVE_ITEM', projectId, missionId, status})
  }

  const blankTask = {
    id: 5, 
    title: '', 
    status: 'Queue', 
    number: 5, 
    description: '', 
    creationDate: '', 
    inProgressTime: '', 
    deadline: '', 
    priority: '', 
    attachments: '', 
    subMissions: [], 
    commentaries: []
  }
  const openModal = () => {
    dispatch({type: 'OPEN_MODAL'})
  }
  const selectIsModalOpen = state => state.modals.isOpen
  const isModalOpen = useSelector(selectIsModalOpen)

  const returnItemsForColumn = (columnName) => {
    return missions 
    .filter(item => item.status === columnName)
    .map( (item) => (
      <Mission 
        key={item.id} 
        id={item.id} 
        title={item.title} 
        setItems={setItems} 
        projectId={+projectId} 
        status={item.status} 
        />
          ))
        }
        
  const projectId = useParams().projectId
  const selectProject = state => state.tasks.projects
  
  const project = useSelector(selectProject)
  
  const currentProject = project.filter(p => p.id === +projectId)
  const missions = currentProject[0].missions
  


  return (
    <div className='tasksContainer'>
      <DndProvider backend={HTML5Backend}>
      <Section 
        name='Queue' 
        openModal={openModal}
        isModalOpen={isModalOpen}
        >
          {returnItemsForColumn('Queue')}
        </Section>
      <Section 
        openModal={openModal}
        isModalOpen={isModalOpen}
        name='Development' 
        >
          {returnItemsForColumn('Development')}
        </Section>
      <Section 
        name='Done' 
        openModal={openModal}
        isModalOpen={isModalOpen}
        >
          {returnItemsForColumn('Done')}
        </Section>
        </DndProvider>
    </div>
  )
}

export default Tasks