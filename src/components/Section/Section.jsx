import React from 'react';
import './Section.scss'
import { useDrop } from 'react-dnd/dist/hooks/useDrop';
import ModalWindow from '../ModalWindow/ModalWindow';

const Section = ({children, ...props}) => {
  const [{canDrop, isOver}, drop] = useDrop({
    accept: 'Mission',
    drop: (item) => ({title: props.name}),
    collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: monitor.canDrop(),
    }),
  });

  const onCreateNewTaskClick = () => {
    props.openModal()
  }
  return (
    <div className='sectionContainer' ref={drop}>
      {props.isModalOpen && <ModalWindow />}
      <div className='sectionHead'>

        <div className='sectionTitle'>{props.name}</div>
        <div className='actionButtons'>
          <div onClick={onCreateNewTaskClick}>Create new task</div>
        </div>
      </div>
      <div className='sectionBody'>
      {children}
      </div>
    </div>
  )
}

export default Section