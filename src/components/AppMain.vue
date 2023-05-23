<script>
import {store} from '../data/store'

export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    },
    methods: {
        getImagePath: function(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="container-fluid bg-warning">
        <div class="container">
            <div class="row">
                <select class="form-select w-25 p-2 mt-4" aria-label="Default select example">
                    <option selected>Alien</option>
                    <!-- <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> -->
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