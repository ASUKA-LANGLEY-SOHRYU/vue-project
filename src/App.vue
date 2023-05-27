<template>
<div class="root">
    <HeaderComp class="header_component" :idk_count="basket.length"/>
    <MainComp @addToBasket="addToBasket"></MainComp>
    <FooterComp class="footer_component"/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComp from '@/components/HeaderComp.vue'
import MainComp from '@/components/MainComp.vue'
import FooterComp from '@/components/FooterComp.vue'
export default defineComponent({
    name: 'App',
    components:{
        HeaderComp,
        MainComp,
        FooterComp
    },
    data() {
        return {
            basket: [] as number[]
        }
    },
    methods:{
        addToBasket(id: number){
            if(this.basket.includes(id))
                this.basket = this.basket.filter(item => item != id)
            else
                this.basket.push(id)
        }
    }
})
</script>

<style>
@font-face {
    font-family: 'Open Sans';
    src: url(@/fonts/Open_Sans/static/OpenSans-Regular.ttf);
}
.root{
    min-height: 100%;
}
</style>
