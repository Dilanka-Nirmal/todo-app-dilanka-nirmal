import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import styled from 'styled-components';

// Registering all chart components including scales, controllers, and elements
Chart.register(...registerables);

// TasksByPriorityChart component
const TasksByPriorityChart = ({ tasks }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;

    // Clean up chart on component unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  // Count tasks by priority
  const priorities = tasks.reduce(
    (acc, task) => {
      acc[task.priority]++;
      return acc;
    },
    { HIGH: 0, MEDIUM: 0, LOW: 0 }
  );

  // Chart data
  const data = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [
      {
        label: 'Tasks by Priority',
        data: [priorities.HIGH, priorities.MEDIUM, priorities.LOW],
        backgroundColor: ['#2F80ED', '#F2C94C', '#EB5757'],
      },
    ],
  };

  // Chart options
  const options = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <ChartContainer>
      <h2>Tasks Priorities</h2>
      <ChartWrapper>
        <Doughnut ref={chartRef} data={data} options={options} />
      </ChartWrapper>
    </ChartContainer>
  );
};

// Styled components
const ChartContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const ChartWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 0;
  padding-bottom: 50%;
  @media (max-width: 768px) {
    max-width: 300px;
    padding-bottom: 75%;
  }
  @media (max-width: 480px) {
    max-width: 250px;
    padding-bottom: 100%;
  }
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% ;
    height: 100%;
  }
`;

export default TasksByPriorityChart;
