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
    data() {
        return {
            store
        }
    },
    methods: {
        getCards() {
            this.store.loading = true;

            axios.get(this.store.urlAPI).then(r => {
                this.store.cards = r.data.data;
                this.store.loading = false;
                // console.log(this.store.cards);
            }).catch(error => {
                console.error("Something went wrong", error);
            })
        },
        getArchetypes() {
            this.store.loading = true;

            axios.get(this.store.swagAPI).then(r => {
                this.store.archetypeArray = r.data;
                this.store.loading = false;
                // console.log(this.store.cards);
                this.archetypeArray = this.store.archetypeArray;
            }).catch(error => {
                console.error("Something went wrong", error);
            })
        }
    },
    mounted() {
        this.getCards()
        this.getArchetypes()
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