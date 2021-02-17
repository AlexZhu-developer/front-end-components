<template>
  <div class="qui-nav nav-type-1">
    <a v-for="(item, index) in items" :class="[commonClass,item.active ? activeClass : '']" v-on:click="navClickEvent(items,index)" >
      <span class="nav-txt">{{item.text}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    data:function(){
      return {
        commonClass:'nav-item',
        activeClass:'active',
        items:[
          {
            text: 'Home',
            active : true
          },
          {
            text: 'List',
            active : false
          },
          {
            text: 'About',
            active : false
          },
          {
            text: 'Career',
            active : false
          }
        ]
      }
    },
    methods:{
      navClickEvent:function(items,index){
        /*Default switch*/
        items.forEach(function(el){
          el.active = false;
        });
        items[index].active = true;
        /*custom API*/
        this.$emit('navClickEvent',items,index);
      }
    }
  }
</script>
<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-nav.import.css';
</style>

