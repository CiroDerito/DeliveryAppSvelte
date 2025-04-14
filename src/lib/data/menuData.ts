export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface Category {
    title: string;
    items: Product[];
}

export const menuData: Category[] = [
    {
        title: 'Destacados',
        items: [
            { id: 1, name: 'Combo Cerveza + Picada', price: 13500 },
            { id: 2, name: 'Promo Super Burger + Gaseosa', price: 12200 }
        ]
    },
    {
        title: 'Hamburguesas',
        items: [
            { id: 3, name: 'Super Doble Burger', price: 9400 },
            { id: 4, name: 'Cheddar Bacon Burger', price: 9600 }
        ]
    },
    {
        title: 'Pizzas',
        items: [
            { id: 5, name: 'Muzzarella', price: 11000 },
            { id: 6, name: 'Super Especial', price: 12300 }
        ]
    },
    {
        title: 'Copetin',
        items: [
            { id: 7, name: 'Papas Super', price: 8800 },
            { id: 8, name: 'Aros de Cebolla', price: 8600 }
        ]
    },
    {
        title: 'Picadas',
        items: [
            { id: 9, name: 'Picada Super Premium', price: 15500 },
            { id: 10, name: 'Picada Clásica', price: 9200 }
        ]
    }
];
