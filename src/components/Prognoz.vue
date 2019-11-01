<template> 
    <div>
        <input v-model="inputt"> 
        <button @click="add_city()">Add</button><br>
        <div v-for="item in (this.$store.getters.getC)" v-bind:key="item.name">
                <router-link v-bind:to="'/prognozinfo/'+item.name" >{{item.name}}</router-link>,{{item.sys.country}}
                temp {{(+item.main.temp-273.15).toFixed(2)}}° 
                {{item.wind.speed}}m/s. 
                {{item.clouds.all}}%,
                </div>
   </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    
    Vue.use(VueAxios, axios)

    export default {
       data: function() {
           return {
        prognozes:[],
        img_Weather:'',
        selected_city:'',
        select_ar:[],
        inputt:'',
           };
       },
      mounted: function(){
          if(this.$store.getters.getC.length==0){
            navigator.geolocation.getCurrentPosition(success=>{
            Vue.axios.get("http://api.openweathermap.org/data/2.5/weather?lat="+success.coords.latitude+"&lon="+success.coords.longitude +"&appid=b8d67052dc6c85fb12d75983c11d464b",)
            .then((resp) =>{ this.$store.commit("increment",resp.data);
            //this.img_city="http://openweathermap.org/images/flags/"+(resp.data.sys.country).toLowerCase()+".png";
            // this.img_Weather="http://openweathermap.org/img/wn/"+this.prognozes.weather[0].icon+"@2x.png";
            this.prognozes.push(resp.data.name)
            
            this.$router.push("prognozinfo/"+(this.prognozes))
            })
            
            })
            
            }
            this.$store.getters.getC.forEach(elem=>{if(!this.prognozes.includes(elem.name))this.prognozes.push(elem.name)})
            
            console.log(this.prognozes)
    },

    methods:{
        add_city:function(){
              console.log(this.prognozes);
            if(!this.prognozes.includes(this.inputt))
            Vue.axios.get("http://api.openweathermap.org/data/2.5/weather?q="+this.inputt+"&appid=b8d67052dc6c85fb12d75983c11d464b",).then((resp) => {
            this.prognozes.push(this.inputt)
            this.$store.commit("increment",resp.data);
            this.inputt='';
        })
        }
    },
       
            
    }
</script>

























