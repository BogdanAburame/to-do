const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'

const initialState = {
  isOpen: false,
  parameters: {
    id: 0, 
    title: '', 
    status: '', 
    number: 0, 
    description: '', 
    creationDate: '', 
    inProgressTime: '', 
    deadline: '', 
    priority: '', 
    attachments: '', 
    subMissions: [], 
    commentaries: []
  },
}

const modalsReducer = (state=initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false
      }
    default:
      return state;
  }
}

export default modalsReducer