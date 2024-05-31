import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Welcomebar from './components/Welcomebar';
import TaskList from './components/TaskList';
import ActivityFeed from './components/ActivityFeed';
import TasksByPriorityChart from './components/TasksByPriorityChart';
import styled from 'styled-components';
import { fetchTasks } from './redux/actions';

// App component
function App() {
  // Redux hooks
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  // Fetch tasks on component mount
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <AppWrapper>
      <Sidebar />
      <Content>
        <Header />
        <MainContent>
          <Welcomebar />
          <MainSection>
            <TaskList />
            <RightSection>
              <ActivityFeed />
              <TasksByPriorityChart tasks={tasks} />
            </RightSection>
          </MainSection>
        </MainContent>
      </Content>
    </AppWrapper>
  );
}

// Styled components
const AppWrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
`;

const MainContent = styled.div`
  background-color: #f4f5f7;
  border-radius: 8px;
  padding: 20px;
`;

const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RightSection = styled.div`
  width: 30%;
`;

export default App;
