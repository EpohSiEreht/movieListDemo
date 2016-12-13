<template>
  <div id="app">
    <div class="movie-header">
      <div class="header-title">
        <h1>{{ msg.h1 }}</h1>
        <h2>{{ msg.h2 }}</h2>
      </div>
      <div id="view-more">
        <a id="movie-link" href="">View More</a>
      </div>
    </div>
    <div class="movie-info">
      <!-- swiper -->
      <swiper :options="swiperOption" ref="mySwiperA">
        <swiper-slide>
          <div class="movie-content">
            <div class="movie-text">
              <h3>{{ movies.popular[0].title }}</h3>
              <p>{{ movies.popular[0].desc }}</p>
            </div>
            <div class="movie-rating">
              <div class="star-ratings-sprite"><span v-bind:style="{ width: movies.popular[0].rating + '%'}" class="star-ratings-sprite-rating"></span></div>
            </div>
          </div>
          <div class="movie-poster">
            <img :src="movies.popular[0].poster" alt="Slide 1">
          </div>
        </swiper-slide>
        <swiper-slide> 
          <div class="movie-content">
            <div class="movie-text">
              <h3>{{ movies.popular[1].title }}</h3>
              <p>{{ movies.popular[1].desc }}</p>
            </div>
            <div class="movie-rating">
              <div class="star-ratings-sprite"><span v-bind:style="{ width: movies.popular[1].rating + '%'}" class="star-ratings-sprite-rating"></span></div>
            </div>
          </div>
          <div class="movie-poster">
            <img :src="movies.popular[1].poster" alt="Slide 2">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="movie-content">
            <div class="movie-text">
              <h3>{{ movies.popular[2].title }}</h3>
              <p>{{ movies.popular[2].desc }}</p>
            </div>
            <div class="movie-rating">
              <div class="star-ratings-sprite"><span v-bind:style="{ width: movies.popular[2].rating + '%'}" class="star-ratings-sprite-rating"></span></div>
            </div>
          </div>
          <div class="movie-poster">
            <img :src="movies.popular[2].poster" alt="Slide 3">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="movie-content">
            <div class="movie-text">
              <h3>{{ movies.popular[3].title }}</h3>
              <p>{{ movies.popular[3].desc }}</p>
            </div>
            <div class="movie-rating">
              <div class="star-ratings-sprite"><span v-bind:style="{ width: movies.popular[3].rating + '%'}" class="star-ratings-sprite-rating"></span></div>
            </div>
          </div>
          <div class="movie-poster">
            <img :src="movies.popular[3].poster" alt="Slide 4">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="movie-content">
            <div class="movie-text">
              <h3>{{ movies.popular[4].title }}</h3>
              <p>{{ movies.popular[4].desc }}</p>
            </div>
            <div class="movie-rating">
              <div class="star-ratings-sprite"><span v-bind:style="{ width: movies.popular[4].rating + '%'}" class="star-ratings-sprite-rating"></span></div>
            </div>
          </div>
          <div class="movie-poster">
            <img :src="movies.popular[4].poster" alt="Slide 5">
          </div>
        </swiper-slide>

        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import movies from './assets/movies.json';

export default {
  name: 'app',
  data () {
    return {
      msg: {
        h1: "In Theaters",
        h2: "Top Movies This Week",
        viewMore: "View More",
      },
      movies,
      swiperOption: {
        autoplay: 0,
        direction : 'horizontal',
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        scrollbar:'.swiper-scrollbar',
        mousewheelControl : true,
        keyboardControl : true,
        observeParents:true,
        debugger: true,
        onInit(swiper){
          // Update view more link on init
          const linkEl = document.getElementById('movie-link');
          const index = swiper.activeIndex;
          linkEl.href = movies.popular[index].link;
        },
        onSlideChangeEnd(swiper){
          // Update view more link on slide transition
          const linkEl = document.getElementById('movie-link');
          const index = swiper.activeIndex;
          linkEl.href = movies.popular[index].link;
        },
      }
    }
  }
}
</script>

<style>
body {
  display: flex;
  justify-content: center;
  background-image: linear-gradient(transparent 0px, transparent 1.15926px, rgb(255, 255, 255) 1.15926px, rgb(255, 255, 255) 11.5926px), linear-gradient(to right, rgb(200, 195, 199) 0px, rgb(200, 195, 199) 1.15926px, rgb(255, 255, 255) 1.15926px, rgb(255, 255, 255) 11.5926px);
  background-position: 170.639px 23.2223px;
  background-size: 11.5926px 11.5926px;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 90%;
  max-width: 500px;
  height: 400px;
  padding: 15px;
  border: 1px solid gray;
  position: relative;
  background-color: #fff;
}

h1, h2, h3 {
  font-style: normal;
  font-stretch: normal;
  text-align: left;
  margin: 5px 0;
}

h1 {
  font-size: 30px;
  font-weight: 300;
  color: #3b3f47;
}

h2 {
  font-size: 18px;
  font-weight: normal;
  letter-spacing: 0.5px;
  color: #6b6b6b;
}

.movie-header {
  position: relative;
  height: auto;
  display: inline-flex;
  align-items: center;
  width: 100%;
  margin: 10px 0;
}

#view-more {
  position: absolute;
  right: 0;
  top: 12px;
}

a {
  color: #276cf2;
}

a:link {
  text-decoration: none;
}

.movie-info {
  height: 300px;
  overflow-x: hidden;
}

.movie-content {
  position: relative;
  width: 60%;
  text-align: left;
  padding: 15px;
}

.movie-content p {
  font-size: 18px;
  margin: 10px 0;
}

.movie-poster {
  position: relative;
  width: 40%;
  height: 100%;
  text-align: right;
}

.movie-poster img {
  height: 100%;
  border-radius: 0 5px 5px 0;
}

/* SLIDER STYLING */
.swiper-wrapper {
  display: inline-flex;
  height: 250px;
}

.swiper-slide {
  display: flex;
  border-radius: 5px;
  background-color: #f2f3f5;
}

.swiper-pagination {
  width: 100%;
  height: 20px;
  margin-top: 20px;
  display: inline-flex;
  justify-content: center;
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #979797;
  margin: 5px;
  cursor: pointer;
}

.swiper-pagination-bullet-active {
  background-color: #979797;
}

/* RATING SYSTEM */
.star-ratings-sprite {
  position: absolute;
  left: 15px;
  bottom: 20px;
  background: url("./assets/star-sprite.png") repeat-x;
  font-size: 0;
  height: 21px;
  line-height: 0;
  overflow: hidden;
  text-indent: -999em;
  width: 110px;
  margin: 0 auto;
}

.star-ratings-sprite-rating {
  background: url("./assets/star-sprite.png") repeat-x;
  background-position: 0 100%;
  float: left;
  height: 21px;
  display: block;
}
</style>