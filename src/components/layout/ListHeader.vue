<template>
    <div :class="widthClass">
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
            widthClass() {
                return this.options?.honorSidebar? '': 'container-fluid';
            }
        }, 
        methods: {
            
        }
    }
</script>