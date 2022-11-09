<template>
    <form @submit.prevent="handleSubmit">
     <label>Name:</label>
     <input type="email" v-model="name" required>
     
     <label>Username:</label>
     <input type="email" v-model="username" required>
 
     <label>Password:</label>
     <input type="password" v-model="password" required>
      
     <div class="submit">
       <button>Create an Account</button>
     </div>
   </form>
 </template>
 
 <script>
 import axios from 'axios';
 export default {
   name: 'SignUp', 
   data() {
     return {
        name:'',
        username: '',
        password: '',
     }
   },
   methods: {
    submit: function () {
      const path = "http://127.0.0.1:8000/register"; //para hacer el fetch al back
      axios
        .post(path, {
            name: this.name,
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
     color: #aaa;
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
     border-bottom: 1px solid #ddd;
     color: #555;
   }
     input[type="checkbox"] {
     display: inline-block;
     width: 16px;
     margin: 0 10px 0 0;
     position: relative;
     top: 2px;
   }
     .pill {
     display: inline-block;
     margin: 20px 10px 0 0;
     padding: 6px 12px;
     background: #eee;
     border-radius: 20px;
     font-size: 12px;
     letter-spacing: 1px;
     font-weight: bold;
     color: #777;
     cursor: pointer;
   }
   button {
     background: #4f76b1;
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