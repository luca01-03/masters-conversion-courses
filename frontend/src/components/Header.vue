<script>
export default {
    name: 'Header',
    methods: {
        ChangeView() {
            this.$emit('toggle-view');
        }, 
        DarkMode() {
            this.$emit('toggle-view');
        }
    }
}
</script>

<template>
    <header class="header">
        <h1>Master's Conversion Courses in the UK</h1>
        <p>Browse top-ranked conversion courses by category</p>
        <div class="header-buttons">
            <button @click="ChangeView">
                Switch to Card View
            </button>
            <button @click="DarkMode">
                Dark Mode
            </button>
        </div>
    </header>
</template>


<style scoped>
.header {
  background-color: #1e3a8a;
  color: #ffffff;
  padding: 1.5rem;
  position: fixed;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
}

.header h1 {
  font-size: 1.75rem;
  margin: auto;
  font-weight: bold;
}

.header p {
  margin-top: 0.5rem;
  font-size: 1.125rem;
}

.header-buttons {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
}

.header-buttons button {
  background-color: #2563eb; 
  color: #ffffff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.header-buttons button:hover {
  background-color: #1d4ed8;
}

</style>