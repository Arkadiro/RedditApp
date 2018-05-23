<template>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <span class="navbar-brand">RedditApp</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item nav-link">
            <router-link to="/kt">Home</router-link>   
          </li>
          <li class="nav-item nav-link">
            <router-link to="/julia">Julia</router-link>
          </li>
          <li class="nav-item nav-link">
            <a href="./kt/juliajs">Juliajs</a>
          </li>
        </ul>
      </div>
    </nav>
</template>
