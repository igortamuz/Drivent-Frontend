import { Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import useBooking from '../../hooks/api/useBooking';
import useTicket from '../../hooks/api/useTicket';
import HotelBox from '../../pages/Dashboard/Hotel/HotelBox';
import BookingSummary from './BookingSummary/index.js';
import ChangeBookingButton from './BookingSummary/ChangeBookingButton.js';
import HotelNotIncluded from './HotelNotIncluded';
import NoPayment from './NoPayment';
import RoomCards from './RoomCards';

export default function HotelData() {
  const [booked, setBooked] = useState(false);
  const { ticket } = useTicket();
  const { booking } = useBooking();
  const [hotelId, setHotelId] = useState(null);
  const display = {
    true: <>
      <Title variant="h6" color="textSecondary">Ótima pedida! Agora escolha seu quarto:</Title>
      <RoomCards booked={booked} hotelId = {hotelId} /></>,
    false: ''
  };

  if (!ticket || ticket.status !== 'PAID') {
    return (
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <NoPayment />
      </>
    );
  }

  if (!ticket.TicketType.includesHotel) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <HotelNotIncluded />
      </>
    );
  }
  
  if (booking !== null) {
    if(booking === booked) {
      return (
        <>
          <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
          <HotelBox setHotelId = {setHotelId} hotelId = {hotelId}/>
          {display[!!hotelId]}
        </>
      );
    }

    return(
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <BookingSummary booking = {booking}/>
        <ChangeBookingButton booked={booked} booking={booking} setBooked={setBooked}/>
      </>
    );
  }

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <HotelBox setHotelId = {setHotelId} hotelId = {hotelId}/>
      {display[!!hotelId]}

    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
 
`;

const Title = styled(Typography)`
  margin-top: 25px !important;
  margin-bottom: 10px !important;
`;
