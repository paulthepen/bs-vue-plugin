<template>
    <router-link :to="getUnitPage(unit)">
        <div class="d-flex unit-list-item" :class="flexWrap">
            <div class="unit-list-img" :class="imgOrder" v-if="options?.fullImg">
                    <img :src="unit.Thumbnail" />
            </div>
            <div class="align-self-stretch unit-list-title" v-else>
                <h2>{{ unit.Name }}</h2>
            </div>
            <div class="d-flex" :class="flexDirection">
                <div class="unit-list-img" :class="imgOrder" v-if="!options?.fullImg">
                    <img :src="unit.Thumbnail" />
                </div>
                <div class="align-self-stretch unit-list-title" v-else>
                    <h2>{{ unit.Name }}</h2>
                </div>
                <div class="unit-list-desc" :class="descOrder">
                    <p>
                        {{ unit.Description }}
                    </p>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import { createUrlSlug } from '@/helpers/DataRetriever';

export default {
    props: ['unit', 'options'],
    components: {},
    data() {
        return {

        }
    },
    computed: {
        imgOrder() {
            return this.options?.imgAlign == 'right'? 'order-last': 'order-first';
        },
        descOrder() {
            return this.options?.imgAlign == 'right' && !this.options?.fullImg? 'order-first': 'order-last';
        },
        flexDirection() {
            return{'flex-column': this.options?.fullImg}
        },
        flexWrap() {
            return {'flex-wrap': !this.options?.fullImg}
        }
    },
    methods: {
        getUnitPage(unit) {
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