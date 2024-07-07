interface IResgisterUser {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}

interface ICredentials {
    password: string;
    id: number;
}

interface IResgisterUserResponse {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    rol: string;
    credential: ICredentials;
}

interface ILoginUser {
    email: string;
    password: string;
} 

interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    password: string;
    orders?: number[]
}

interface ILoginUserResponse {
    login: boolean;
    user: Partial<IUser> | null;
    token: string;
} 
interface ICreateOrder {
    userId: number;
    products: number[];
}

interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
}

interface IProductListProps {
    products: IProduct[]
}

interface IProductProps {
product: IProduct
}

export type {
    ICreateOrder,
    ILoginUser,
    IProduct,
    IProductListProps,
    ICredentials,
    ILoginUserResponse,
    IResgisterUser,
    IResgisterUserResponse,
    IUser,
    IProductProps 
}