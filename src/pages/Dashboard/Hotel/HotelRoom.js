import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useHotelRooms from '../../../hooks/api/useHotelRooms';
import { Typography } from '@material-ui/core';

export default function HotelRooms(props) {
  const { id, user } = props;

  let [capacity, setCapacity] = useState(null);
  const hotel =  useHotelRooms(user, id).rooms;

  let count=0;
  let bookingNumber;
  const capacityArray = [];

  if(hotel) {
    hotel.Rooms.forEach(room => {
      console.log(room.Booking.length);
      count = count + room.capacity;
      count = count - room.Booking.length;
      capacityArray.push(room.capacity);
    });
  }

  function descriptionString()  {
    let single = capacityArray.includes(1);
    let double = capacityArray.includes(2);
    let triple = capacityArray.includes(3);
    
    if(single && double && triple) {
      return(<NormalLetter variant='subtitle'>Single, Double e Triple</NormalLetter>);
    }

    if(single && double && !triple) {
      return(<NormalLetter variant='subtitle'>Single e Double</NormalLetter>);
    }

    if(single && !double && triple) {
      return(<NormalLetter variant='subtitle'>Single e Triple</NormalLetter>);
    }

    if(!single && double && triple) {
      return(<NormalLetter variant='subtitle'>Double e Triple</NormalLetter>);
    }

    if(single && !double && !triple) {
      return(<NormalLetter variant='subtitle'>Single</NormalLetter>);
    }

    if(!single && double && !triple) {
      return(<NormalLetter variant='subtitle'>Double</NormalLetter>);
    }

    if(!single && !double && triple) {
      return(<NormalLetter variant='subtitle'>Triple</NormalLetter>);
    }
  }
  
  useEffect(() => {
    setCapacity(count);
  }, [hotel]);

  if(hotel && isNaN(capacity) === false) {
    return (
      <>
        <GrandLetter variant='h6'>{hotel.name}</GrandLetter>

        <BoldLetter variant='subtitle' > Tipos de acomodação:</BoldLetter>
        {descriptionString()}        
        <BoldLetter variant='subtitle'>Vagas disponíveis:</BoldLetter>
        <NormalLetter variant='subtitle'>
          {capacity}
        </NormalLetter>
      </>
    );
  }
  return(
    <BoldLetter>Carregando quartos</BoldLetter>
  );
}
const BoldLetter = styled(Typography)`
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #343434;
margin-top: 10px !important;
margin-bottom: 2px !important;
`;

const GrandLetter = styled(Typography)`
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #343434;
margin-bottom: 10px;
margin-top: 10px !important;
`;

const NormalLetter = styled(Typography)`

font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #3C3C3C;
margin-bottom: 14px;
`;
