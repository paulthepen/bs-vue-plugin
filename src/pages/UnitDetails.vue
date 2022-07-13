<template>
    Unit Details for unit #{{unitId}}: {{unitName}}!
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
            },
            unitName: {
                type: String,
                required: false,
                default: "default"
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
            
        },
    }
</script>