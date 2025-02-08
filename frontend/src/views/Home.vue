<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import CourseDropdown from '@/components/CourseDropdown.vue';
import CourseSort from '@/components/CourseSort.vue';
import CourseSearch from '@/components/CourseSearch.vue';
import CourseTable from '@/components/CourseTable.vue';
import CourseCards from '@/components/CourseCards.vue';

export default {
  name: 'Home',
  components: {
    CourseDropdown,
    CourseSort,
    CourseSearch,
    CourseTable,
    CourseCards,
  },
  props: {
    viewMode: {
      type: String,
      default: 'table'
    },
    category: {
      type: String,
      default: 'all'
    },
    searchQuery: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      categories: ['All courses', 'law', 'medicine'],
      sortOptions: ['rank', 'university'],
    };
  },
  computed: {
    ...mapState(['courses','sortOption', 'searchQuery', 'category']),
    ...mapGetters(['filteredCourses']),
  },
  watch: {
    category: {
      immediate: true,
      handler(newCategory) {
        this.fetchCourses(newCategory);
      },
    },
    searchQuery: {
      handler(newQuery) {
        this.updateSearchQuery(newQuery);
        this.$router.push({ query: { ...this.$route.query, search: newQuery } });
      },
      immediate: true
    },
  },
  methods: {
    ...mapActions(['fetchCourses']),
    updateCategory(category) {
      this.$store.commit('setCategory', category);
      this.fetchCourses();
    },
    updateSortOption(option) {
      this.$store.commit('setSortOption', option);
      this.fetchCourses();
    },
    updateSearchQuery(query) {
      this.$store.commit('setSearchQuery', query);
    },
  },
};
</script>


<template>
  <div>
    <div class="dropdowns">
      <CourseDropdown :categories="categories" @category-change="updateCategory" />
     <CourseSort :sortOptions="sortOptions" @sort-change="updateSortOption" />
    </div>
      <CourseSearch @search="updateSearchQuery" />
    <div v-if="viewMode === 'table'">
      <CourseTable :courses="filteredCourses" />
    </div>
    <div v-else>
      <CourseCards :courses="filteredCourses" />
    </div>
  </div>
</template>


<style scoped>
.dropdowns {
  display: flex;
  justify-content: center;
  gap: 10rem;
  margin: 13rem auto 1rem;
  
}
</style>