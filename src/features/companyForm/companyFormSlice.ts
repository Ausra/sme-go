import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { fetchCompany } from './companyFormAPI';

export interface CompanyFormState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CompanyFormState = {
  value: 0,
  status: 'idle',
};

export const companyAsync = createAsyncThunk(
  'company/fetchCompany',
  async (amount: number) => {
    const response = await fetchCompany(amount);
    return response.data ;
  },
);

export const companyFormSlice = createSlice({
  name: 'companyForm',
  initialState,
  reducers: {
    clickNext: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(companyAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(companyAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(companyAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { clickNext } = companyFormSlice.actions;

export const selectCount = (state: RootState) => state.companyForm.value;

export default companyFormSlice.reducer;
