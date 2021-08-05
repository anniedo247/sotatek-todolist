import { v4 as uuidv4 } from "uuid";

export const ACTIONS = {
  ADD: "add",
  EDIT: "edit",
  GET: "get",
  REMOVE: "remove",
  BATCH_REMOVE: "batch_remove",
  RESET: "reset",
};

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.payload.title,
          description: action.payload.description,
          dueDate: action.payload.dueDate,
          priority: action.payload.priority,
          selected: false,
        },
      ];
    case ACTIONS.EDIT: {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            id: action.payload.id,
            title: action.payload.title,
            description: action.payload.description,
            dueDate: action.payload.dueDate,
            priority: action.payload.priority,
          };
        }
        return item;
      });
    }
    case ACTIONS.TOGGLE:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      });

    case ACTIONS.REMOVE:
      return state.filter((item) => item.id !== action.payload.id);

    case ACTIONS.BATCH_REMOVE:
      return state.filter((item) => !item.selected);

    case ACTIONS.RESET:
      return state.map((item) => {
        return {
          ...item,
          selected: false,
        };
      });
    default:
      return state;
  }
};
