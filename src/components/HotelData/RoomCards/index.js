import { Box, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RoomCard from './RoomCard';
import BookRoomButon from './BookRoomButon';
import useToken from '../../../hooks/useToken';
import { getHotelRooms } from '../../../services/roomApi';

export default function RoomCards({ booked, hotelId }) {
  const [chosen, setChosen] = useState(null);
  const token = useToken();
  const [rooms, setRooms] = useState([]);

  const display = {
    true: <BookRoomButon roomData={chosen}  booked={booked}/>,
    null: '',
  };

  useEffect(async() => {
    const newRooms = await getHotelRooms(token, hotelId);
    setRooms(newRooms.Rooms);
  }, [hotelId]);

  if (rooms?.length === 0) {
    return (
      <Rooms>
        <StyledTypography alignitems="center" variant="body1" color="textSecondary" align="center">
          {'carregando Tickets'}
        </StyledTypography>
      </Rooms>
    );
  } else {
    return (
      <>
        <Rooms>
          {rooms?.map((item) => (
            <RoomCard key={item.id} item={item} chosen={chosen} setChosen={setChosen}/>
          ))}
        </Rooms>
        {display[chosen !== null]}
      </>
    );
  }
}

const StyledTypography = styled(Typography)`
  line-height: 1 !important;
`;

const Rooms = styled(Box)`
  display: flex;

  margin-top: 17px;
  margin-bottom: 46px;
`;
