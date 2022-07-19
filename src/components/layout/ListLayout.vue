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
                return this.display?.gutters? 'container': 'container-fluid'
            }
        }, 
        methods: {
            
        }
    }
</script>