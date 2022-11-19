<template>
  <p>hello home</p>
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <TheCard :name="`${item.lvl} lvl`" :title="item.title" />
  </div>
</template>

<script>
import TheCard from '@/components/UI/TheCard'

export default {
  components: { TheCard },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Archer',
          descr: 'archer archer archer archer archer archer',
          lvl: 4
        },
        {
          id: 2,
          title: 'Wizard',
          descr: 'wizard wizard wizard wizard wizard wizard',
          lvl: 5
        }
      ]
    }
  }
}
</script>
