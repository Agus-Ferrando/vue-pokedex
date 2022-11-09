<template>
    <form @submit.prevent="handleSubmit">
          
     <label>Username:</label>
     <input type="text" v-model="username" required>
 
     <label>Password:</label>
     <input type="password" v-model="password" required>
      
     <div class="submit">
       <button>Log In</button>
     </div>
   </form>
 </template>
 
 <script>
 import axios from 'axios';
 export default {
   name: 'LogIn', 
   data() {
     return {
        username: '',
        password: '',
     }
   },
   methods: {
    submit: function () {
      const path = "http://127.0.0.1:8000/login"; //para hacer el fetch al back
      axios
        .post(path, {
            username: this.username,
            password: this.password
        })
        .then((response) => {
          this.$router.push('/search')
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
   }
 }
 </script>
 
 <style>
   form {
     max-width: 420px;
     margin: 30px auto;
     background: white;
     text-align: left;
     padding: 40px;
     border-radius: 10px;
   }
   label {
     color: rgb(133, 131, 131);
     display: inline-block;
     margin: 25px 0 15px;
     font-size: 0.6em;
     text-transform: uppercase;
     letter-spacing: 1px;
     font-weight: bold;
   }
   input {
     display: block;
     padding: 10px 6px;
     width: 100%;
     box-sizing: border-box;
     border: none;
     border-bottom: 1px solid #ddd;
     color: #555;
   }
   input, select {
     display: block;
     padding: 10px 6px;
     width: 100%;
     box-sizing: border-box;
     border: none;
     border-bottom: 1px solid rgb(133, 131, 131);
     color: #555;
   }

   button {
     background: rgb(161, 40, 40);
     border: 0;
     padding: 10px 20px;
     margin-top: 20px;
     color: white;
     border-radius: 20px;
   }
   .submit {
     text-align: center;
   }
 
 </style>