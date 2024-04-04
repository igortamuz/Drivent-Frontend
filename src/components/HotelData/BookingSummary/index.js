import { styled, Typography } from '@material-ui/core';
import HotelIncluded from './HotelIncluded';

export default function BookingSummary({ booking }) {
  return(
    <>
      <StyledTypography color={'textSecondary'}>Você já escolheu seu quarto:</StyledTypography>
      <HotelIncluded booking = {booking}/>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;
