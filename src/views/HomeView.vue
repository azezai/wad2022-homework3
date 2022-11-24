<template>
  <section class="content-area">
    <div class="left">
    </div>
  <div class="centerdiv">
    <!-- Posts start -->
    <div class="posts">
      <div :key="post.id" v-for="post in posts" class="user-post" >
      <div class="user-post-header">
        <img 
        :src="[post.profile === '' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXiGmEyNs2kbk30k1E3aH2ezJT-MUV5ouDy-ESy6WqFYMwdbk' : post.profile ]" 
        width="25" height="25" 
        alt="User profile picture"
        />
        <p>{{ post.date }}</p>
        <div id="myData"></div>
      </div>
      <br>
      <div v-if="!(post.img === '')" class="post-image">
        <img :src="post.img" alt="Post image">
      </div>
      <br>
      <div class="user-post-footer">
          <p>{{ post.body }}</p>
      </div>
      <div class="like-button">
          <button 
            @click="like(post)" 
            style="background-color:darkgrey;border:none">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png" width="25" height="25" alt="Like button" />
                <p>{{ post.likes }} likes</p>
          </button>
        </div>
      </div>
    </div>
        
  <!-- Posts end -->
  </div>
  <br>
    
  <div class="right"></div>
</section>
<div class="reset-button">
  <button @click.stop="counter = 0, counter1=0, counter2 = 0, counter3=0, counter4=0, counter5 = 0, counter6=0, counter7 = 0, counter8=0, counter9=0 " > Reset Likes</button>
</div> 
<br>
<br>
<br> 
</template>


<script>


export default {
  name: 'HomeView',
  components:{
  },
  props: {
    msg: String
  },
  methods: {
    like(post) {
      this.$store.commit('like', post.id)
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  created() {
      console.log(this.$store.state.posts[0])
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
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  background-color: darkgray;
  border-radius: 10px;
  padding: 5px 2px;
}
img + p:hover {
  color: red;
}

.left {
  margin-top: 5px;
  grid-area: leftside;
  background-color: darkgray;
  border-radius: 10px;
}
.centerdiv {
  grid-area: center;
  border-radius: 10px;
}
.reset-button {
  
    margin: 0 auto;
    display: block;
  }

  

.right {
  margin-top: 5px;
  grid-area: rightside;
  background-color: darkgray;
  border-radius: 10px;
}
.content-area {
  display: grid;
  grid-template-areas: 'leftside center center center rightside';
  grid-template-columns: 20% 1fr 1fr 1fr 20%;
  gap: 10px;

  width: calc(100% - 10px);
}
</style>
