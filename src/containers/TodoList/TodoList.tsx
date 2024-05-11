import React, { useState } from "react";
import TaskCard from "../../components/TaskCard";
import AddTask from "../../components/AddTask";
import FilterTag from "../../components/FilterTag";
import DeleteModal from "../../components/DeleteModal";
import AddModal from "../../components/AddModal";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store';
import { TodoActions } from '../../store/actions';
import { Todo } from '../../types/interfaces';
import { FILTERS } from "../../types/enum";
import ImageLinks from "../../utils/ImageLinks";
import './TodoList.css';

const TodoList: React.FC = () => {
  const [allActive, setAllActive] = useState<boolean>(true);
  const [doneActive, setDoneActive] = useState<boolean>(false);
  const [notDoneActive, setNotDoneActive] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showAddTaskModal, setShowAddTaskModal] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number>(-1);

  const dispatch = useDispatch();

  const { todos, filter } = useSelector((state: RootState) => state.todos);

  function handleAll() {
    setAllActive(true);
    setDoneActive(false);
    setNotDoneActive(false);
    dispatch(TodoActions.setFilter(FILTERS.ALL))
  };

  function handleDone() {
    setAllActive(false);
    setDoneActive(true);
    setNotDoneActive(false);
    dispatch(TodoActions.setFilter(FILTERS.COMPLETED))
  };

  function handleNotDone() {
    setAllActive(false);
    setDoneActive(false);
    setNotDoneActive(true);
    dispatch(TodoActions.setFilter(FILTERS.NOT_COMPLETED))
  };

  function handleShowDeleteModal(id: number) {
    setShowDeleteModal(true);
    setDeleteId(id);
  }

  function handleCheck(id: number) {
    dispatch(TodoActions.toggleTodo(id));
  }

  function handleCloseDeleteModal() {
    setShowDeleteModal(false);
  };

  function handleDelete() {
    dispatch(TodoActions.deleteTodo(deleteId))
    setDeleteId(-1);
    setShowDeleteModal(false);
  }

  function handleShowAddTaskModal() {
    setShowAddTaskModal(true);
  };

  function handleAddTask(newTask: Todo) {
    dispatch(TodoActions.addTodo(newTask))
    setShowAddTaskModal(false);
  };

  function handleAddTaskCancel() {
    setShowAddTaskModal(false);
  };

  const filteredTodos = todos.filter((todo: Todo) => {
    if (filter === FILTERS.COMPLETED) return todo?.completed;
    if (filter === FILTERS.NOT_COMPLETED) return !todo?.completed;
    return true;
  });

  return (
    <div className="page">
      <div className="main">
        <h1 className="header">All your tasks</h1>
        <div className="title-and-filter">
          <div className="addTaskWrap">
            <h3 className="title" onClick={handleDone}>Tasks </h3>
            <AddTask handleShowAddTaskModal={handleShowAddTaskModal} />
          </div>
          <div className="filter-field">
            <div onClick={handleAll}><FilterTag name="All" active={allActive} /></div>
            <div onClick={handleDone}><FilterTag name="Done" active={doneActive} /></div>
            <div onClick={handleNotDone}><FilterTag name="Not done" active={notDoneActive} /></div>
            <img className="filter-icon" src={ImageLinks.filter} alt="Filter Icon" />
          </div>
        </div>
        {filteredTodos?.map((task: Todo) => (
          <TaskCard
            key={task?.id}
            title={task?.title}
            description={task?.description}
            completed={task?.completed}
            handleShowDeleteModal={() => handleShowDeleteModal(task?.id)}
            handleCheck={() => handleCheck(task?.id)}
          />
        ))}
      </div>
      {showDeleteModal && <DeleteModal handleCloseDeleteModal={handleCloseDeleteModal} handleDelete={handleDelete} />}
      {showAddTaskModal && <AddModal handleAddTask={(newTask: Todo) => handleAddTask(newTask)} handleAddTaskCancel={handleAddTaskCancel} />}
    </div>
  );
};

export default TodoList;