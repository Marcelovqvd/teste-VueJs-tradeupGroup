<template>
  <div id="app">
    <nav><router-link to="/">Home</router-link></nav>
    <h2>Usuário</h2>
    <p>
      {{ user.data.first_name }}
    </p>
    <p>
      {{ user.data.email }}
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      user: null
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios
        .get(`https://reqres.in/api/users/${this.$route.params.id}`)
        .then(response => {
          this.user = response.data;
        });
    }
  }
};
</script>

<style>
h2 {
  text-align: center;
  margin-top: 60px;
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
  text-decoration: none;
}

p {
  font-size: 26px;
  font-weight: bold;
  margin-top: 60px;
  color: darkblue;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
