import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchTypes } from '../../types/search';

interface ISearchInput {
  searchType: SearchTypes | '';
  term: string;
}

interface IState {
  items: string[];
  searchInput: ISearchInput;
}

const initialState: IState = {
  items: [],
  searchInput: {
    searchType: '',
    term: '',
  },
};

const selectionSlice = createSlice({
  name: 'selectionSlice',
  initialState,
  reducers: {
    select: (store, action: PayloadAction<string>) => {
      store.items.push(action.payload);
    },
    unselect: (store, action: PayloadAction<number>) => {
      store.items.splice(action.payload, 1);
    },
    clear: (store) => {
      store.items = [];
    },
    setTerm: (store, action: PayloadAction<ISearchInput>) => {
      store.searchInput = action.payload;
    },
  },
});

export const { select, unselect, setTerm, clear } = selectionSlice.actions;
export default selectionSlice.reducer;
