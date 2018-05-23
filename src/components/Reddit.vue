<template>
<div>
    <header>
      <h3>Subreddits</h3>
    </header>
    <subreddits category="crappyoffbrands"></subreddits>
    <!-- <router-view/> -->
</div>
</template>

<script>
import Subreddits from './Subreddits'

export default {
  name: 'Reddit',
  components:{

    Subreddits

  }
}
</script>

<style>
  body{
    font-family: arial;
    color: #666666;
    background: #f4f4f4;
    margin:0;
    padding:0
  }
  a{
    text-decoration: none;
  }
  header{
    background: #666666;
    color: #ffffff;
    padding: 10px;
    text-align: center;

  }
</style>
