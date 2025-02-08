<script>
export default {
  name: 'CourseSort',
  props: {
    sortOptions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onSortChange(event) {
      this.$emit('sort-change', event.target.value);
    },
  },
};
</script>

<template>
  <div class="course-sort">
    <label for="sortOptions">Sort By:</label>
    <select id="sortOptions" @change="onSortChange">
      <option v-for="option in sortOptions" :key="option" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<style scoped>
label {
  margin-right: 0.5rem;
}

select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>