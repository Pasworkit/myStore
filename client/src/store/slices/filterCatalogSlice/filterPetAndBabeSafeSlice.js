import { createSlice } from '@reduxjs/toolkit';

const filterPetAndBabeSafeSlice = createSlice({
  name: 'petAndBabeSafeFilter',

  initialState: {
    safe: false,
    'not-safe': false,
    isPetAndBabySafe: [],
  },

  reducers: {
    checkedPetAndBabeSafeFilter: (state, action) => {
      if (action.payload.checked && action.payload.name === 'safe') {
        state[action.payload.name] = action.payload.checked;
        state.isPetAndBabySafe.push('true');
      } else {
        state.safe = false;
        state.isPetAndBabySafe = state.isPetAndBabySafe.filter(el => el !== 'true');
      }

      if (action.payload.checked && action.payload.name === 'not-safe') {
        state[action.payload.name] = action.payload.checked;
        state.isPetAndBabySafe.push('false');
      } else {
        state['not-safe'] = false;
        state.isPetAndBabySafe = state.isPetAndBabySafe.filter(el => el !== 'false');
      }
    },

    deletePetAndBabeSafeFilter: (state, action) => {
      state[action.payload.name] = false;
      state.isPetAndBabySafe = state.isPetAndBabySafe.filter(el => el !== action.payload.bool);
    },

    createNewArrIsPetAndBabySafe: (state, action) => {
      if (action.payload === 'true' && state.isPetAndBabySafe.length === 0) {
        state.isPetAndBabySafe.push(action.payload);
        state.safe = true;
      }

      if (action.payload === 'false' && state.isPetAndBabySafe.length === 0) {
        state.isPetAndBabySafe.push(action.payload);
        state['not-safe'] = true;
      }
    },
  },
});

export const { checkedPetAndBabeSafeFilter, deletePetAndBabeSafeFilter, createNewArrIsPetAndBabySafe } = filterPetAndBabeSafeSlice.actions;
export default filterPetAndBabeSafeSlice.reducer;
