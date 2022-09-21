<template>
  <div class="list-block">
    <h3 class="list-block__title" v-if="list.title">{{ list.title }}</h3>
    <ul class="list-block__list">
      <li v-for="item in list.listItems"
          :key="item"
          v-html="item"
      >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
