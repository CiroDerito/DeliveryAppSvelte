import { writable } from 'svelte/store';
import type { Product } from '$lib/data/menuData';

type CartItem = Product & { quantity: number };

export const cart = writable<CartItem[]>([]);

export function addToCart(product: Product) {
    cart.update(items => {
        const existing = items.find(item => item.id === product.id);
        if (existing) {
            return items.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            return [...items, { ...product, quantity: 1 }];
        }
    });
}

export function removeFromCart(product: Product) {
    cart.update(items => {
        return items
            .map(item =>
                item.id === product.id && item.quantity > 0
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter(item => item.quantity > 0);
    });
}
