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
                if (this.options?.honorSidebar) {
                    return 'order-2';
                } else {
                    return 'container-fluid';
                }
            }
        }, 
        methods: {
            
        }
    }
</script>