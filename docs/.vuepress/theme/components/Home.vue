<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
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
  text-align center
  .theme-default-content
    background #f6f7f7
    margin-top 40px
  .hero
    text-align center
    padding-top 20px
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 2.5rem
      font-weight 500
    h1, .description, .action
      margin 1.8rem auto
    .description
      color #737a96
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
      margin-top 10px
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background #3FB85A
      padding 0.8rem 1.6rem
      border-radius 4px
      border 0
      transition background-color .1s ease
      box-sizing border-box
      &:hover
        background-color lighten(#3FB85A, 10%)
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
    text-align center
    p
      height 90px
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.3rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color #343A40
    p
      color #343A40
    img
      width 40%
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
