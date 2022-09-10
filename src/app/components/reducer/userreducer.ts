import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../store';
import { userlist } from '../Lists/userlist';

const userSlicer = createSlice({
  name: 'user',
  initialState: userlist,
  reducers: {
   loggedUser (state, action) {
    return [
      ...state.map(user => {
        if (user.login === action.payload.login) {
          console.log('asd')  
          return {...action.payload, isLogged: true}
        } 
        console.log('asd')   
        return user;
          
      })];      
 
    }
  }
});

export const { loggedUser } = userSlicer.actions;

export const userReducer = userSlicer.reducer;

export const getUser = (state: RootState) => state.user;