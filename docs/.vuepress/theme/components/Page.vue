<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
  h1
    font-weight 500
  h2
    font-weight 500  
  h3
    font-weight 500
  background #FFF
  a
    font-weight 400
  .theme-default-content 
    img
      margin-top 30px
      margin-bottom 30px
      display block
      margin-left auto
      margin-right auto
  .custom-block.tip .custom-block.warning .custom-block.danger
    margin-top 35px
    margin-bottom 35px

</style>
