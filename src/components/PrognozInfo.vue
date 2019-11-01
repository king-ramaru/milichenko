<template> 
    <div>
        <div v-for="item in (this.$store.getters.getC)"  v-bind:key="item.name">
            <div v-if="bufff.name===item.name">
            <img :src="img_Weather">
                {{item.name}},{{item.sys.country}}<img :src="img_city">
                {{(+item.main.temp_min-273.15).toFixed(2)}} to 
                {{(+item.main.temp_max-273.15).toFixed(2)}}°С, wind 
                {{item.wind.speed}}m/s. 
                {{item.clouds.all}}%, 
                {{item.main.pressure}} hpa 
                </div>
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
               bufff:[],
               img_city:'',
               img_Weather:'',
           };
       },
      mounted: function(){
                Vue.axios.get("http://api.openweathermap.org/data/2.5/weather?q="+this.$route.params.name+"&appid=b8d67052dc6c85fb12d75983c11d464b",)
                .then((resp) =>{this.bufff=resp.data;
                this.img_city="http://openweathermap.org/images/flags/"+(resp.data.sys.country).toLowerCase()+".png";
                this.img_Weather="http://openweathermap.org/img/wn/"+resp.data.weather[0].icon+"@2x.png";
            } );
    }    
    }
</script>
<style>
</style>