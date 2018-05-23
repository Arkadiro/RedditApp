<template>
    <div class="subreddits container">
        <h2>News: {{category | capitalize}}</h2>
        <div v-if="displaySpinner" class="spinner">
            <img src="../assets/loading.gif">
        </div>
        <div v-else-if="!displaySpinner">
            <ul class="item-list">
                <li v-for="post in subreddits" :key="post.title">
                    <subreddit :item="post"></subreddit>
                </li>
            </ul>
        </div>
        <pagination 
            :current="currentPage"
            :total="totalPosts" 
            :perPage="count" 
            @page-after="getPosts('after='+after[after.length-1])"
            @page-before="getPosts('before='+before[before.length-1])">
        </pagination>
    </div>
</template>

<script>
    import Subreddit from './Subreddit'
    import Pagination from './Pagination'

    export default {
        name:'subreddits',
        props:['category'],
        data(){
            return{
                subreddits:[],
                after:[],
                before:[],
                totalPosts: 0,
                limit: 30,
                count:10,
                currentPage:1,
                displaySpinner:true
            }
        },
        components:{
            Subreddit,
            Pagination
        },
        created: function(){
            this.getPosts(this.currentPage)
        },
        methods:{
            getPosts: function(e){
                let dir = e.toString();
                    setTimeout(()=>{
                        this.$http.get('https://www.reddit.com/r/' + this.category +'/new.json?limit='+ this.limit+'&'+dir+'&count='+this.count)
                        .then((res)=>{
                        this.displaySpinner = false;
                        let data = res.data;
                        if(this.subreddits.length > 0){
                            this.subreddits = [];
                        }
                        data.data.children.forEach(el => {
                            this.subreddits.push(el.data)
                        });
                        this.totalPosts = this.subreddits.length;
                        this.after.push(data.data.after);
                        this.before.push(data.data.before);
                        if(dir.includes('after')){
                            this.currentPage +=1
                        } else if(dir.includes('before')){
                            this.currentPage -=1
                        }
                        console.log(this.subreddits)

                    })
                    .catch(e=> {
                        console.log(e)
                    })
                    }, 2000)
                    this.displaySpinner = true;
            }       
        },
        
        filters:{
            capitalize: function(value){
                if(!value) return '';
                value = value.toString();
                return value.charAt(0).toUpperCase() + value.slice(1);
            }
        }
    }
</script>

<style scoped>
    .container{
        max-width: 600px;
        margin: 30px auto;
        background: #ffffff;
        box-shadow: 0 0 3px #cccccc;
    }
    .subreddits{
        min-width: 250px;
        padding: 25px 45px;
    }
    .subreddits h2{
        font-size: 20px;
        margin-bottom: 10px;
        margin-top: 0;
    }
    .subreddits .item-list{
        border-top: 1px solid #cccccc;
        padding-top: 20px;
        list-style: none;
    }
    .subreddits .item-list li{
        margin-bottom: 20px;
    }
    .spinner{
        text-align: center
    }
</style>


