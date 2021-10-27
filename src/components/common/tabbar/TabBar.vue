<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'TabBar',
        data() {
            return {
            }
        },
        created() {
        },
        computed: {
        },
        methods: {
        },
    }
</script>
<style scoped>
    #tab-bar {
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        background-color: #f6f6f6;

        box-shadow: 0px -1px 1px rgba(0, 0, 0, .1);

    }
</style>