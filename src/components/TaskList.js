import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/actions';
import TaskItem from './TaskItem';
import Pagination from './Pagination';
import styled from 'styled-components';

// TaskList component
const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, status } = useSelector(state => state.tasks);
  const [currentPage, setCurrentPage] = useState(0);
  const tasksPerPage = 8;

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * tasksPerPage;
  const currentTasks = tasks.slice(offset, offset + tasksPerPage);
  const pageCount = Math.ceil(tasks.length / tasksPerPage);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Failed to load tasks</div>;
  }

  return (
    <TaskListWrapper>
      <Title>Tasks</Title>
      {currentTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
      <PaginationWrapper>
        <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
      </PaginationWrapper>
    </TaskListWrapper>
  );
};

// Styled components
const TaskListWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export default TaskList;
