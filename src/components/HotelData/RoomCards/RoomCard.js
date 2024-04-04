import { Box, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { IoPerson, IoPersonOutline } from 'react-icons/io5';
import styled, { css } from 'styled-components';
import useBookingByRoomId from '../../../hooks/api/useBookingByRoomId';

export default function RoomCard({ item, chosen, setChosen }) {
  const [booked, setBooked] = useState(null);
  const booking = useBookingByRoomId(item.id);
  
  useEffect(() => {
    if(booking.bookingLoading === false) {
      setBooked(booking.booking.length);      
    }
  }, [booking.bookingLoading]);

  const handleClick = () => {
    if (chosen === null) {
      setChosen(item);
    } else if (chosen?.id === item.id) {
      setChosen(null);
    } else if (chosen?.id !== item.id && chosen.id !== null) {
      setChosen(item);
    }
  };

  const icons = [];

  for (let i = 1; i <= item.capacity; i++) {
    if(icons.length + booked >= item.capacity) {
      icons.push({
        id: i,
        booked: true
      });
    }else{
      icons.push({
        id: i,
        booked: false
      });
    }    
  }

  return (
    <Card
      key={item.id}
      $clickable={booked === item.capacity ? false : true}
      onClick={handleClick}
      alignitems='center'
      className={chosen?.id === item.id ? true : false}
    >
      <StyledTypography alignitems='center' variant='body1' align='center'>
        {`${item.name}`}
      </StyledTypography>
      <Icons>
        {icons.map((icon) => (
          icon.booked ? <IoPerson key={icon.id} fontSize={'20px'}/> : icon.id === icons.length - booked && chosen?.id === item.id ? <IoPerson key={icon.id} color={'#FF4791'} fontSize={'20px'}/> : <IoPersonOutline key={icon.id} fontSize={'20px'}/>
        ))}
      </Icons>
    </Card>
  );
}

const StyledTypography = styled(Typography)`
  line-height: 1 !important;
  font-weight: 700 !important;
  padding: 10px;
`;

const Icons = styled(Box)`
  display: flex;
  align-items: center;
  margin-right: 10px !important;
`;

const NotClickable = css`
  pointer-events: none;
  width: 190px;
  height: 45px;
  background-color: #E9E9E9;
  color: #8c8c8c;
`;

const Card = styled(Box)`
  ${({ className }) => className && 'background-color: #ffeed2'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 190px;
  height: 45px;

  border: 1px solid #cecece;
  border-radius: 10px;

  margin-right: 24px;

  ${({ $clickable }) => !$clickable && NotClickable};
`;
