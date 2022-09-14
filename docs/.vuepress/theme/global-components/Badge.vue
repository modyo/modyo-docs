<script>
export default {
  functional: true,
  props: {
    type: {
      type: String,
      default: 'tip'
    },
    text: String,
    vertical: {
      type: String,
      default: 'middle'
    }
  },
  render (h, { props, slots }) {
    return h('span', {
      class: ['badge', props.type],
      style: {
        verticalAlign: props.vertical
      }
    }, props.text || slots().default)
  }
}
</script>

<style lang="stylus" scoped>
.badge
  display inline-block
  font-size 16px
  height auto
  line-height 20px
  border-radius 3px
  padding 2px 6px
  color white
  background-color #42b983
  &.tip, &.green
    background-color #42b983
  &.error
    background-color #DA5961 //#f66
  &.warning, &.warn, &.yellow
    background-color darken(#ffe564, 35%)
  &.core
    background-color #393f4c
  &.content
    background-color #EC3E44
  &.channels
    background-color #2893E7
  &.customers
    background-color #3DC681
  &.insights
    background-color #5A3B7E
  & + &
    margin-left 5px
</style>
