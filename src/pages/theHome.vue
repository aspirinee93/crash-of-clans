<template>
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <TheCard :name="`${item.lvl} lvl`" :title="item.title">
      <template v-slot:header>
        <h1>{{item.title}}</h1>
      </template>
      <template v-slot:body>
        {{item.descr}}
      </template>
    </TheCard>
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
