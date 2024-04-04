import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Cards from './Cards';

export default function AvailableTickets() {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: 'calc(100% - 102px)',
      }}
    >
      <StyledTypography variant="body1" color="textSecondary">
        {'Primeiro, escolha sua modalidade de ingresso'}
      </StyledTypography>
      <Cards />
    </Box>
  );
}
const StyledTypography = styled(Typography)`
  margin-bottom: 5px !important;
`;
