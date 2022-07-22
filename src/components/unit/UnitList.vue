<template>
    <div v-for="unit in units" :key="unit.id" class="container-fluid">
        <unitCard v-if="options?.card" :unit="unit" />
        <unitListItem v-else :unit="unit" :options="options" />
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