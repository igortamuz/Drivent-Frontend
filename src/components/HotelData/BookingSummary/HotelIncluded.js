import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../../hooks/useToken';
import useHotelRooms from '../../../hooks/api/useHotelRooms';

export default function HotelIncluded({ booking }) {
  const [data, setData] = useState(null);
  const [amount, setAmount] = useState(null);
  const user = useToken();
  const hotelId = booking.Room.hotelId;
  const hotel = useHotelRooms(user, hotelId);

  useEffect(() => {
    if (hotel.RoomsLoading === false) {
      setData(hotel.rooms);
      if (booking.Room.capacity === 1) {
        setAmount(' (Single)');
      } else if (booking.Room.capacity === 2) {
        setAmount(' (Double)');
      } else if (booking.Room.capacity === 3) {
        setAmount(' (Triple)');
      };
    }
  }, [hotel.RoomsLoading]);

  return (
    data ? <>
      <HotelBoxContainer>
        <OuterContainer>
          <InnerContainer>
            <figure >
              <img className="hotelFigure" src={data.image} alt={'Hotel'} ></img>
            </figure>
          </InnerContainer>
          <StyledTypography variant="body1">
            <ContainerTextArea>
              <ContainerText>{data.name}</ContainerText>
              <Roominfos>{'Quarto reservado'}</Roominfos>
              <Roominfossubtext>{booking.Room.name}{amount}</Roominfossubtext>
              <Roominfos>{'Pessoas no seu quarto'}</Roominfos>
              <Roominfossubtext>{data?.Rooms[data?.Rooms.map(item => item.id).indexOf(booking.Room.id)].Booking.length === 1 ? 
                'Só você.' : 
                `Você e mais ${data?.Rooms[data?.Rooms.map(item => item.id).indexOf(booking.Room.id)].Booking.length - 1}` }
              </Roominfossubtext>
            </ContainerTextArea>
          </StyledTypography>
        </OuterContainer>
      </HotelBoxContainer>
    </> :
      <>
        <H2>Carregando Resumo da reserva.</H2>
      </>
  );
}

const StyledTypography = styled(Typography)`
  max-width: 330px;
  line-height: 1.15rem !important;
`;

const HotelBoxContainer = styled.div`
border: 1px solid black;
display: flex;
justify-content: row;
width: 100%;
flex-wrap: wrap;
border: none;
margin-top: 14px;
`;

const OuterContainer = styled.div`
width: 196px;
height: 264px;
background-color: #FFEED2;
border-radius: 8px;
margin-right: 20px;
padding-left: 15px;
padding-top: 15px;
padding-right: 15px;
margin-bottom: 15px;
`;

const InnerContainer = styled.div`
width: 168px;
height: 109px;
background-color: #E5E5E5;
margin-right: 20px;
border: 1px solid black;
border-radius: 5px;
margin-bottom: 10px;

img {
  width: 166px;
  height: 107px;
  border-radius: 5px;

}

`;

const H2 = styled(Typography)`
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #8E8E8E;
margin-top: 15px !important;
`;

const ContainerTextArea = styled.div`
color: #3C3C3C;
`;

const ContainerText = styled.h3`
font-size: 20px;
`;

const Roominfos = styled.h4`
font-weight: 700;
font-size: 12px;
margin-top: 10px;
`;

const Roominfossubtext = styled.p`
font-size: 12px;
`;

