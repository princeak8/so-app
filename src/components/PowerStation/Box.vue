<template>
    <div>
        
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nameHeighlight {
        color:#0099CC; cursor: pointer;
    }
    .connectedOverlay {
        position: absolute; top: 0px; left: 0px;
        width: 100%; height: 100%;
        background-color: rgba(255, 255, 255, 0.9); display: flex;
        justify-content: center; align-items: center; 
    }
    .connectedOverlay p {
        font-size: 9px; color: rgb(116, 2, 2); font-weight: bold;
    }
</style>


<script>

export default {
    name: "Box",
    mounted() {
        console.log('id ',this.id)
    },
    data() {
        return {
            //
        }
    },
    methods: {
    },
}
</script>


