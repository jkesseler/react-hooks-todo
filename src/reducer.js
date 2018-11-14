import uuidv4 from 'uuid/v4';

export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      if (!action.payload) {
        return state;
      }

      return {
        ...state,
        todos: [...state.todos, {
          id: uuidv4(),
          checked: false,
          text: action.payload,
        }],
      };
    case 'REMOVE':
      return {
        ...state,
        todos: state.todos.filter(t => t !== action.payload),
      };

    case 'CHECKED':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (action.payload.id === todo.id) {
            return {
              ...todo,
              checked: !todo.checked,
            };
          }
          return todo;
        }),
      };


    default:
      return state;
  }
}
