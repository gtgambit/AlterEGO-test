import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  auth: { username: string; password: string } | null;
}

export const authInitialState: AuthState = { auth: null };

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    authUser(
      state: AuthState,
      action: PayloadAction<{ username: string; password: string }>
    ): void {
      state.auth = action.payload;
    },
    logOutUser(state: AuthState): void {
      state.auth = null;
    },
  },
});

export const { authUser, logOutUser } = authSlice.actions;

export default authSlice.reducer;
