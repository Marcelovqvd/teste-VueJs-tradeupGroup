<template>
  <div class="container">
    <h2>Home</h2>

    <form action="#" @submit.prevent="login">
      <label for="email">Email:</label>
      <input
        type="email"
        name="username"
        id="username"
        v-model="username"
        placeholder="Digite aqui seu email"
      />
      <label for="password">Senha:</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="password"
        placeholder="Digite sua senha"
      />
      <button type="submit">Login</button>
    </form>
    <nav><router-link to="/ListUsers">Lista de usuários</router-link></nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}
form {
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

label {
  margin-bottom: 10px;
  color: rgb(38, 0, 255);
}

input {
  margin-bottom: 40px;
  width: 380px;
  padding: 5px;
  border-radius: 5px;
}

button {
  margin: 10px;
  width: 120px;
  border-radius: 5px;
  background-color: aqua;
  color: black;
}

a {
  font-size: 26px;
}

a:hover {
  color: red;
}
</style>
