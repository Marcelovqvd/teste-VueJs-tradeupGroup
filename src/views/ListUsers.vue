<template>
  <div id="app">
    <div class="container">
      <nav><router-link to="/">Home</router-link></nav>
      <h2>Lista de Usuários</h2>
      <ul>
        <li v-for="user in users.data" :key="user.id">
          <p>
            <span> {{ user.first_name }} </span>
          </p>
          <p>{{ user.email }}</p>
          <router-link :to="`/${user.id}`">Detalhes</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.getUsersList();
  },
  methods: {
    getUsersList() {
      axios.get("https://reqres.in/api/users?page=2").then(response => {
        this.users = response.data;
      });
    }
  }
};
</script>

<style>
h2 {
  text-align: center;
}

ul {
  list-style: none;
}

li {
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
}

span {
  font-size: 26px;
}

a {
  font-size: 16px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  background-color: #000;
  color: #fff;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
