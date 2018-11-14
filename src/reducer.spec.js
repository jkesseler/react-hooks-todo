import reducer from './reducer';

const state = {
  todos: [{
    id: 1,
    text: 'Lorem',
    checked: false,
  }, {
    id: 2,
    text: 'Ispum',
    checked: true,
  }],
};

describe('the reducer', () => {
  test('Completes a todo', async () => {
    const newState = reducer(state, { type: 'CHECKED', payload: { id: 1 } });
    const newTodo = newState.todos.filter(todo => todo.id === 1);

    expect(newTodo[0].checked).toBe(true);
  });

  test('Add a todo', async () => {
    const newTodoText = 'Dolor';
    const newState = reducer(state, { type: 'ADD_TODO', payload: newTodoText });
    expect(newState.todos.slice(-1)[0].text).toEqual(newTodoText);
  });


  it('Removes a todo', () => {
    const newState = reducer(state, { type: 'REMOVE', payload: { id: 1 } });
    expect(newState.todos.length).toEqual(2);
  });
});
