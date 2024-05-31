import React from 'react';
import styled from 'styled-components';
import HighPriorityImage from '../assets/Priority-High.svg';
import MediumPriorityImage from '../assets/Priority-Medium.svg';
import LowPriorityImage from '../assets/Priority-Low.svg';

// TaskItem component
const TaskItem = ({ task }) => {
  const { priority, todo, completed, createdAt } = task;

  const getPriorityImage = (priority) => {
    switch (priority) {
      case 'HIGH':
        return HighPriorityImage;
      case 'MEDIUM':
        return MediumPriorityImage;
      case 'LOW':
        return LowPriorityImage;
      default:
        return null;
    }
  };

  const formatDate = (dateString) => {
    const date = new window.Date(dateString);
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <TaskItemWrapper>
      <TaskHeader>
        <PriorityImage src={getPriorityImage(priority)} alt={`priority`} />
        <Todo>{todo}</Todo>
        <StatusText completed={completed}>
          {completed ? 'Done' : 'In-Progress'}
        </StatusText>
        <Date>{formatDate(createdAt)}</Date>
      </TaskHeader>
      {!completed && (
        <MarkAsDoneButton>
          Mark as done
        </MarkAsDoneButton>
      )}
    </TaskItemWrapper>
  );
};

// Styled components
const TaskItemWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const TaskHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PriorityImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const Todo = styled.p`
  flex-grow: 1;
  margin: 0 8px;
`;

const StatusText = styled.span`
  color: ${({ completed }) => (completed ? 'green' : 'orange')};
  font-weight: bold;
  margin-left: 8px;
`;

const Date = styled.span`
  color: #999;
  margin-left: 8px;
`;

const MarkAsDoneButton = styled.button`
  background-color: transparent;
  font-weight: bold;
  color: #BC006D;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: white;
  }
`;

export default TaskItem;
