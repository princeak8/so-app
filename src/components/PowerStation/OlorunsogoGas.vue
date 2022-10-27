<template>
        <tr>
            <td>{{sn}}</td>
            <td>OLORUNSOGO (GAS)</td>
            <td>{{pData.olorunsogoGasMw}}Mw</td>
            <td>{{pData.olorunsogoGasMvar}}Mx</td>
            <td>{{pData.kvGas}}KV</td>
            <td :class="statusColor">{{statusName}}</td> 
            <!-- {{connected}}
            {{connectionLostTime}} -->
            
        </tr>
    
</template>



<style scoped>

</style>

<script>
import { mapActions, mapState } from 'vuex';
import OlorunsogoMixin from './OlorunsogoMixin';

export default {
  
    props: ['station', 'connected', 'sn'],
    
    mixins: [OlorunsogoMixin],
    data() {
        return {
            //
        };
    },
    computed: {
        //
    },
    methods: {
            //
    },
    mounted() {
        //
    }
};
</script>
