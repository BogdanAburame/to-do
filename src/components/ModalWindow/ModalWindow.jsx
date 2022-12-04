import React from 'react';
import './ModalWindow.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useParams } from "react-router-dom";

const ModalWindow = props => {
  const dispatch = useDispatch()

  const parameters = {
    id: 0,
    title: '',
    status: '',
  }

  const [title, setTitle] = useState(parameters.title)
  const [status, setStatus] = useState(parameters.status)

  const onChangeTitle = (e) => {
    const value = e.target.value
    setTitle(value)
  }
  const onChangeStatus = (e) => {
    const value = e.target.value
    setStatus(value)
  }
  const projectId = useParams().projectId
  const onAcceptCreate = () => {
    dispatch({
      type: 'CREATE_NEW_TASK', projectId, newObj: {
        id: Date.now(),
        title,
        status,
        number: 2,
        description: '',
        creationDate: '',
        inProgressTime: '',
        deadline: '',
        priority: '',
        attachments: '',
        subMissions: [],
        commentaries: []
      }
    })
    dispatch({type: 'CLOSE_MODAL'})
  }

  const closeModalWindow = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }

  return (
    <div className='modalWindowContainer'>
      <div className='modalWindowHead'>
        <div>Modal window</div>
        <div onClick={closeModalWindow}>Close</div>
      </div>
      <div className="modalWindowBody">
        <div className='modalWindowTaskEditor' >
          <div>Title</div>
          <div><input value={title} onChange={onChangeTitle} /></div>
        </div>
        <div className='modalWindowTaskEditor'>
          <div>Status</div>
          <div><input value={status} onChange={onChangeStatus} /></div>
        </div>
        <div className="modalWindowFooter">
          <div onClick={onAcceptCreate}>Accept</div>
        </div>
      </div>
    </div>
  )
}
export default ModalWindow