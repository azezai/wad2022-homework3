<template>
    
    <div class="form-container">
    
    <div class="col">
        
        Please log in
      </div>
    <form action="#" method="get" id="login">
        
        <input type="email" id="Email" name="Email" placeholder="Email" required>
        <br>
        <input type="password" id="Password" name="Password" placeholder="Password" minlength="8" maxlength="20" required >
        <br> 
        
        
            <button type="submit" id="submit-button">Login</button>
        
        </form>
    <div class="col">
        <a href="#" style="color:blue" class="btn">Forgot password?</a>
        </div>
    </div>
    <TheFooter />
  </template>
  
  <script>
  
  import TheFooter from './TheFooter.vue'
  export default {
    name: 'TheSignup',
    components:{
      TheFooter
    },
    props: {
      msg: String
    }
  
  }
  </script>
  

  <style scoped>
  .form-container {
  margin: 20px auto;
  display: block;
  width: 300px;
  text-align: center;
  background-color: lightgray;
  border-radius: 10px;
  padding: 10px;

}
  
  </style>
  