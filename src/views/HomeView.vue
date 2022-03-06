<template>
  <div class="home">
    <ShoppingList />
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingList from '@/components/ShoppingList.vue'

export default {
  name: 'HomeView',
  components: {
    ShoppingList
  }
}
</script>
