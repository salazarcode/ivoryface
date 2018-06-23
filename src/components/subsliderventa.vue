<template>
     <div>
        <div class="sliders">
            <img  @click="imgClick" src="" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data: function(){
        return{
        toDisplay: 0,
        n: 0,
        sources: [
            "https://pbs.twimg.com/profile_images/378800000443308444/abbbd97c2c3452b66eb1e8351d9ccd1c.jpeg",
            "https://pbs.twimg.com/profile_images/378800000638927723/388137d48b79037f9ab99cef8ef53395.jpeg",
            "https://pbs.twimg.com/profile_images/3224212457/597249adf5ab0339fcfdefcc8bd1e531.jpeg"
        ]
        }
    },
    methods: {
            imgClick: function(){
                if(this.toDisplay < this.n -1)
                    this.toDisplay++;
                else
                    this.toDisplay = 0;
                event.target.setAttribute("src", this.sources[this.toDisplay]);     
            }
        },
        mounted: function(){
            this.n = this.sources.length;
            document.querySelector(".sliders img").setAttribute("src", this.sources[this.toDisplay]);
        }   
}
</script>
<style lang="scss" scoped>
     .sliders{
            position: relative;
            height: 168px;
            width: 150px;
        }
        .sliders img{
            position: absolute;
            display: block;
            height: 100%;
            width: 100%;
        }
        


</style>


