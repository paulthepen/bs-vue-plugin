<template>
    <div class="flex-fluid" :style="customStyles">
        Header
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['options'],
    components: {},
    data() {
        return {

        }
    },
    computed: {
        customStyles() {
            const styles = this.options?.styles;

            if (!styles) {
                return "";
            } else {
                return styles;
            }
        }
    },
    methods: {

    }
}
</script>