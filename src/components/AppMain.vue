<script>
import {store} from '../data/store'
import axios from 'axios'

export default {
    name: "AppMain",
    data() {
        return {
            store,
            selected: "All"
        }
    },
    methods: {
        getImagePath: function(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
    },
}
</script>
<template>
    <div class="container-fluid bg-warning">
        <div class="container">
            <div class="row">
                <select @change="filteredArchetype" class="form-select w-25 p-2 mt-4" aria-label="Default select example" v-model="selected">
                    <option v-for="(archetype, i) in this.store.archetypeArray" :key="i">{{ archetype.archetype_name }}</option>
                </select>
            </div>
        </div>
        <div class="container bg-light">
            <div class="row mt-4 p-3">
                <template v-for="card in this.store.cards">
                    <div class="card">
                        <img :src="getImagePath(card.card_images[0].image_url)" alt="">
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card {
        width: calc(100% / 5);
        height: 25rem;
        padding: 1rem;
    }
</style>