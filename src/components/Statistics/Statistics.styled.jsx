import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatisticsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const StatisticsLabel = styled.span`
  min-width: 120px;
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const StatisticsPercentage = styled.span`
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
  color: green;
`;

export const StatisticsCount = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
