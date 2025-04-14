<section class="h-72 bg-cover bg-center">
    <div class="h-full w-full bg-black bg-opacity-50 flex justify-center items-center hero">
        <h2 class="text-white text-3xl font-bold">¡Bienvenido a Tu menú!</h2>
    </div>
</section>

<style>
   .hero{
    background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero.jpg');
    background-size: cover;
    background-position: center;

    z-index: -1;
   }
    .hero h2 {
        font-size: 2rem;
        text-align: center;
        color: rgb(255, 254, 254);
        margin-top: 20px;
    }
    .hero h2:hover {
        color: yellow;
        transition: color 0.3s ease;
    }  
</style>