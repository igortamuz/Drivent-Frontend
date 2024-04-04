import { Box, Typography } from '@material-ui/core';
import useHotel from '../../../hooks/api/useHotel';
import useToken from '../../../hooks/useToken';
import HotelRooms from './HotelRoom';
import styled from 'styled-components';

export default function HotelBox(props) {
  const user = useToken();
  const data = useHotel(user).hotel;
  const { setHotelId, hotelId } = props;

  function chooseHotel(id) {
    if (hotelId === null) {
      setHotelId(id);
    } else if (hotelId === id) {
      setHotelId(null);
    } else if (hotelId !== id && hotelId !== null) {
      setHotelId(id);
    }
  }

  if(data) {
    return (
      <>
        <Title variant="h6" color="textSecondary" >Primeiro, escolha seu hotel</Title>
        <HotelBoxContainer>
          {data.map((hotel) => {
            return (
              <OuterContainer onClick={() => chooseHotel(hotel.id)} key={hotel.id} className={hotelId === hotel.id ? true : false}>
                <InnerContainer variant='h6'>
                  <figure >
                    <img className="hotelFigure" src={hotel.image} alt={hotel.name} ></img>
                  </figure>
                </InnerContainer>
                <HotelRooms id = {hotel.id} user = {user}></HotelRooms>
              </OuterContainer>

            );
          })
          }
        </HotelBoxContainer>
      </>
    );
  }

  return (
    <>
      <H2>Carregando Hotéis</H2>
    </>);
};

const HotelBoxContainer = styled(Box)`
display: flex;
flex-direction: row;
width: 100%;
flex-wrap: wrap;
`;

const OuterContainer = styled(Box)`
display: flex;
flex-direction: column;
width: 196px;
height: 264px;
${({ className }) => className? 'background-color: #ffeed2': 'background-color: #EBEBEB'};
border-radius: 8px;
margin-right: 20px;
padding-left: 15px;
padding-top: 15px;
padding-right: 15px;
margin-bottom: 15px;
`;

const InnerContainer = styled(Typography)`
width: 168px;
height: 109px;
background-color: #E5E5E5;
margin-right: 20px;
border-radius: 5px;
margin-bottom: 10px;

img {
  width: 166px;
  height: 107px;
  overflow: hidden;
  border-radius: 5px;
}

`;

const H2 = styled.h2`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #8E8E8E;
margin-bottom: 18px;
`;

const Title = styled(Typography)`
  margin-top: 25px !important;
  margin-bottom: 10px !important;
`;
