<template>
  <div>
  <b-navbar class="nav-bar" toggleable="lg">
    <b-navbar-brand href="#" style="color: #fff">Website Logo</b-navbar-brand>

    <b-navbar-toggle style="color: white; background: white" target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto listn" style="color:white">
        <b-nav-item style="color: white"><a href="">Home</a></b-nav-item>
        <b-nav-item><a href="">About</a></b-nav-item>
        <b-nav-item><a href="">Services</a></b-nav-item>
        <b-nav-item><a href="">Contact</a></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script type="text/javascript">
  
</script>
<style type="text/css">
.nav-bar{
  background:#404040 ;
}
.listn a{
  color: #fff;
}
</style>
