import React from "react";
import styled from "styled-components";

const ScheduleWrapper = styled.section`
  background-color: #fff;
  margin-bottom: 2rem;
  padding: 1.5rem 0;
`;

const ScheduleHeading = styled.h2`
  font-size: 2rem;
  font-weight: lighter;
  letter-spacing: 0.2rem;
  text-align: center;
  font-family: 'Russo One', sans-serif;
  color: #1BA821;
  padding-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ScheduleList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1250px;
  margin: 0 auto;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SchedulePoint = styled.li`
  text-align: center;
  position: relative;
  width: 20%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

const SchedulePointTime = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: normal;
  color: #2c6bd3;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SchedulePointDescription = styled.p`
  margin: 1rem 0;
  color: #6b6b6b;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SchedulePointLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: #2c6bd3;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`;

const Schedule = () => {
  return (
    <ScheduleWrapper>
      <ScheduleHeading>Schedule</ScheduleHeading>
      <ScheduleList>
        <SchedulePoint>
          <SchedulePointTime>10:00am</SchedulePointTime>
          <SchedulePointLine />
          <SchedulePointDescription>Opening remarks</SchedulePointDescription>
        </SchedulePoint>
        <SchedulePoint>
          <SchedulePointTime>10:15am</SchedulePointTime>
          <SchedulePointLine />
          <SchedulePointDescription>Keynote speech</SchedulePointDescription>
        </SchedulePoint>
        <SchedulePoint>
          <SchedulePointTime>11:00am</SchedulePointTime>
          <SchedulePointLine />
          <SchedulePointDescription>Panel discussion</SchedulePointDescription>
        </SchedulePoint>
        <SchedulePoint>
          <SchedulePointTime>12:00pm</SchedulePointTime>
          <SchedulePointLine />
          <SchedulePointDescription>Break</SchedulePointDescription>
        </SchedulePoint>
        <SchedulePoint>
          <SchedulePointTime>12:30pm</SchedulePointTime>
          <SchedulePointLine />
          <SchedulePointDescription>Interactive workshop</SchedulePointDescription>
        </SchedulePoint>
        <SchedulePoint>
          <SchedulePointTime>1:30pm</SchedulePointTime>
          <SchedulePointLine />
          <SchedulePointDescription>Closing remarks</SchedulePointDescription>
        </SchedulePoint>
      </ScheduleList>
    </ScheduleWrapper>
  );
};

export default Schedule;
