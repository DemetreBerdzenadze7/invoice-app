import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: TInputs[] = [];

const inputsSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    submit: {
      prepare(
        id: string,
        address: string,
        city: string,
        post: string,
        country: string,
        clientName: string,
        clientEmail: string,
        clientAddress: string,
        clientCity: string,
        clientPost: string,
        clientCountry: string,
        date: string,
        payment: string,
        project: string,
        itemID: string,
        itemName: string,
        quantity: string,
        price: string,
      ) {
        return {
          payload: {
            inputs: {
              id,
              address,
              city,
              post,
              country,
              clientName,
              clientEmail,
              clientAddress,
              clientCity,
              clientPost,
              clientCountry,
              date,
              payment,
              project,
            },
            itemLists: [{ itemID, itemName, quantity, price }],
          },
        };
      },
      reducer(state, action: PayloadAction<TInputs>) {
        state.push(action.payload);
      },
    },
  },
});

export const { submit } = inputsSlice.actions;

export default inputsSlice.reducer;
