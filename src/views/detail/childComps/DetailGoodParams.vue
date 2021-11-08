<template>
    <table>
        <tr>
            <td></td>
        </tr>
    </table>
</template>
<script>
    export default {
        name: 'DetailGoodParams',
        data() {
            return {
                rule: []
            }
        },
        created() {
        },
        computed: {
        },
        methods: {
        },
        props: {
            goodParams: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        watch: {
            goodParams() {
                if (this.goodParams) {
                    this.rule = this.goodParams.rule.reduce(function (total, currentValue) {
                        return [...total, ...currentValue]
                    }, [])
                }

            }
        }
    }
</script>
<style scoped>

</style>