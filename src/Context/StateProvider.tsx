import { createContext, useContext, useState } from 'react';


export interface Item  {
    patient_id: string;
    patient_name: string;
    gender: string;
    prediction: string;
    image_path: string;
}

export interface ResultsContextType {
    items: Item[];
    addItem: (item: Item) => void;
  }




export const ResultsContext = createContext<ResultsContextType | null>(null);


export const ItemsProvider: React.FC = ({ children }) => {

    const [items, setItems] = useState<Item[]>([]);
    const [resultReady, setResultReady] = useState(false);

  
    const addItem = (item: Item) => {
      setItems((prevItems) => [...prevItems, item]);
    };
  
    return (
      <ResultsContext.Provider value={{ items, addItem }}>
        {children}
      </ResultsContext.Provider>
    );
};