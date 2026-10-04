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
        total: number,
        status: TStatus,
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
            itemLists: [{ itemID, itemName, quantity, price, total }],
            status,
          },
        };
      },
      reducer(state, action: PayloadAction<TInputs>) {
        state.push(action.payload);
      },
    },
    markAsPaid(state, action: PayloadAction<string>) {
      const invoice = state.find(
        (invoice) => invoice.inputs.id === action.payload,
      );

      if (invoice) {
        invoice.status = "paid";
      }
    },
    removeInvoice(state, action: PayloadAction<string>) {
      return state.filter((invoice) => invoice.inputs.id !== action.payload);
    },
    changeInvoice(state, action: PayloadAction<TInputs>) {
      return state.map((invoice) =>
        invoice.inputs.id === action.payload.inputs.id
          ? action.payload
          : invoice,
      );
    },
  },
});

export const { submit, markAsPaid, removeInvoice, changeInvoice } = inputsSlice.actions;

export default inputsSlice.reducer;
