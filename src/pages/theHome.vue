<template>
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <TheCard :name="`${item.lvl} lvl`" :title="item.title" :imgUrl="item.img">
      {{ item.descr }}
    </TheCard>
  </div>
</template>

<script>
import TheCard from '@/components/UI/TheCard'
import items from '@/seeders/items.js'

export default {
  components: { TheCard },
  data() {
    return {
      items: items
    }
  }
}
</script>
