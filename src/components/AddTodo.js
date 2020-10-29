import React, { memo, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Button, Grid, Paper, TextField,
} from '@material-ui/core';

import Store from '../store';

export const AddTodo = ({
  todo,
  handleInputChange,
  handleKeyPress,
  handleTodoAdd,
}) => (
  <Paper>
    <Grid style={{ margin: 16, padding: 16 }} container>
      <Grid xs={10} md={11} style={{ paddingRight: 16 }} item>
        <TextField
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Write something"
          value={todo}
          fullWidth
        />
      </Grid>
      <Grid xs={2} md={1} item>
        <Button
          color="secondary"
          variant="outlined"
          onClick={handleTodoAdd}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  </Paper>
);


AddTodo.propTypes = {
  todo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  handleTodoAdd: PropTypes.func.isRequired,
};


export default memo(() => {
  const { dispatch } = useContext(Store);
  const [todo, setTodo] = useState('');
  const handleInputChange = event => setTodo(event.target.value);

  const handleTodoAdd = () => {
    dispatch({ type: 'ADD_TODO', payload: todo });
    setTodo('');
  };

  const handleKeyPress = (event) => {
    if (event.which === 13 || event.keyCode === 13) {
      handleTodoAdd();
    }
  };

  const props = {
    todo,
    handleInputChange,
    handleKeyPress,
    handleTodoAdd,
  };

  return (<AddTodo {...props} />);
});
