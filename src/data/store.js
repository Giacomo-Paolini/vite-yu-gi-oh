import { reactive } from 'vue'

export const store = reactive({
    loading: true,
    urlAPI: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    swagAPI: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    archetypeAPI: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=",
    cards: [],
    archetypeArray: []
});