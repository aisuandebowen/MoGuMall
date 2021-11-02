<template>
    <div>
        <h1>Detail</h1>
    </div>
</template>
<script>
    export default {
        name: 'Detail',
        data() {
            return {
                iid:null
            }
        },
        created() {
            // 有误！
            this.iid = this.$route.params.id
        },
        computed: {
        },
        methods: {
        },
    }
</script>
<style scoped>

</style>