<script>
export default {
    name: 'CourseTable',
    props: {
        courses: {
            type: Array,
            required: true,
        },
    },
};

</script>

<template>
    <table class="course-table">
    <thead>
      <tr>
        <th>Rank</th>
        <th>Course</th>
        <th>University</th>
        <th>URL</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="course in courses" :key="course.id">
        <td>{{ course.rank }}</td>
        <td>{{ course.course }}</td>
        <td>{{ course.university }}</td>
        <td><a :href="course.url" target="_blank">{{ course.url }}</a></td>
      </tr>
    </tbody>
  </table>
</template>


<style scoped>
.course-table {
  width: 80%;
  border-collapse: collapse;
  margin: 8rem auto auto;
}

th, td {
  padding: 0.5rem;
  border: 1px solid #ccc;
}

th {
  background-color: #f0f0f0;
}
</style>