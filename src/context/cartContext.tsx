import {ReactNode, createContext, useContext,useState} from 'react'

interface ICartContext {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    product: any | [],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addToCart: (cart:any) => void
}

const CartContext = createContext<ICartContext>({
    product: [],
    addToCart: () => {},
})

interface ICartContextProvider{
    children: ReactNode
}

export const CartContextProvider = ({children}:ICartContextProvider) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [product, setProduct] = useState<any>([])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const addToCart = (cart:any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setProduct((prevState: any) => [...prevState, cart])
    }
    return (<CartContext.Provider value={{product, addToCart}}>{children}</CartContext.Provider>)
}


export const useCartContext = () => {
    const context = useContext(CartContext);
    return context;
}