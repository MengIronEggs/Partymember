<template>
   <div class="second" @click="ToStart">

   </div>
</template>

<script>
export default {
    data() {
        return {

        }

    },
    methods:{
        ToStart(){
            this.$router.replace("start");
        }
    },
    components: {

    }
}
</script>

<style scoped lang="less">
.second{
    width: 100%;
    height: 100%;
    background:url("https://img.guoanfamily.com/quesAct/second.jpg") center no-repeat/cover;
}

</style>
