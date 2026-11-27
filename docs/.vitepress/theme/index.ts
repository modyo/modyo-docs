import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ModyoHome from './ModyoHome.vue'
import { HOME_LAYOUT } from '../lib/page-data'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component(HOME_LAYOUT, ModyoHome)
  },
} satisfies Theme
