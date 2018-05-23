<template>
    <div id="app">
    <app-header></app-header>
    <!-- <app-redits></app-redits> -->
    <router-view/>
  </div>
</template>

<script>
import Subreddits from './components/Subreddits'
import Header from './components/Header'
import Reddit from './components/Reddit'

export default {
  name: 'App',
  components:{
    appHeader: Header,
    appRedits: Reddit,
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
