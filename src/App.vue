<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import req from 'superagent'

let request = require('superagent')
let config = require('../build//superagent-mock-config')
let superagentMock = require('superagent-mock')(request, config)

request.get('https://api.local/hero')
       .send({superhero: 'superman'})
       .end(function(err, res){
          console.log(res.body)
       })


export default {

}


</script>

<style lang="stylus">
@import 'assets/variables.styl'
@import 'assets/app.styl'

</style>
