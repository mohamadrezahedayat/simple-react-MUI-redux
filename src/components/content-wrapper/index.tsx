import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  InputAdornment,
  TextField,
} from '@mui/material';
import { FC, ReactElement } from 'react';
import CardActions from '@mui/material/CardActions';
import SearchIcon from '@mui/icons-material/Search';

import { SearchTypes } from '../../types/search';
import { useDispatch } from 'react-redux';
import { setTerm } from '../../redux/reducers/selection';

type props = {
  searchType?: SearchTypes;
  ActionComponent?: ReactElement;
  children?: ReactElement;
};

const Section: FC<props> = ({
  searchType,
  ActionComponent = null,
  children = null,
}): ReactElement => {
  const dispatch = useDispatch();
  return (
    <Grid item xs={12} md={4} sx={{ height: 'calc(100vh - 120px)' }} p={1}>
      <Card sx={{ height: '100%' }}>
        <CardHeader
          title={
            searchType && (
              <TextField
                fullWidth
                label="Search"
                id="search"
                onChange={(e) => {
                  dispatch(setTerm({ searchType, term: e.target.value }));
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )
          }
        />
        <CardContent
          sx={{ height: ActionComponent ? '70%' : '85%', overflowY: 'auto' }}
        >
          {children}
        </CardContent>
        <CardActions>{ActionComponent}</CardActions>
      </Card>
    </Grid>
  );
};

export default Section;
