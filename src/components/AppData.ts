// import _ from "lodash";
// import {dayjs, formatNumber} from "../utils/utils";

import {Model} from "./base/Model";
import { IAppState, IOrderForm, FormErrors, IDeliveryForm, IContactsForm, ICard } from "../types";

export type CatalogChangeEvent = {
    catalog: ICard[]
};

export class AppState extends Model<IAppState> {
    basket: ICard[] = [];
    catalog: ICard[];
    order: IOrderForm = {
        payment: 'online',
        address: '',
        email: '',
        phone: '',
        total: 0,
        items: [],
    };
    preview: string | null;
    formErrors: FormErrors = {};


    addToBasket(item: ICard) {
        if (this.basket.indexOf(item) === -1) {
            this.basket.push(item);
            this.emitChanges('count:changed', this.basket);
            this.emitChanges('basket:changed', this.basket);
        }
    }

    removeFromBasket(item: ICard) {
        const index = this.basket.indexOf(item);
        if (index !== -1) {
            this.basket.splice(index, 1);
        }
    }


    clearBasket() {
        this.basket = [];
        this.emitChanges('count:changed', this.basket);
        this.emitChanges('basket:changed', this.basket);
    }



    setDelivery(field: keyof IDeliveryForm, value: string) {
        this.order[field] = value;

        if (this.validateDelivery()) {
            this.events.emit('delivery:ready', this.order);
        }
    }

    setContacts(field: keyof IContactsForm, value: string) {
        this.order[field] = value;

        if (this.validateContacts()) {
            this.events.emit('contacts:ready', this.order);
        }
    }


    setCatalog(items: ICard[]) {
        this.catalog = items;
        // .map(item => new ProductItem(item, this.events));
        this.emitChanges('items:changed', { catalog: this.catalog });
    }

    setPreview(item: ICard) {
        this.preview = item.id;
        this.emitChanges('preview:changed', item);
    }

    // getActiveLots(): LotItem[] {
    //     return this.catalog
    //         .filter(item => item.status === 'active' && item.isParticipate);
    // }

    // getClosedLots(): LotItem[] {
    //     return this.catalog
    //         .filter(item => item.status === 'closed' && item.isMyBid)
    // }

    // setOrderField(field: keyof IOrderForm, value: string) {
    //     this.order[field] = value;

    //     if (this.validateOrder()) {
    //         this.events.emit('order:ready', this.order);
    //     }
    // }

    // validateOrder() {
    //     const errors: typeof this.formErrors = {};
    //     if (!this.order.email) {
    //         errors.email = 'Необходимо указать email';
    //     }
    //     if (!this.order.phone) {
    //         errors.phone = 'Необходимо указать телефон';
    //     }
    //     this.formErrors = errors;
    //     this.events.emit('formErrors:change', this.formErrors);
    //     return Object.keys(errors).length === 0;
    // }

    validateDelivery() {
        const errors: typeof this.formErrors = {};
        if (!this.order.address) {
            errors.address = 'Необходимо указать адрес доставки';
        }
        this.formErrors = errors;
        this.events.emit('formErrors:change', this.formErrors);
        return Object.keys(errors).length === 0;
    }

    validateContacts() {
        const errors: typeof this.formErrors = {};
        if (!this.order.email) {
            errors.email = 'Необходимо указать email';
        }
        if (!this.order.phone) {
            errors.phone = 'Необходимо указать телефон';
        }
        this.formErrors = errors;
        this.events.emit('formErrors:change', this.formErrors);
        return Object.keys(errors).length === 0;
    }
}