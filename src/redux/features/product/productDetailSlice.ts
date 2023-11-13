import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../store'

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

interface initState {
    posts: {
        userId: number
        id: number
        title: string
        body: string
    }[]
    status: string
    error: string | null
}

const initState: initState = { 
    posts: [],
    status: 'idle',
    error: null
 }

createAsyncThunk('data/fetch', async () => {
    try {
        const getData = await fetch(POSTS_URL)
        const response = await getData.json()
        console.log(response)
    } catch (error) {
        console.error(error)
    }
})

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState: initState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productDetailSlice.actions
export const selectCount = (state: RootState) => state.productDetail.value

export default productDetailSlice.reducer