<template>
    <div class="subreddit">
        <a :href="makeUrl(item.permalink)" :style="makeImg(item.thumbnail)" target="_blank" class="thumbnail"></a>
        <div class="details">
            <a :href="makeUrl(item.permalink)" :title="item.title" target="_blank" class="title">
                {{item.title | cutTitle}}
            </a>
            <br>
            <div class="stats">
                <i class="material-icons">thumbs_up_down</i>
                {{item.score}}
                <i class="material-icons">forum</i>
                {{item.num_comments}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'subreddit',
        props:['item'],
        methods:{
            makeImg: function(img){
                return 'background-image: url('+img+')';
            },
            makeUrl: function(permalink){
                return 'http://reddit.com/' +permalink;
            }
        },
        filters:{
            cutTitle: function(value){
                let length = 50;
                if(value.length <=length){
                    return value;
                } else{
                    return value.substring(0, length) + '...'
                }
            }
        }
    }
</script>

<style scoped>
    .subreddit{
        display: flex;   
    }
    .subreddit .thumbnail{
        display: block;
        flex: 0 0 65px;
        height: 65px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        margin-right: 12px;
        border-radius: 5px;
    }
    .subreddit .details .title{
        font-size: 15px;
        margin-bottom: 5px;
        color:steelblue;
    }
    .subreddit .stats{
        font-size: 14px;
        margin-right: 4px;
        margin-top: 7px;
        display: inline-block;
        color: #666666;
    }
    .subreddit .stats i{
        font-size: 14px;
        margin-right: 2px;
    }
</style>


