<template>
  
  <div class="centerdiv">
        <!-- Posts start -->
        <div class="posts">
        <!--Post 1-->
        <div class="user-post">
            <div class="user-post-header">
                <img src="me.png" width="25" height="25" alt="Post">
                
                <p id="date1"></p>
                <div id="myData"></div>
            </div>
            <br>
            <div class="post-image">
                <img src="https://www.tartu.ee/sites/default/files/field/image/tartu2024-Maam2rk-meeskonnapilt-kiurkaasik-7.jpg" alt="Tartu 2024">
            </div>
            <br>
            <div class="user-post-footer">
                Did you know that Tartu is the culture capital of the world in 2024? #Tartu2024 
            </div>
            <div class="like-button">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png" width="25" height="25" alt="Like button">
            </div>
        </div>
        <!--Post 2-->
        <div class="user-post">
            <div class="user-post-header">
                <img src="mem" width="25" height="25" alt="Post author picture">
                <p>Oct 02, 2022</p>
            </div>
            <br>
            <div class="user-post-footer">
                Life in tartu is so boring, no culture here am I right?
            </div>
            <div class="like-button">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png" width="25" height="25" alt="Like button">
            </div>
        </div>
        <!--Post 3-->
        <div class="user-post">
            <div class="user-post-header">
                <img src="mem" width="25" height="25" alt="Post author picture">
                <p>Oct 01, 2022</p>
            </div>
            <br>
            <div class="user-post-footer">
            Hey qtpie, it looks like you haven't checked out my <a href="#">Onlyfans</a> page yet!
            </div>
            <div class="like-button">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png" width="25" height="25" alt="Like button">
            </div>
        </div>
        <!--Post 4-->
        <div class="user-post">
            <div class="user-post-header">
                <img src="mem" width="25" height="25" alt="Post author picture">
                <p>Sept 29, 2022</p>
            </div>
            <br>
            <div class="post-image">
                <img src="https://preview.redd.it/6d5tngnsv6r91.png?width=640&crop=smart&auto=webp&s=829033a225508c39fe6109ef1c3911fd24dae348" alt="Dank meme">
            </div>
            <br>
            <div class="user-post-footer">
                Some dank memes for my followers
            </div>
            <div class="like-button">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png" width="25" height="25" alt="Like button">
            </div>
        </div>
        <!--Post 5-->
        <div class="user-post">
            <div class="user-post-header">
                <img src="mem" width="25" height="25" alt="Post author picture">
                <p>Jan 01, 2022</p>
            </div>
            <br>
            <div class="user-post-footer">
                If I had a dollar for every bug I solve in a minute I'd earn an extra minimum wage #pleb
            </div>
            <div class="like-button">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png" width="25" height="25" alt="Like button">
            </div>
        </div>
        </div> 
        <!-- Posts end -->
    </div>
    
  <TheFooter />
</template>

<script>

import TheFooter from './TheFooter.vue'
export default {
  name: 'Mainpage',
  components:{
    TheFooter
  },
  props: {
    msg: String
  },
  data: function() {
    return {
  mem: require('../assets/me.png')
    }
    
}
}


</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.posts {
  display: flex;
  justify-content: space-around;
  flex: row;
  flex-wrap: wrap;
}

.user-post {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 300px;
    max-width: 400px;
    height: auto;
    margin-top: 5px;
    background-color: darkgray;
    border-radius: 10px;
    padding: 5px 2px;

    flex: 0 1 99%;

}

@media screen and (max-width: 600px) {
  .user-post {
    flex: 0 1 48%;
  }
}

.user-post-header{
  position: relative;
  padding: 5px;
}

.user-post-header img {
  float: left;
  border-radius: 50%;
}
.user-post-header p {
  float: right;
}
.post-image img{
  height: 200px;
}
.user-post-footer {
  width: auto;
}
.like-button{
  width: auto;
}
img + p:hover {
  color: red;
}

</style>
