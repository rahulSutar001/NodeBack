<template>

<div>
<label for="">say someting</label>
<!-- Show Data IN JSON -->
<!-- <pre>{{ JSON.stringify(posts, null, 2) }}</pre>   -->
<br/>
<input type="text" v-model="text" placeholder="Create a Post">
<button v-on:click="createPost">Post</button>
</div>

</template>

<script>
import PostService from '../PostService';

export default {
  name: 'PostComponent',
  data(){
    return{
      posts: [],
      error: '',
      text: ''
    }
  },
  async created(){
    try {
        this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message; 
    }
  },
  methods: {
    async createPost(){
      await PostService.insertPosts()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
