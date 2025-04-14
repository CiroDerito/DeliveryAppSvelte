<script lang="ts">
    import DropdownSection from './DropdownSection.svelte';
    import { menuData } from '$lib/data/menuData';
</script>
<div class="section">
    <section class="p-4 mx-auto">
        {#each menuData as category}
            <DropdownSection title={category.title} items={category.items} />
        {/each}
    </section>
    
</div>
<style>
    div.section {
        background-size: cover;
        background-position: center;
        padding: 20px;
        
    }
</style>