<template>
    <router-link :to="getUnitPage(unit)">
        <div class="d-flex flex-wrap">
            <div class="flex-fluid">
                <h2>{{ unit.Name }}</h2>
            </div>
            <div>
                <img :src="unit.Thumbnail" />
            </div>
            <div>
                <p>
                    {{ unit.Description }}
                </p>
            </div>
        </div>
    </router-link>
</template>

<script>
import { createUrlSlug } from '@/helpers/DataRetriever';

export default {
    props: ['unit'],
    components: {},
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        getUnitPage(unit) {
            console.log(unit);
            return {
                name: "unit-details/:unitName",
                params: {
                    unitId: unit.Id,
                    unitName: createUrlSlug(unit.Name),
                },
            };
        },
    }
}
</script>