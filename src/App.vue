<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import {store} from './data/store'
import axios from 'axios'

export default {
    name: "App",
    components: {
        AppHeader,
        AppMain,
    },
    mounted() {
        axios.get(this.store.urlAPI).then(r => {
            this.store.cards.push(r.data.data);
            this.store.loading = false;
        }).catch(error => {
            console.error("Something went wrong");
        })
    }
}
</script>

<template>
    <header>
        <AppHeader />
    </header>
    <main>
        <AppMain />
    </main>
</template>