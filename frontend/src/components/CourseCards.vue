<script>
export default {
  name: 'CourseCards',
  props: {
    courses: {
      type: Array,
      required: true,
    },
  },
};
</script>


<template>
 <div class="course-cards">
    <div class="course-card" v-for="course in courses" :key="course.id">
      <h3>{{ course.course }}</h3>
      <p><strong> {{ course.university }}</strong></p>
      <p><a :href="course.url" target="_blank">{{ course.url }}</a></p>
    </div>
  </div>
</template>


<style scoped>
.course-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 20rem auto 0;
  width: 80%;
}

.course-card {
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  width: calc(33.333% - 1rem);
  box-sizing: border-box;
}

.course-card h3 {
  margin: 0 0 0.5rem 0;
}

.course-card p {
  margin: 0.5rem 0;
}

.course-card a {
  color: #2563eb;
  text-decoration: none;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.course-card a:hover {
  text-decoration: underline;
}
</style>