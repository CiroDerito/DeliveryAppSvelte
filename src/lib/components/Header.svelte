<script lang="ts">
    export let title = 'Tu menú de comida 🍔';
    let menuOpen = false;
    let selectedBranch = ''; 

    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    function confirmOrder() {
        if (!selectedBranch) {
            alert('Selecciona una sucursal antes de confirmar tu pedido.');
            return;
        }

        const whatsappNumber = '5491157937613';  
        const message = encodeURIComponent(`Hola! Quiero confirmar mi pedido para retirar en ${selectedBranch}`);
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }
</script>

<header class="flex justify-between items-center p-4 shadow-md sticky top-0 z-50 backdrop-blur-md my-nav">
    <div class="flex items-center gap-2">
        <img src="/logoNavbar.png" alt="Logo" class="h-11 w-11 rounded-full" />
        <h1 class="font-bold text-xl">{title}</h1>
    </div>

    <div class="relative">
        <button on:click={toggleMenu} class="text-3xl">☰</button>

        {#if menuOpen}
            <div class="menu">
                <div class="mb-4">
                    <label class="flex items-center gap-2">
                        <input type="radio" bind:group={selectedBranch} value="San Martín 864" />
                        <div>
                            <p class="font-semibold text-lg">San Martín 864</p>
                            <p class="text-sm text-gray-700 border-b">Horario: 9:00 a 23:00</p>
                        </div>
                    </label>
                </div>
                <div class="mb-4">
                    <label class="flex items-center gap-2">
                        <input type="radio" bind:group={selectedBranch} value="Rivadavia 505" />
                        <div>
                            <p class="font-semibold text-lg">Rivadavia 505</p>
                            <p class="text-sm text-gray-700 border-b">Horario: 9:00 a 23:00</p>
                        </div>
                    </label>
                </div>
                <div class="mb-4">
                    <label class="flex items-center gap-2">
                        <input type="radio" bind:group={selectedBranch} value="Corrientes 268" />
                        <div>
                            <p class="font-semibold text-lg">Corrientes 268</p>
                            <p class="text-sm text-gray-700 border-b">Horario: 9:00 a 23:00</p>
                        </div>
                    </label>
                </div>

                <button 
                    class="w-full bg-green-500 text-white p-2 rounded mt-4 hover:bg-green-600 transition"
                    on:click={confirmOrder}
                >
                    Confirmar Pedido
                </button>
            </div>
        {/if}
    </div>
</header>

<style>
    .my-nav {
        background-color: rgba(255, 208, 0, 0.5); 
        backdrop-filter: blur(2px);
    }
    .menu {
        position: absolute;
        right: 0;
        top: 100%;
        margin-top: 10px;
        background-color: rgba(255, 213, 5, 0.928); 
        backdrop-filter: blur(2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 20px;
        width: 250px;
        transform: scale(0.9);
        opacity: 0;
        animation: fadeInScale 0.3s forwards;
    }

    @keyframes fadeInScale {
        0% {
            opacity: 0;
            transform: scale(0.9);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
</style>
