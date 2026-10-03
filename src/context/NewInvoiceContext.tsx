import { useContext, createContext, type ReactNode, useState } from "react";

interface States {
  address: string;
  setAdress: (adress: string) => void;
  city: string;
  setCity: (city: string) => void;
  post: string;
  setPost: (post: string) => void;
  country: string;
  setCountry: (country: string) => void;
  clientName: string;
  setClientName: (clientName: string) => void;
  clientEmail: string;
  setClientEmail: (clientEmail: string) => void;
  clientCity: string;
  setClientCity: (clientCity: string) => void;
  clientPost: string;
  setClientPost: (clientPost: string) => void;
  clientCountry: string;
  setClientCountry: (clientCountry: string) => void;
  date: string;
  setDate: (date: string) => void;
  payment: string;
  setPayment: (payment: string) => void;
  project: string;
  setProject: (project: string) => void;
  itemName: string;
  setItemName: (itemName: string) => void;
  quantity: string;
  setQuantity: (quantity: string) => void;
  price: string;
  setPrice: (price: string) => void;
  clientAddress: string;
  setClientAddress: (clientAddress: string) => void;
  total: number;
  setTotal: (total: number) => void;
  checked: string;
  setChecked: (checked: string) => void;
}

const newInvoice = createContext<States | null>(null);

interface NewInvoiceProviderProps {
  children: ReactNode;
}

export const NewInvoiceProvider = ({ children }: NewInvoiceProviderProps) => {
  const [address, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [post, setPost] = useState("");
  const [country, setCountry] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [clientPost, setClientPost] = useState("");
  const [clientCountry, setClientCountry] = useState("");
  const [date, setDate] = useState("");
  const [payment, setPayment] = useState("Net 30 Days");
  const [project, setProject] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [total, setTotal] = useState(0);
  const [checked, setChecked] = useState("");

  return (
    <newInvoice.Provider
      value={{
        address,
        setAdress,
        city,
        setCity,
        post,
        setPost,
        country,
        setCountry,
        clientName,
        setClientName,
        clientCity,
        setClientCity,
        clientPost,
        setClientPost,
        clientCountry,
        setClientCountry,
        date,
        setDate,
        payment,
        setPayment,
        project,
        setProject,
        itemName,
        setItemName,
        quantity,
        setQuantity,
        price,
        setPrice,
        clientEmail,
        setClientEmail,
        clientAddress,
        setClientAddress,
        total,
        setTotal,
        checked,
        setChecked,
      }}
    >
      {children}
    </newInvoice.Provider>
  );
};

export const useNewInvoice = () => {
  const context = useContext(newInvoice);

  if (!context) {
    throw new Error("useNewInvoice must be used inside NewInvoiceProvider");
  }

  return context;
};
