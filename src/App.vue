<template>
  <div id="app">

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Guía docente</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/presentacion">Presentación</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/contenidos">Contenidos</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/metodologia">Metodología</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/recomendaciones">Recomendaciones técnicas</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/bibliografia">Bibliografía</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/evaluacion">Evaluación</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/profesorado">Profesorado</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/orientaciones">Orientaciones</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  
}
</style>