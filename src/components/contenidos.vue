<template>
 <div class="contenidos">
  <h1>{{contenidos}}</h1>

  <div id="tcontent2" class="tabcontent" style="display: block;">
 	<div class="guia">
   		<h3>Contenidos   </h3>
   	<p><strong>Tema 1. Lenguajes de marcado HTML5</strong><br>
     Introducción<br>
     Repaso HTML<br>
     Nuevos elementos HTML 5<br>
     Formularios: nuevos controles</p>
   	<p><strong>Tema 2. Introducción a hojas de estilo CSS</strong><br>
     Introducción<br>
     Primeros pasos con CSS<br>
     Introducción a CSS3</p>
   	<p><strong>Tema 3. Lenguaje script de navegador: JavaScript</strong><br>
     Introducción<br>
     DOM<br>
     Eventos<br>
     JQuery<br>
     Ajax   </p>
   	<p><strong>Tema 4. Concepto de la programación orientada a componentes</strong><br>
     Introducción<br>
     Contexto<br>
     Componentes e interfaces<br>
     Estados de un componente</p>
   	<p><strong>Tema 5. Arquitectura de componentes</strong><br>
     Introducción<br>
     Arquitecturas actuales<br>
     Integración y despliegue de componentes</p>
   	<p><strong>Tema 6. Framework Front-End:  Bootstrap</strong><br>
	 Introducción<br>
     Diseño con rejilla<br>
     Formularios<br>
     Componentes</p>
    <p><strong>Tema 7. Modelo vista controlador</strong><br>
     Métodos de desarrollo Web<br>
     Patrón de diseño: MVC   </p>
    <p><strong>Tema 8. Tecnologías Grid de la información</strong><br>
     Introducción<br>
     Incremento de recursos en computación<br>
     Concepto de tecnología Grid</p>
    <p><strong>Tema 9. Arquitectura orientada a servicios</strong><br>
     Introducción<br>
     SOA y servicios Web<br>
     Topología de un servicio Web<br>
     Plataformas para los servicios Web</p>
    <p><strong>Tema 10. Protocolo HTTP</strong><br>
	 Introducción <br>
	 Mensajes<br>
	 Sesiones persistentes<br>
 	 Sistema criptográfico<br>
	 Funcionamiento del protocolo HTTPS</p>
   <p><br>
   </p>
</div>
</div>
</div>
</template>
<script>
 export default{
  name:'contenidos',
  data (){
   return{
    title:'Contenidos'
   }
  }
 }
</script>
<style scoped>
 
</style>