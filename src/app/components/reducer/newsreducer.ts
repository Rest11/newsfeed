import { createSlice } from '@reduxjs/toolkit';
import { newslist } from '../Lists/newslist';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../store';


// interface Inews {
//   title: string,
//   imageURL: any,
//   fullNews: any,
//   isBigNews: boolean,
//   id: string,
//   dateOfWriting: Date,
//   tag: string
// }

const newsSlicer = createSlice({
  name: 'news',
  initialState: newslist,
  reducers: {
  }
});

export const newsReducer = newsSlicer.reducer;

export const getNews = (state: RootState) => state.news;