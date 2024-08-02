import { signal } from "@angular/core";



export const productsList = [

    {
        name : "HarryPotter 1", quantity : 2, unitPrice : 75,
    },
    {
        name : "HarryPotter 2", quantity : 4, unitPrice : 80,
    },
    {
        name : "HarryPotter 3", quantity : 6, unitPrice : 65,
    },
    {
        name : "HarryPotter 4", quantity : 5, unitPrice : 84,
    },
    {
        name : "HarryPotter 5", quantity : 4, unitPrice : 65,
    },
    {
        name : "HarryPotter 6", quantity : 2, unitPrice : 75,
    },
    {
        name : "HarryPotter 7", quantity : 5, unitPrice : 45,
    },

]

export interface ProductList {
    name:      string;
    quantity:  number;
    unitPrice: number;
}