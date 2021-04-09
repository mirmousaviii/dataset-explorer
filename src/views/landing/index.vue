<template>
  <div class="page-container">
    <!-- TODO: Make it to search component -->
    <div class="search-box">
      <form>
        <md-field md-clearable>
          <label for="search-box">Search datasets...</label>
          <md-input v-model="search" id="search-box"></md-input>
        </md-field>
      </form>
    </div>
    <div class="result-container">
      <h1>{{ filteredList.length }} datasets found</h1>
      <!-- TODO: Make it to dataset component -->
      <div class="result-content" v-for="item in filteredList" :key="item.id">
        <p class="name">{{ item.name }}</p>
        <a :href="`${publicPath}${item.path}`" target="_blank" download>csv</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      publicPath: window.location.href,
      search: '',
      list: [
        {
          'id': 1,
          'name': 'Employees',
          'path': 'data/employees.csv',
        }, {
          'id': 2,
          'name': 'Customers',
          'path': 'data/customers.csv',
        }, {
          'id': 3,
          'name': 'Products',
          'path': 'data/products.csv',
        }, {
          'id': 4,
          'name': 'Orders',
          'path': 'data/orders.csv',
        }],
    };
  },
  computed: {
    /**
     * Filter list by search item
     * @returns {({path: string, name: string, id: number}|{path: string, name: string, id: number}|{path: string, name: string, id: number}|{path: string, name: string, id: number})[]}
     */
    filteredList: function() {
      return this.list.filter((e) => {
        return (
          e.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
          e.path.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
        );
      });
    },
  },
};
</script>

<style scoped>
.search-box {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.04);
}

.result-container {
  padding: 20px;
  margin-bottom: 30px;
}

.result-container h1 {
  font-size: 2.5rem;
  margin-bottom: 50px;
}

.result-content {
  margin-bottom: 30px;
}

.result-content p:first-child {
  font-weight: 700;
  color: #000000bd;
}

.result-content a {
  background-color: #ffa90cb0;
  padding: 2px 8px;
  border-radius: 4px;
  color: white !important;
  text-decoration: none !important;
}
</style>
