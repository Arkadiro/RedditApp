<template>
    <div class="pagination">
        <div class="col-md-2">
            <a href="#" v-if="hasPrev()" @click="beforePage(prevPage, $event)">Prev</a>
        </div>
        <div class="col-md-8 text-center">
            <p>Page:{{current}} of {{totalPages}}</p>
        </div>
        <div class="col-md-2">
            <a href="#" v-if="hasNext()" @click="afterPage(nextPage, $event)">Next</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pagination',
    props: {
        current: {
            type: Number,
            default:1
        },
        total: {
            type: Number,
            default: 0
        },
        perPage: {
            type: Number,
            default: 10
        }

    },
    computed: {
        totalPages: function(){
            return Math.ceil(this.total/this.perPage)
        },
        nextPage: function(){
            return this.current +1
        },
        prevPage: function(){
            return this.current -1
        }
    },
    methods:{
        beforePage: function(page, e){
            e.preventDefault();
            this.$emit('page-before', page)
        },
        afterPage: function(page, e){
            e.preventDefault();
            this.$emit('page-after', page)
        },
        hasPrev: function(){
            return this.current>1
        },
        hasNext: function(){
            return this.current<this.totalPages
        }
    }
}
</script>