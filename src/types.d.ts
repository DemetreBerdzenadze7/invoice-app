interface IInputs {
  id: string;
  address: string;
  city: string;
  post: string;
  country: string;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  clientCity: string;
  clientPost: string;
  clientCountry: string;
  date: string;
  payment: string;
  project: string;
}

interface IItemLists {
  itemID: string;
  itemName: string;
  quantity: string;
  price: string;
  total: number;
}

type TStatus = "paid" | "pending" | "draft";

type TInputs = {
  inputs: IInputs;
  itemLists: IItemLists[];
  status: TStatus;
};

type TItemForm = Pick<IItemLists, "itemName" | "quantity" | "price">;

type TInvoiceForm = Omit<IInputs, "id"> & { items: TItemForm[] };
