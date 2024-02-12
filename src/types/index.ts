export type LotStatus = 'wait' | 'active' | 'closed';

export interface IAuction {
    status: LotStatus;
    datetime: string;
    price: number;
    minPrice: number;
    history?: number[];
}

// export interface IProductItem {
//     id: string;
//     title: string;
//     description?: string;
//     image: string;
//     category: string;
//     price: number | null;
// }

export type ILot = ILotItem & IAuction;

export type LotUpdate = Pick<ILot, 'id' | 'datetime' | 'status' | 'price' | 'history'>;

export type IBasketItem = Pick<ILot, 'id' | 'title' | 'price'> & {
    isMyBid: boolean
};

// export interface IAppState {
//     catalog: ILot[];
//     basket: string[];
//     preview: string | null;
//     order: IOrder | null;
// }

// export interface IOrderForm {
//     email: string;
//     phone: string;
//     payment: string;
//     address: string;
//     total: number;
//     items: string[];
// }

// export interface IOrder extends IOrderForm {
//     items: string[]
// }

export type FormErrors = Partial<Record<keyof IOrder, string>>;

export interface IBid {
    price: number
}

// export interface IOrderResult {
//     id: string;
// }



// Компоненты представления

export interface IPage {
    counter: number;
    catalog: HTMLElement[];
    locked: boolean;
}

export interface ICard {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    price: number | null;
    // count?: string;
    // buttonText?: string;
}

interface ISuccess {
    id: string;
    total: number | null;
}


interface IFormState {
    valid: boolean;
    errors: string[];
}