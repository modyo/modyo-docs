<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <div class="main">
        <div class="main-l">
          <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>
          <p class="subtitle">
            {{ data.tagline || $description || 'Welcome to your VuePress site' }}
          </p>
          <p class="action" v-if="data.actionText && data.actionLink">
            <NavLink
              class="action-button"
              :item="actionLink"
            />
          </p>
        </div>
        <div class="main-r">
          <img
            v-if="data.heroImage"
            :src="$withBase(data.heroImage)"
            :alt="data.heroAlt || 'hero'"
          >
        </div>
      </div>
    </header>

    <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom"/>

    <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 0 0
  max-width 960px
  margin 0px auto
  display block
  max-width none
  text-align left
  .theme-default-content
    background #151f38
  .hero
    text-align left
    padding-top 20px
    background-image url(https://cloud.modyocdn.com/uploads/9a04c95c-d501-470b-a2ca-66c9ba14e7a8/original/ellipse.png)
    background-repeat no-repeat
    background-position right 250px   
    img
      max-width: 100%
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 4.0rem
      font-weight 700
      line-height 0.9
      letter-spacing -2.5px
    h1, .description, .action
      margin 1.6rem auto
    .subtitle
      color #737a96
      font-weight 400
      max-width 35rem
      font-size 1.4rem
      line-height 1.3
      color #737988
      text-align left
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background #0ebd74
      margin-top 20px
      margin-right 8px
      padding 0.8rem 1.6rem
      border-radius 4px
      border 0
      transition background-color .1s ease
      box-sizing border-box
      &:hover
        background-color darken(#0ebd74, 30%)
    .main
      display flex
      align-items center
      justify-content center
      padding-top 40px
      padding-bottom 40px
      .main-l
        width 600px
      .main-r
        width 300px
  .features
    border-top 0
    padding 2.5rem 0
    margin-top 3rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
    max-width 960px
    margin 0 auto
    text-align left
    p
      height 90px
  .feature
    margin-top 1rem
    margin-bottom 1rem
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.3rem
      font-weight 600
      border-bottom none
      padding-bottom 0
      color #ffffff
      text-align left
    p
      color #ffffff
      text-align left
    img
      width 40%
    a
      color #0ebd74
      font-weight 600
      text-align left
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color #737a96

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
