<template>
    <div class="flex-fluid">
        Header
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props:['options'],
        components: {},
        data() {
            return {
                
            }
        },
        computed: {
            //custom height option
        }, 
        methods: {
            
        }
    }
</script>