<template>
<div class="root">
    <router-link 
    class="logo"
    :to="{ name: 'home' }">
        <img calss="logo__img" src="@/assets/logo.png"/>
        <h1>Vue-Store</h1>
    </router-link>
    <div class="content">
        <img src="@/assets/idk.png"/>
        <div class="count" :v-if="idk_count != 0"> {{ idk_count }}</div>
    </div>
</div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
export default defineComponent({
    name: 'HeaderComp',
    props:{
        idk_count: {
            type: Number
        }
    }
})
</script>

<style scoped>
.root{
    font-family: 'Merriweather', serif;
    color: rgb(59, 52, 36);
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.logo{
    display: flex;
    padding: 30px 70px;
}

.logo{
    color: black;
    text-decoration: none !important;
}

img{
    width: 100px;
    height: auto;
}
.count{
    position: relative;
    background-color: rgba(248, 13, 13, 0.9);
    min-width: 30px;
    width: 30px;
    height: auto;
    display: inline;
    right: 24px;
    top: -21px;
    border-radius: 50%;
    border: 1px solid black;
}
</style>
