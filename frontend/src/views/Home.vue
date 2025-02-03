<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Header from '@/components/Header.vue';
import CourseDropdown from '@/components/CourseDropdown.vue';
import CourseSort from '@/components/CourseSort.vue';
import CourseSearch from '@/components/CourseSearch.vue';
import CourseTable from '@/components/CourseTable.vue';
import CourseCards from '@/components/CourseCards.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    CourseDropdown,
    CourseSort,
    CourseSearch,
    CourseTable,
    CourseCards,
    Footer,
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
  computed: {
    ...mapState(['courses', 'sortOption', 'searchQuery']),
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
    updateSortOption(option) {
      this.$store.commit('setSortOption', option);
    },
    updateSearchQuery(query) {
      this.$store.commit('setSearchQuery', query);
    },
  }
};
</script>

<template>
  <div>
    <Header />
    <CourseDropdown />
    <CourseSort @sort="updateSortOption" />
    <CourseSearch @search="updateSearchQuery" />
    <div v-if="viewMode === 'table'">
      <CourseTable :courses="filteredCourses" />
    </div>
    <div v-else>
      <CourseCards :courses="filteredCourses" />
    </div>
    <Footer />
  </div>
</template>


<style scoped>

</style>