<script lang="ts">
    const whatsappNumber = '5491112345678';  
    const message = encodeURIComponent('¡Hola! Quiero hacer un pedido 🍔');
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    const randomURL = 'https://www.aplyca.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fc63hsprlvlya%2F1LTUsgksc1ezaj9Wg1DHJG%2Fa9da1829385e2a0de2e5c50cd814e4d3%2F72c58c80-9727-11eb-98b2-f352fded32b9.png&w=2048&q=75'; 

    function shareLink() {
        navigator.clipboard.writeText(randomURL).then(() => {
            alert('¡Link copiado al portapapeles!');
        }).catch(err => {
            console.error('Error al copiar:', err);
        });
    }
</script>

    
    <section class="flex justify-around bg-yellow-300 py-4 text-2xl">

        <a href={whatsappLink} target="_blank" aria-label="WhatsApp" class="hover:scale-110 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 2.002c-5.522 0-10 4.477-10 10 0 1.769.462 3.433 1.34 4.911L2 22l5.233-1.365c1.448.788 3.084 1.198 4.768 1.198 5.523 0 10-4.477 10-10s-4.477-10-10-10zm5.297 14.539c-.225.63-1.311 1.238-1.835 1.312-.471.069-1.054.097-1.696-.105-.39-.123-.89-.29-1.54-.573-2.71-1.175-4.489-4.057-4.623-4.25-.134-.194-1.103-1.468-1.103-2.803s.697-1.986.944-2.25c.247-.263.544-.329.726-.329.182 0 .364.002.524.009.168.008.393-.065.616.472.225.537.763 1.859.83 1.993.068.134.112.292.022.468-.09.176-.135.286-.267.442-.134.157-.283.352-.404.473-.134.134-.273.28-.117.548.156.269.692 1.141 1.487 1.848.901.81 1.66 1.064 1.929 1.187.27.123.428.112.585-.068.157-.179.674-.786.853-1.056.179-.269.358-.224.585-.134.225.09 1.418.669 1.66.79.247.123.412.179.471.28.058.101.058.584-.167 1.214z"/>
            </svg>
        </a>

        <a href="tel:+5491112345678" aria-label="Llamar" class="hover:scale-110 transition">📞</a>

       
        <button on:click={shareLink} aria-label="Compartir" class="hover:scale-110 transition">🔗</button>
    </section>


