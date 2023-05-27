<template>
<div class="root">
    <div class="content">
        <label class="find__label">
            <span>Поиск: </span>
            <input v-model="searchText"/>
            <span>Сортировать по: </span>
            <button @click="orderedValue = 'price'">Цене</button>
            <button @click="orderedValue = 'title'">Алфавиту</button>
        </label>
        <product-list @addToBasket="addToBasket" class="product_list" 
        :products="getCurrentPage">
        </product-list>
        <div class="pages">
            <button 
            v-for="num in getCurrentRangeOfPages" :key="num"
            @click="page.current = num - 1">
                {{ num }}
            </button>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductList from '@/components/ProductList.vue'
import Product from '@/types/Product';
import store from '@/store';
export default defineComponent({
    name: 'MainComp',
    store,
    components:{
        ProductList
    },
    data() {
        return {
            searchText: '',
            products: [] as Product[],
            searchedAndOrderedProducts: [] as Product[],
            orderedValue: 'title' as OrderType,
            page: {
                current: 0,
                last: 0,
                maxItems: 5
            }
        }
    },
    methods: {
        addToBasket(id: number){
            this.$emit('addToBasket', id)
        },
        getSearchedProducts(products: Product[], searchText: string): Product[] {
            return products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()))
        },
        getOrderedProducts(products: Product[], orderedValue: OrderType): Product[] {
            return [...products].sort((a, b) => {
                if (orderedValue == 'title')
                    return a[orderedValue].localeCompare(b[orderedValue])
                return a[orderedValue] - b[orderedValue]
            })
        },
        range(start: number, end: number): number[] {
            var ans = [];
            for (let i = start; i <= end; i++) {
                ans.push(i);
            }
            return ans;
        }
    },
    computed: {
        getSearchedAndOrderedProducts(): Product[]{
            const searchedProducts = this.getSearchedProducts(this.products, this.searchText)
            const searchedAndOrderedProducts = this.getOrderedProducts(searchedProducts, this.orderedValue)
            this.page.last = Math.ceil(searchedAndOrderedProducts.length / this.page.maxItems) - 1
            this.page.current = 0
            return searchedAndOrderedProducts
        },
        getCurrentRangeOfPages() : number[]{
            return this.range(1, this.page.last + 1)
        },
        getCurrentPage(): Product[]{
            return this.getSearchedAndOrderedProducts
            .slice(this.page.current * this.page.maxItems, 
                (this.page.current + 1) * this.page.maxItems)
        }
    },
    mounted() {
        fetch('https://fakestoreapi.com/products')
                    .then(res=>res.json())
                    .then(json=> this.products = json)
                    .then()
    }
})
</script>

<style scoped>

.root{
    width: 100%;
    height: 100%;
    min-height: 100%;
    text-align: center;
    
}
.product_list{
    display: inline;
    margin-top: 30px;
}
.product_list{
    margin: auto
}
.pages{
    margin-top: 50px;
}
</style>
