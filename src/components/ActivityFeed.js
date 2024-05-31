import React from 'react';
import styled from 'styled-components';
import Avatar_1 from '../assets/Avatar-1.svg';
import Avatar_2 from '../assets/Avatar-2.svg';

// Activity Feed component
const ActivityFeed = () => {
  // Dummy data
  const activities = [
    { id: 1, img:Avatar_1, user: 'Hiruni Bagya', action: 'created', task: 'Need John Beige’s signature', date: 'Sep 16' },
    { id: 2, img:Avatar_2, user: 'John Doe', action: 'completed', task: 'Template is not completed', date: 'Sep 16' },
    { id: 3, img:Avatar_1, user: 'Dilanka Nirmal', action: 'completed', task: 'Assignment is completed', date: 'May 31' },

  ];

  return (
    <ActivityFeedWrapper>
      <h2>Activity Feed</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
            <img src={activity.img} alt={activity.user} />
            <p><strong>{activity.user}</strong> {activity.action} <a href="https://www.betalaunch.io/">{activity.task}</a></p>
            <small>{activity.date}</small>
          </li>
        ))}
      </ul>
    </ActivityFeedWrapper>
  );
};

// Styled components
const ActivityFeedWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    &:last-child {
      border-bottom: none;
    }
    display: flex;
  }
  img{
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  p {
    margin: 0;
  }
  a {
    color: #6d4cbb;
  }
  small {
    color: #999;
  }
`;

export default ActivityFeed;
