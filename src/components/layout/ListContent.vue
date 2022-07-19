<template>
    <div class="flex-fill" :class="positionClass" >
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
            positionClass() {
                if (this.display?.sidebar?.position == 'right') {
                    return 'order-2';
                } else if (this.display?.sidebar) {
                    return 'order-3';
                } else {
                    return '';
                }
            }
        }, 
        methods: {
            
        }
    }
</script>