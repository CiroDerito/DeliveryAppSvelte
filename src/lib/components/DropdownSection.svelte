<script lang="ts">
    import { slide } from 'svelte/transition';
    import type { Product } from '$lib/data/menuData';
    import { addToCart, removeFromCart, cart } from '$lib/stores/cartStore';

    export let title: string;
    export let items: Product[] = [];

    let open = false;

    $: currentCart = $cart;
</script>

<div class="my-4 border rounded-lg shadow-md overflow-hidden">
    <button 
        class="flex justify-between w-full p-4 bg-yellow-300 font-semibold text-lg hover:bg-yellow-400 transition"
        on:click={() => open = !open}
    >
        {title}
        <span>{open ? '−' : '+'}</span>
    </button>

    {#if open}
        <div class="p-4 bg-white" transition:slide>
            {#each items as item}
                <div class="flex items-center justify-between border-b py-2 last:border-b-0">
                    <div class="flex items-center gap-3">
                        <img src={`/products/${item.id}.jpg`} alt={item.name} class="h-33 w-33 rounded object-cover" />
                        <div>
                            <p>{item.name}</p>
                            <p class="text-sm text-gray-600">${item.price}</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-2">
                        <button 
                            on:click={() => removeFromCart(item)} 
                            class="px-2 py-1 bg-red-500 text-white rounded disabled:opacity-50"
                            disabled={!currentCart.find((p: { id: number; }) => p.id === item.id)?.quantity}
                        >−</button>

                        <span>
                            {currentCart.find((p: { id: number; }) => p.id === item.id)?.quantity || 0}
                        </span>

                        <button 
                            on:click={() => addToCart(item)} 
                            class="px-2 py-1 bg-green-500 text-white rounded"
                        >+</button>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div>
