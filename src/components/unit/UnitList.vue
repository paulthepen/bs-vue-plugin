<template>
    <div v-for="unit in units" :key="unit.id">
        <unitCard v-if="options?.card" :unit="unit" />
        <unitListItem v-else :unit="unit" />
    </div>
</template>

<script>
import unitListItem from './UnitListItem.vue';
import unitCard from './UnitCard.vue';

export default {
    props: ['units', 'options'],
    components: {unitListItem, unitCard},
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
    }
}
</script>