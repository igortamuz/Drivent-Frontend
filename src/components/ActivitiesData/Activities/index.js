import dayjs from 'dayjs';
import styled from 'styled-components';
import useActivitiesByDayId from '../../../hooks/api/useActivitiesByDayId';
import useSeatsByTicket from '../../../hooks/api/useSeatsByUser';
import useToken from '../../../hooks/useToken';
import ActivityCard from './ActivityCard';

export default function Activities({ dayId }) {
  let data = useActivitiesByDayId(dayId);
  const hashTable = {};
  const token = useToken();
  const userActivities = useSeatsByTicket(token);
  
  data.activities?.forEach((current) => {
    if (hashTable[current.venueId] === undefined) {
      hashTable[current.venueId] = [current];
    } else {
      hashTable[current.venueId].push(current);
    }
  });

  const hashTableKeys = Object.keys(hashTable);

  hashTableKeys.forEach((currentKey) => {
    hashTable[currentKey].sort((a, b) => {
      return dayjs(a.startTime).get('hour') - dayjs(b.startTime).get('hour');
    });
  });

  return (
    <>
      <ActivitiesTitle gridLength={hashTableKeys.length}>
        {hashTableKeys.map((currentKey) => {
          return <div key={currentKey}>{hashTable[currentKey][0].Venue.name}</div>;
        })}
      </ActivitiesTitle>
      <ActivitiesTable gridLength={hashTableKeys.length}>
        {hashTableKeys.map((currentKey) => {
          return (
            <div key={currentKey}>
              {hashTable[currentKey].map((currentActivity) => {
                let booked = false;
                if(userActivities.UserSeats !== null) {
                  const isBooked = userActivities.UserSeats.seats.filter((seat) => seat.activityId === currentActivity.id).length;
                  if(isBooked>0) {
                    booked = true;
                  }
                }

                return <ActivityCard key={currentActivity.id} activity={currentActivity} booked ={booked}/>;
              })}
            </div>
          );
        })}
      </ActivitiesTable>
    </>
  );
}
const ActivitiesTitle = styled.div`
  display: grid;
  ${({ gridLength }) => gridLength && `grid-template-columns: repeat(${gridLength}, 1fr);`}
  grid-gap: 1px;

  & > * {
    font-weight: 400;
    font-size: 17px;
    line-height: 40px;
    text-align: center;
    color: #7b7b7b;
  }
`;
const ActivitiesTable = styled.div`
  display: grid;
  ${({ gridLength }) => gridLength && `grid-template-columns: repeat(${gridLength}, 1fr);`}
  background-color: #d7d7d7;
  border: 1px solid #d7d7d7;
  grid-gap: 1px;

  & > * {
    background-color: #fff;
    padding: 10px;
    min-height: 200px;
    & > div:nth-child(n + 2) {
      margin-top: 10px;
    }
  }
`;
