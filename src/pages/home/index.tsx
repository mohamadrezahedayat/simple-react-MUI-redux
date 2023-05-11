import { FC, ReactElement } from 'react';
import { Box, Grid, Button } from '@mui/material';

import ContentWrapper from '../../components/content-wrapper';
import { SearchTypes } from '../../types/search';
import Products from '../../components/products';
import Users from '../../components/users';
import Selection from '../../components/selection';
import { useDispatch } from 'react-redux';
import { clear } from '../../redux/reducers/selection';

const Home: FC = (): ReactElement => {
  const dispatch = useDispatch();
  return (
    <Box position="relative">
      <Grid
        container
        spacing={2}
        paddingX={1}
        overflow={'auto'}
        position="absolute"
        sx={{
          position: 'absolute',
          top: '45px',
        }}
      >
        {/* section 1 : users */}
        <ContentWrapper
          searchType={SearchTypes.USERS}
          ActionComponent={
            <Button
              variant="contained"
              fullWidth
              onClick={() => dispatch(clear())}
            >
              CLEAR LIST
            </Button>
          }
        >
          <Users />
        </ContentWrapper>

        {/* section 2 : products */}
        <ContentWrapper
          searchType={SearchTypes.PRODUCTS}
          ActionComponent={
            <Button
              variant="contained"
              fullWidth
              onClick={() => dispatch(clear())}
            >
              CLEAR LIST
            </Button>
          }
        >
          <Products />
        </ContentWrapper>

        {/* section 3 - selected items */}
        <ContentWrapper>
          <Selection />
        </ContentWrapper>
      </Grid>
    </Box>
  );
};

export default Home;
