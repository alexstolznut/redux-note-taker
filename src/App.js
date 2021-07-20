
import './App.css';
import { connect } from 'react-redux';
import { actions } from './actions';

function App({appState, addNewTask, deleteTask}) {
  const handleAddTask = () => {
    const task = document.querySelector('.task').value;
    console.log(task);
    addNewTask(task);
  }
  const handleDeleteTask = () => {
    deleteTask();
  }
  return (
    <div className="App">
      <h1>All your tasks</h1>
      <div className="tasks">
        {appState.tasks.map((task, key) => (
          <p key={key}>{task}</p>
        ))}
      </div>
       
       <input type="text" className="task" />
       <button onClick={handleAddTask}>Add Task</button>
       <button onClick={handleDeleteTask}>Delete Latest Task</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  appState: state,
});

const mapDispatchToProps = (dispatch) => ({
  addNewTask: (task) => dispatch(actions.addTask(task)),
  deleteTask: () => dispatch(actions.deleteTask()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
