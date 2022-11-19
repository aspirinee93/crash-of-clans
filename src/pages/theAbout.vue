<template>
  <div class="container">
    <p class="title">В данном курсе я сделал:</p>
    <ul>
      <li v-for="todo in todos" :key="todo"> - {{ todo }}</li>
    </ul>
  </div>
</template>

<script>
import { todos } from '@/_config'

export default {
  data() {
    return {
      todos: todos,
    }
  }
}
</script>