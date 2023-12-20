<template>
    <div>
        <h1>Une simple requete HTTP Get</h1>
        <h2>20 premiers Pokémons :</h2>
        <ul class="list-group text-center" v-for="pkmn in tabPkmn">
            <img  :src="pkmn.image" height="100" width="100">
            <p class="list-group-item">{{ pkmn.name }}</p>
        </ul>
    </div>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'GetRequest',
    data() {
        return {
            //totalVuePackages:null
            tabPkmn : [{
                image : Image,
                name : String
            }],
        };
    },
    created() {
    // Avec mounted ca marche aussi 
    // mounted() {
    // Simple GET request using fetch
    //fetch("https://api.npms.io/v2/search?q=vue") (ça c'est l'original)
    //fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20") (bon ça c'est l'exo et après on prend le lien de Laura)
    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/20")
      .then(response => response.json())
      //.then(data => (this.totalVuePackages = data.total))
      .then(data => {
        for(let i = 0 ; i < 20; i++) {
            this.tabPkmn.push(data[i].name);
        };
        //this.totalVuePackages.push(data[0].image);
    })
      .catch((e)=>(console.log(e)))
  },
// AUTRE VERSION PLUS SECURISEE  
//  created() {
    // GET request using fetch with error handling
//    fetch("https://api.npms.io/v2/invalid-url")
//      .then(async response => {
//        const data = await response.json();

        // check for error response
//        if (!response.ok) {
          // get error message from body or default to response statusText
//          const error = (data && data.message) || response.statusText;
//          return Promise.reject(error);
//        }

//        this.totalVuePackages = data.total;
//      })
//      .catch(error => {
//        this.errorMessage = error;
//        console.error("There was an error!", error);
//      });
  }
//! pour faire du async await juste vous précisez async avant le nom de la fonction
// ca marche aussi pour faire des methods en async
// async created() {
//     // GET request using fetch with async/await
//     const response = await fetch("https://api.npms.io/v2/search?q=vue");
//     const data = await response.json();
//     this.totalVuePackages = data.total;
//   },
    


    //methods: {} ,
//}
);
</script>

<style scoped lang="css">
</style>