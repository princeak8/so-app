<template>
        <tr>
            <td>{{sn}}</td>
            <td>Olorunsogo NIPP</td>
            <td>{{pData.olorunsogoNippMw}}Mw</td>
            <td>{{pData.kvNipp}}KV</td>
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
