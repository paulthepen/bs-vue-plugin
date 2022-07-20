<template>
    <div class="d-flex flex-wrap" :class="layoutClass" v-if="display?.header?.honorSidebar">
        <slot name="sidebar"></slot>
        <div class="order-2">
            <slot name="header"></slot>
            <listContent :display="display">
                <slot></slot>
            </listContent>
        </div>
    </div>
    <div class="d-flex flex-wrap" :class="layoutClass" v-else>
        <slot name="header"></slot>
        <slot name="sidebar"></slot>
        <listContent :display="display" :class="contentClass">
            <slot></slot>
        </listContent>
    </div>
</template>

<script>
import listContent from "./ListContent.vue";

export default {
    props: ['display'],
    components: { listContent },
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