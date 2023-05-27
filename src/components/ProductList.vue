<template>
<div class="root">
    <ul>
        <li v-for="product in products" :key="product.id">
            <product-item
            @addToBasket="addToBasket"
            :product="product"></product-item>
        </li>
    </ul>
</div>
</template>

<script lang="ts">
import Product from '@/types/Product';
import { defineComponent, PropType } from 'vue';
import ProductItem from './ProductItem.vue';
export default defineComponent({
    name: 'ProductList',
    components: {
        ProductItem
    },
    props: {
        products: Array as PropType<Product[]>
    },
    methods:{
        addToBasket(id: number){
            this.$emit('addToBasket', id)
        }
    }
})
</script>

<style scoped>

ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
li{
    margin-bottom: 30px;
}
</style>
