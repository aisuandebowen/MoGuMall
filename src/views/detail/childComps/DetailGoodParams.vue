<template>
    <div>
        <table class="rule">
            <tr v-for="item in rule">
                <td v-for="item2 in item">{{item2}}</td>
            </tr>
        </table>
        <table class="info">
            <tr v-for="item2 in goodParams.info">
                <td>{{item2.key}}</td>
                <td>{{item2.value}}</td>
            </tr>
        </table>
    </div>
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
    table {
        border-collapse: collapse;
    }

    tr {
        border-bottom: 1px solid #f5f1f1;
    }

    td:first-child {
        padding-left: 10px;
    }

    td:last-child {
        padding-right: 10px;
    }

    .rule tr {
        text-align: center;
    }

    .rule td:first-child {
        text-align: left;
        width: 40vw;

    }

    .rule td {
        width: 20vw;
        height: 50px;
    }

    .info {
        border-top: 5px solid #f5f1f1;
    }

    .info td {
        height: 40px;
    }

    .info td:first-child {
        width: 30vw;
    }

    .info td:nth-child(2) {
        color: var(--color-high-text);
    }
</style>