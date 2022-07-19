<template>
    <div class="d-flex flex-wrap" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props:['display'],
        components: {},
        data() {
            return {
                
            }
        },
        computed: {
            layoutClass() {
                return {
                   container: this.display?.gutters,
                   'container-fluid': !this.display?.gutters,
                   'flex-column': this.display?.header?.honorSidebar,

                }
            }
        }, 
        methods: {
            
        }
    }
</script>