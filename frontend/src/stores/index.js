import { createStore } from 'vuex';
import { mockCourses } from '@/mockData.js';

const store = createStore({
  state: {
    courses: [],
    sortOption: 'rank', 
    searchQuery: '', 
  },
  mutations: {
    setCourses(state, courses) {
      state.courses = courses;
    },
    setSortOption(state, option) {
      state.sortOption = option;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
  },
  actions: {
    fetchCourses({ commit }, category) {
      const filteredCourses = mockCourses.filter(course => course.category === category || category === 'all');
      commit('setCourses', filteredCourses);
    },
  },
  getters: {
    filteredCourses(state) {
      let courses = state.courses;

      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        courses = courses.filter(course =>
          course.name.toLowerCase().includes(query) || 
          course.university.toLowerCase().includes(query)
        );
      }

      if (state.sortOption === 'rank') {
        courses = courses.sort((a, b) => a.rank - b.rank);
      } else if (state.sortOption === 'university') {
        courses = courses.sort((a, b) => a.university.localeCompare(b.university));
      }

      return courses;
    },
  },
});

export default store;