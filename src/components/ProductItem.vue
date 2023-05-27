<template>
<div class="root">
    <router-link
    :to="{name: 'product', params: {id: product?.id}}">
    <div class="card">
        <img :src="product?.image"/>
        <div class="content">
            <div class="row">
                <div class="details">
                    <span>{{ product?.title }}</span>
                </div>
                <div class="price">{{ product?.price }}$</div>
            </div>
            <div class="buttons">
                <button @click.prevent="addToBasket">{{ buttonText }}</button>
            </div>
        </div>
    </div>
    </router-link>
</div>
</template>

<script lang="ts">
import Product from '@/types/Product';
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'ProductItem',
    props: {
        product: Object as PropType<Product>
    },
    data() {
        return {
            buttonText: 'в корзину' as 'в корзину' | 'убрать из корзины'
        }
    },
    methods:{
        addToBasket(){
            this.$emit('addToBasket', this.product?.id)
            this.buttonText = this.buttonText == 'в корзину' ? 'убрать из корзины' : 'в корзину'
        }
    }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Open+Sans:wght@400;500;600;700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Merriweather', serif;
    font-family: 'Open Sans', sans-serif;
}
.card{
    position: relative;
    width: 400px;
    height: 400px;
    border-radius: 4px;
    background-color: #fff;
    overflow: hidden;
}

.card:hover .content{
    bottom: 0;
}

img{
    width: 100%;
    height: 100%;
    object-fit:fill;
    border-radius: 4px;
}

.card .content{
    position: absolute;
    bottom: -50%;
    width: 100%;
    padding: 10px 20px 22px 20px;
    background-color: #fff;
    transition: all 0.25s ease;
}

.price{
    color: black;
    font-size: 20px;
    font-weight: 600;
}

.row, .buttons{
    display: flex;
    justify-content: space-between;
}

.details span{
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 10px;
}

.buttons{
    margin-top: 20px;
}

.buttons button{
    width: 100%;
    padding: 10px 0;
    border: 2px solid rgb(234, 27, 30);
    border-radius: 3px;
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;
    outline: none;
    text-transform: uppercase;
    transition: all 0.2s ease;
}

button:hover{
    background-color: rgb(234, 27, 30);
    color: #fff;
}
</style>
