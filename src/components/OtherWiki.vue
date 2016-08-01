<template>
        <div class="card-block">
          <div class="row">


            <div class="col-md-6 col-sm-12 col-xs-12" v-for="item in source">
              <ul class="list-group">
                <li class="list-group-item">
                  <a href="{{item.url}}" v-text="item.title"></a>
                </li>
              </ul>
            </div>


          </div>

        </div>
</template>


<script>
import { getOtherWiki } from '../api/getOtherWiki'

let source

getOtherWiki((res)=>{source = res})

console.log('in owiki is ' + source)
export default {
  data(){
    return {
      source: source.content
    }
  }
}

</script>


<style lang="stylus" scoped>
.list-group-item
  border none
  a
    color #373a3c

.card-block
  padding 0

</style>
