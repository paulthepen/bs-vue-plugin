<template>
    <div class="d-flex flex-wrap" :class="layoutClass"  v-if="display?.header?.honorSidebar">
        <listSidebar v-if="display?.sidebar" :options="display" :class="sideBarClass">
            <unitFilter options="display?.sidebar?.filter" v-if="display?.sidebar?.filter" />
            <unitSort options="display?.sidebar?.sort" v-if="display?.sidebar?.sort" />
        </listSidebar>
        <div class="order-2">
            <listHeader v-if="display?.header" :options="display?.header" class="order-1">
                <unitFilter options="display?.header?.filter" v-if="display?.header?.filter" />
                <unitSort options="display?.header?.sort" v-if="display?.header?.sort" />
            </listHeader>
            <listContent :display="display">
                <slot></slot>
            </listContent>
        </div>   
    </div>
    <div class="d-flex flex-wrap" :class="layoutClass" v-else>
         <listHeader v-if="display?.header" :options="display?.header" class="order-1">
            <unitFilter options="display?.header?.filter" v-if="display?.header?.filter" />
            <unitSort options="display?.header?.sort" v-if="display?.header?.sort" />
        </listHeader>
        <listSidebar v-if="display?.sidebar" :options="display" :class="sideBarClass">
            <unitFilter options="display?.sidebar?.filter" v-if="display?.sidebar?.filter" />
            <unitSort options="display?.sidebar?.sort" v-if="display?.sidebar?.sort" />
        </listSidebar>
         <listContent :display="display" :class="contentClass">
            <slot></slot>
        </listContent>
    </div>
</template>

<script>
import listHeader from "./ListHeader.vue";
import listContent from "./ListContent.vue";
import listSidebar from "./ListSidebar.vue";
import unitFilter from "../unit/UnitFilter.vue";
import unitSort from "../unit/UnitSort.vue";

    export default {
        props:['display'],
        components: { listHeader, listContent, listSidebar, unitFilter, unitSort},
        data() {
            return {
                
            }
        },
        computed: {
            layoutClass() {
                return {
                   container: this.display?.gutters,
                   'container-fluid': !this.display?.gutters,
                }
            },
            sideBarClass() {
                return {
                    'order-1': this.display?.header?.honorSidebar && this.display?.sidebar?.position != 'right',
                    'order-2': !this.display?.header?.honorSidebar && this.display?.sidebar?.position != 'right',
                    'order-3': this.display?.sidebar?.position == 'right',
                }
            },
            contentClass() {
                return {
                    'order-3': this.display?.sidebar?.position != 'right',
                    'order-2': this.display?.sidebar?.position == 'right' || this.display?.header?.honorSidebar
                }
            }
        }, 
        methods: {
            
        }
    }
</script>