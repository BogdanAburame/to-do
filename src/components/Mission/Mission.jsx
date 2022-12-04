import React, { useRef } from 'react';
import { useDrag } from 'react-dnd/dist/hooks';
import './Missions.scss'

const Mission = ({title, setItems, id, index, moveMissionHandler, ...props}) => {
  const changeItemColumn = (currentItem, columnName) => {
    setItems(props.projectId, currentItem.id, columnName)
  } 


  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'Mission',
    item: {title, id, index},
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      switch (dropResult && dropResult.title) {

        case 'Queue':
          changeItemColumn(item, 'Queue')
          break;
        case 'Development':
          changeItemColumn(item, 'Development')
          break;
        case 'Done':
          changeItemColumn(item, 'Done')
          break;
        default:
          break;
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  return (
    <div ref={drag} className='mission' >
      {title}
    </div>
  )
}

export default Mission