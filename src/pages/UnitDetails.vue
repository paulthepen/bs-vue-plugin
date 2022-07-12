<template>
    Unit Details for unit #{{unitId}}!
</template>

<script>
    export default {
        props:{
            unitId: {
                type: String,
                required: true,
                validator (value) {
                    if (value == null) {
                        this.$route.push('/unit-search');
                    }
                }
            }
        },
        components: {},
        data() {
            return {
                
            }
        },
        computed: {
            
        }, 
        methods: {
            
        }
    }
</script>