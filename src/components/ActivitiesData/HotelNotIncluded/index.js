import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function HotelNotIncluded() {
  return (
    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100% - 102px)' }}>
      <StyledTypography variant="body1" color="textSecondary" align="center">
        {'Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.'}
      </StyledTypography>
    </Box>
  );
}

const StyledTypography = styled(Typography)`
  max-width: 330px;
  line-height: 1.15rem !important;
`;
