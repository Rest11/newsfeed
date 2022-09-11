import { createSlice } from '@reduxjs/toolkit';
import { newslist } from '../Lists/newslist';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../store';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})


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
    editNews(state, action) {
      return [...state.map(news => {
        if (news.id === action.payload.id) {
          return action.payload;
        }

        return news;
      })];
  },
  addNews(state, action) {
    return [{...action.payload, id: uuidv4()
    }, ...state];
}
}
});

export const { editNews, addNews } = newsSlicer.actions;

export const newsReducer = newsSlicer.reducer;

export const getNews = (state: RootState) => state.news;

