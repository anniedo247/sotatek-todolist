import { v4 as uuidv4 } from 'uuid';

export const ACTIONS = {
  ADD: 'add',
  SAVE: 'save',
  REMOVE: 'remove',
  CLEAR: 'clear',
};

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [
        ...state,
        { id: uuidv4(),
          title: action.payload.title,
          description: action.payload.description,
          dueDate: action.payload.dueDate,
          priority: action.payload.priority
          
        },
      ];
    case ACTIONS.SAVE: {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            id: action.payload.id,
            title: action.payload.title,
            description: action.payload.description,
            dueDate: action.payload.dueDate,
            priority: action.payload.priority          };
        }
        return item;
      });
    }
    
    case ACTIONS.REMOVE:
      return state.filter((item) => item.id !== action.payload.id);

    case ACTIONS.CLEAR:
      return (state = []);
    default:
      return state;
  }
};
