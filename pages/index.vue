<template>
  <div>
    <!-- Nav Bar -->

    <navBar></navBar>

  <!-- Search Box Section -->

  <div class="searchBox">
      <b-form-group >
        <b-form-input v-model="search" size="lg" placeholder="Search Hadith...">
          </b-form-input>
      </b-form-group>
  </div>

  <!-- Main Heading -->

  <div>
    <h2 class="mainHeading">Hadith of the Day</h2>
  </div>

  <!------------------->
  <!-- Top 4 Cards ---->
  <!------------------->
  <b-row>
    <b-col>
    <b-card no-body style="max-width: 20rem;"
    img-src="https://placekitten.com/380/200"
    img-alt="Image"
    >
        <b-card-body>
          <b-card-title class="title">
          <h2>Title</h2>
          </b-card-title>
          <b-card-text class="title">
            <p>Body text</p>
          </b-card-text>
        </b-card-body>
        <b-card-footer> <img width="30px" style="float: right;" src="../static/share-icon.webp"> </b-card-footer>
      </b-card>
    </b-col>

     <b-col>
    <b-card no-body style="max-width: 20rem;"
    img-src="https://placekitten.com/380/200"
    img-alt="Image"
    >
        <b-card-body>
          <b-card-title class="title">
          <h2>Title</h2>
          </b-card-title>
          <b-card-text class="title">
            <p>Body text</p>
          </b-card-text>
        </b-card-body>
        <b-card-footer> <img width="30px" style="float: right;" src="../static/share-icon.webp"> </b-card-footer>
      </b-card>
    </b-col>

     <b-col>
    <b-card no-body style="max-width: 20rem;"
    img-src="https://placekitten.com/380/200"
    img-alt="Image"
    >
        <b-card-body>
          <b-card-title class="title">
          <h2>Title</h2>
          </b-card-title>
          <b-card-text class="title">
            <p>Body text</p>
          </b-card-text>
        </b-card-body>
        <b-card-footer> <img width="30px" style="float: right;" src="../static/share-icon.webp"> </b-card-footer>
      </b-card>
    </b-col>

     <b-col>
    <b-card no-body style="max-width: 20rem;"
    img-src="https://placekitten.com/380/200"
    img-alt="Image"
    >
        <b-card-body>
          <b-card-title class="title">
          <h2>Title</h2>
          </b-card-title>
          <b-card-text class="title">
            <p>Body text</p>
          </b-card-text>
        </b-card-body>
        <b-card-footer> <img width="30px" style="float: right;" src="../static/share-icon.webp"> </b-card-footer>
      </b-card>
    </b-col>
  </b-row>
  <br />
  <hr />
  <br />

  <!------------------->
  <!-- Loop of Cards -->
  <!------------------->

   <div class="grid">
    <transition-group name="items" tag="section" class="content">
      <div v-for="user in users" :key="user.id" class="item">
    <b-card no-body style="max-width: 20rem;"
    img-src="https://placekitten.com/380/200"
    img-alt="Image"
    >
        <b-card-body>
          <b-card-title class="title">
          <nuxt-link :to="{name:'posts-id', params: {id:user.id}}"> {{user.title.slice(0, 15)}} </nuxt-link>
          </b-card-title>
          <b-card-text class="title">
            <p>{{user.body.slice(0, 100)}} ...</p>
          </b-card-text>
        </b-card-body>
        <b-card-footer> <img width="30px" style="float: right;" src="../static/share-icon.webp"> </b-card-footer>
      </b-card>

    </div>
    </transition-group>
    </div>

    <!-- Pagination -->

    <b-pagination class="customPagination" style="margin-left: 0; " size="md" :total-rows="totalUsers" v-model="currentPage" :per-page="perPage"></b-pagination>

    <!-- Pagination -->

  </div>
</template>
<script>
  import navBar from '../components/navBar'
  import { BIconSearch } from 'bootstrap-vue'

export default {
  components: {
    navBar,
    BIconSearch,
  },
  data(){
    return{
    title:"Posts Page",
    search:"",
    users: [],
    loading: false,
    setIntervalId: null,
    currentPage: 0,
    perPage: 15,
    totalUsers: 0
    }
  },
  head(){
    return{
      title:this.title,
      meta:[
           { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  mounted() {
    this.fetchData().catch(error => {
      console.error(error)
    })
  },
  methods: {
        async fetchData() {
      this.users = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${this.currentPage}&_limit=${this.perPage}`)
        .then(res => {
          this.totalUsers = parseInt(res.headers.get('x-total-count'), 10)

          return res.json()
        })
        .then(users => users)
    }
  },
  computed:{
     filteredPeople: function() {
          return this.users.filter((user) => {
            return user.title.match(this.search);       });
        }
  },
watch: {
    currentPage: {
      handler: function(value) {
        this.fetchData().catch(error => {
          console.error(error)
        })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
body{
  background:linear-gradient(#DFE1F0, #fff);
}
.searchBox{
  width: 50%;
  display: block;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 80px;
}
.mainHeading{
  text-align: center;
  margin-bottom: 50px;
}
.content {
  height: 100%;
  width: 100%;
}

.img-contain {
  max-height: 100px;
  display: flex;
  align-content: center;
  align-items: center;
  img {
    width: 100%;
  }
}

.item {
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
}

aside {
  height: 100%;
  width: 100%;
}

.max {
  display: inline-block;
  float: right;
}

.content {
  /*no grid support*/
  float: right;
  width: 100%;
  /* grid */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  padding: 0 !important;
}

@media (max-width: 600px) {
  .content {
    width: 100% !important;
    grid-template-columns: 1fr !important;
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .content {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media screen and (max-width: 550px) {
  .storegrid {
    width: 90%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
  }
}
.customPagination{
  padding:50px;
  margin:5px;
  float:right;
}

</style>
