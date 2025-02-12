import { createStore } from 'vuex';
import { mockCourses } from '@/mockData.js';

const store = createStore({
  state: {
    courses: [],
    sortOption: 'rank',
    searchQuery: '',
    category: '',
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
    setCategory(state, category) {
      state.category = category;
    }
  },
  actions: {
    fetchCourses({ commit, state }) {
      let filteredCourses = mockCourses;

      if (state.category !== 'All courses') {
        filteredCourses = filteredCourses.filter(course => course.category === state.category);
      }

      commit('setCourses', filteredCourses);
    },
  },
  getters: {
    filteredCourses(state) {
      let courses = state.courses;

      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        courses = courses.filter(course =>
          course.course.toLowerCase().includes(query) ||
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