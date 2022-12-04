const MOVE_ITEM = 'MOVE_ITEM'
const CREATE_NEW_TASK = 'CREATE_NEW_TASK'


const initialState = {
  projects: [
    {
      id: 1, 
      title: 'To do app', 
      missions: [
        {
          id: 1, 
          title: 'start', 
          status: 'Queue', 
          number: 1, 
          description: '', 
          creationDate: '', 
          inProgressTime: '', 
          deadline: '', 
          priority: '', 
          attachments: '', 
          subMissions: [], 
          commentaries: []
        },
        {
          id: 2, 
          title: 'finish', 
          status: 'Queue', 
          number: 2, 
          description: '', 
          creationDate: '', 
          inProgressTime: '', 
          deadline: '', 
          priority: '', 
          attachments: '', 
          subMissions: [], 
          commentaries: []
        },
      ]
    },
  ]
}

const changeMissionStatus = (projects, projectId, missionId, status) => {
  return projects.map(p => {
    if (p.id === projectId) {
      p.missions.map(m=>{
        if(m.id === missionId) {
          m.status = status
        }
        return m
      })
    }
    return p
  })
}

const changeObjectProperty = (items, projectId, newObj) => {
  return items.map(u => {
    if (u.id === +projectId) {
      u.missions.push(newObj)
    }
    return u
  })
}

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_ITEM:
      return {
        ...state,
        projects: changeMissionStatus(state.projects, action.projectId, action.missionId, action.status)
      }
    case CREATE_NEW_TASK:
      changeObjectProperty(state.projects, action.projectId, action.newObj)
    default:
      return state;
  }
}

export default tasksReducer