import { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';

import { IProduct } from '../../types/product';
import { select } from '../../redux/reducers/selection';

type Props = { product: IProduct };

const ProductItem: FC<Props> = ({
  product: { title, image, category, price },
}): ReactElement => {
  const dispatch = useDispatch();

  return (
    <ListItem alignItems="flex-start" disablePadding>
      <ListItemButton
        role={undefined}
        onClick={() => {
          dispatch(select(title || 'product'));
        }}
        dense
      >
        <ListItemAvatar>
          <Avatar alt={title || 'avatar'} src={image} />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {category}
              </Typography>
              {`    ${price} $`}
            </>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default ProductItem;
