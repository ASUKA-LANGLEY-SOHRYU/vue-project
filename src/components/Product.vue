<template>
<div class="root">
    <h1>{{ product.title }}</h1>
    <p>{{ product.image }}</p>
    <p>{{ product.description }}</p>
</div>
</template>

<script lang="ts">
import Product from '@/types/Product';
import { defineComponent } from 'vue';
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const id = computed(() => route.params.id)
export default defineComponent({
    name: 'Product',
    data() {
        return {
            product: {} as Product
        }
    },
    mounted(){
        fetch(`https://fakestoreapi.com/products/${id}`)
                    .then(res=>res.json())
                    .then(json=> this.product = json)
    }
})
</script>

<style>

</style>
