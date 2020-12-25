<template>
  <div class="home">
    <h1>List Post</h1>
    <ul v-for="post in postLimitByFive" :key="post.id">
      <li><router-link :to="`user/${post.userId}`">{{post.title}}</router-link></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";

export default {
  name: "Home",
  data: () => {
    return {
      posts: "",
    };
  },
  computed: {
    postLimitByFive(){
      return this.posts.slice(0,5);
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    async getPosts() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.posts = res.data;
      }catch(err){
        console.log(err);
      }
    },
  },
  created(){
    this.getPosts();
  }
};
</script>
