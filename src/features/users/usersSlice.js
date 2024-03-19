import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', name: 'Mary Loi Yves Ricalde' },
  { id: '1', name: 'Mikhaela Janna Lim' },
  { id: '2', name: 'Gweneth Apuli' },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export default userSlice.reducer;