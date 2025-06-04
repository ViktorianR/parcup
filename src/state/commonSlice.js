import { createSlice } from '@reduxjs/toolkit'

import parkImage from '@assets/items/park.jpg'
import dafiImage from '@assets/items/dafi.jpg'
import operaImage from '@assets/items/opera.jpg'

const initialState = {
  pageIndex: 0,
  parks: [
    {
        id: 1,
        name: 'Apollo Mall',
        address: 'Dnipro, Titova st. 36',
        image: parkImage,
        spaces: {
            "01": {
                id: 1,
                booked: false,
                price: 100,
                busy: true,
            },
            "02": {
                id: 2,
                booked: false,
                price: 100,
                busy: false,
            },
            "03": {
                id: 3,
                booked: false,
                price: 100,
                busy: false,
            },
            "04": {
                id: 4,
                booked: false,
                price: 100,
                busy: false,
            },
            "05": {
                id: 5,
                booked: false,
                price: 100,
                busy: false,
            },
            "06": {
                id: 6,
                booked: false,
                price: 100,
                busy: false,
            },
            "07": {
                id: 7,
                booked: false,
                price: 100,
                busy: false,
            },
            "08": {
                id: 8,
                booked: false,
                price: 100,
                busy: false,
            },
            "09": {
                id: 9,
                booked: false,
                price: 100,
                busy: false,
            },
            "10": {
                id: 10,
                booked: false,
                price: 100,
                busy: false,
            },
            "11": {
                id: 11,
                booked: false,
                price: 100,
                busy: true,
            },
            "12": {
                id: 12,
                booked: false,
                price: 100,
                busy: false,
            },
            "13": {
                id: 13,
                booked: false,
                price: 100,
                busy: false,
            },
            "14": {
                id: 14,
                booked: false,
                price: 100,
                busy: false,
            },
        }
    },
    {
        id: 2,
        name: 'Dafi',
        address: 'Dnipro, Zorianiy bulvar 1A',
        image: dafiImage,
        spaces: {
            "01": {
                id: 1,
                booked: true,
                price: 100,
                busy: true,
            },
            "02": {
                id: 2,
                booked: false,
                price: 100,
                busy: true,
            },
            "03": {
                id: 3,
                booked: false,
                price: 100,
                busy: true,
            },
            "04": {
                id: 4,
                booked: false,
                price: 100,
                busy: true,
            },
            "05": {
                id: 5,
                booked: false,
                price: 100,
                busy: true,
            },
            "06": {
                id: 6,
                booked: false,
                price: 100,
                busy: false,
            },
            "07": {
                id: 7,
                booked: false,
                price: 100,
                busy: false,
            },
            "08": {
                id: 8,
                booked: true,
                price: 100,
                busy: false,
            },
            "09": {
                id: 9,
                booked: false,
                price: 100,
                busy: true,
            },
            "10": {
                id: 10,
                booked: false,
                price: 100,
                busy: false,
            },
            "11": {
                id: 11,
                booked: false,
                price: 100,
                busy: false,
            },
            "12": {
                id: 12,
                booked: false,
                price: 100,
                busy: false,
            },
            "13": {
                id: 13,
                booked: false,
                price: 100,
                busy: false,
            },
            "14": {
                id: 14,
                booked: false,
                price: 100,
                busy: false,
            },
        }
    },
    {
        id: 3,
        name: 'Opera',
        address: 'Dnipro, Yavornitskogo st. 72a',
        image: operaImage,
        spaces: {
            "01": {
                id: 1,
                booked: false,
                price: 100,
                busy: false,
            },
            "02": {
                id: 2,
                booked: false,
                price: 100,
                busy: false,
            },
            "03": {
                id: 3,
                booked: false,
                price: 100,
                busy: false,
            },
            "04": {
                id: 4,
                booked: false,
                price: 100,
                busy: false,
            },
            "05": {
                id: 5,
                booked: false,
                price: 100,
                busy: false,
            },
            "06": {
                id: 6,
                booked: false,
                price: 100,
                busy: false,
            },
            "07": {
                id: 7,
                booked: false,
                price: 100,
                busy: false,
            },
            "08": {
                id: 8,
                booked: false,
                price: 100,
                busy: false,
            },
            "09": {
                id: 9,
                booked: false,
                price: 100,
                disabled: false,
            },
            "10": {
                id: 10,
                booked: false,
                price: 100,
                busy: false,
            },
            "11": {
                id: 11,
                booked: false,
                price: 100,
                busy: false,
            },
            "12": {
                id: 12,
                booked: false,
                price: 100,
                busy: false,
            },
            "13": {
                id: 13,
                booked: false,
                price: 100,
                busy: false,
            },
            "14": {
                id: 14,
                booked: false,
                price: 100,
                busy: false,
            },
        }
    },
  ],
  park: null,
  bookCandidate: null,
  spaceToPay: null,
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setPageIndex: (state, action) => {
      state.pageIndex = action.payload
    },
    bookSpace: (state, action) => {
        const targetPark = state.parks.find(park => park.id === action.payload.parkID)
        const targetSpace = targetPark.spaces[action.payload.id]

        targetSpace.booked = true
        state.park = targetPark
    },
    setBookCandidate: (state, action) => {
        const targetPark = state.parks.find(park => park.id === action.payload.parkID)
        const targetSpace = targetPark.spaces[action.payload.id]

        state.bookCandidate = targetSpace
    },
    clearBookCandidate: (state) => {
        state.bookCandidate = null
    },
    setPark: (state, action) => {
        const targetPark = state.parks.find(park => park.id === action.payload.id)

        state.park = targetPark
        state.pageIndex = 1
    },
    setSpaceToPay: (state) => {
        state.spaceToPay = state.bookCandidate
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    setPageIndex, 
    bookSpace, 
    setPark,
    setBookCandidate,
    clearBookCandidate,
    setSpaceToPay,
} = commonSlice.actions

export default commonSlice.reducer