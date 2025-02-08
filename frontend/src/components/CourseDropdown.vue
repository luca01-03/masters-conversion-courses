<script>
export default {
  name: 'CourseDropdown',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onCategoryChange(event) {
      this.$emit('category-change', event.target.value);
    },
  },
};
</script>


<template>
    <div class="course-dropdown">
        <label for="courseType">Select Course Type:</label>
        <select id="courseType" @change="onCategoryChange">
      <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
    </select>
    </div>
</template>


<style scoped>
.course-dropdown {
  margin: 20rem auto 0 ;
}

label {
  margin-right: 0.5rem;
}

select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>