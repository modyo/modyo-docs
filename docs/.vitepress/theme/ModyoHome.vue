<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

interface Card {
  title: string
  text: string
  img: string
  alt: string
  url: string
}

const { frontmatter, site } = useData()

const ARROW = 'https://cloud.modyocdn.com/uploads/320ed6bc-5f00-4203-af7f-7ba55f2294c1/original/mdi_arrow_right_alt.png'
const PRODUCTS = ['Channels', 'Content', 'Customers', 'Insights']

const fm = computed(() => frontmatter.value)

const products = computed<Card[]>(() =>
  PRODUCTS.map((key) => ({
    title: fm.value[`${key}Title`],
    text: fm.value[`${key}Text`],
    img: fm.value[`${key}Img`],
    alt: fm.value[`${key}Alt`],
    url: fm.value[`${key}Url`],
  })).filter((card) => card.title),
)

const firstSteps = computed<Card[]>(() =>
  [1, 2, 3, 4, 5, 6]
    .map((index) => ({
      title: fm.value[`FirstSteps${index}Title`],
      text: fm.value[`FirstSteps${index}Text`],
      img: fm.value[`FirstSteps${index}Img`],
      alt: fm.value[`FirstSteps${index}Alt`],
      url: fm.value[`FirstSteps${index}Url`],
    }))
    .filter((card) => card.title),
)

const supportUrl = computed(() => `https://support.modyo.com/hc/${String(fm.value.communityLang ?? 'en').toLowerCase()}`)

function isExternal(url: string): boolean {
  return /^https?:\/\//.test(url)
}

function openSearch(): void {
  document.querySelector<HTMLElement>('.VPNavBarSearch .DocSearch-Button')?.click()
}
</script>

<template>
  <main class="modyo-home">
    <section class="hero">
      <div class="container hero-content">
        <h1 class="hero-title">{{ fm.heroText || site.title }}</h1>
        <p class="hero-tagline">{{ fm.tagline || site.description }}</p>
      </div>
    </section>

    <section class="search">
      <div class="container">
        <div class="search-card">
          <h2 class="search-title">{{ fm.search }} <span class="accent">Modyo Docs</span></h2>
          <button type="button" class="search-button" @click="openSearch">
            <span class="search-icon vpi-search" aria-hidden="true" />
            <span>{{ fm.search }} Modyo Docs</span>
          </button>
        </div>
      </div>
    </section>

    <section class="container block">
      <h2 class="section-title"><span class="accent">Modyo</span> Platform</h2>
      <p class="section-text">{{ fm.platformText }}</p>
      <div class="grid grid-4">
        <a v-for="card in products" :key="card.title" :href="card.url" class="card">
          <img :src="card.img" :alt="card.alt" class="card-icon">
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-text">{{ card.text }}</p>
        </a>
      </div>
    </section>

    <section class="container block">
      <h2 class="section-title">{{ fm.FirstStepsTitle }} <span class="accent">Modyo</span></h2>
      <p class="section-text">{{ fm.FirstStepsText }}</p>
      <div class="grid grid-3">
        <a
          v-for="card in firstSteps"
          :key="card.title"
          :href="card.url"
          :target="isExternal(card.url) ? '_blank' : undefined"
          :rel="isExternal(card.url) ? 'noopener noreferrer' : undefined"
          class="card card-row"
        >
          <img :src="card.img" :alt="card.alt" class="card-icon card-icon-small">
          <div>
            <h3 class="card-title">{{ card.title }}</h3>
            <p class="card-text">{{ card.text }}</p>
          </div>
        </a>
      </div>
    </section>

    <section class="container block split">
      <img
        src="https://cloud.modyocdn.com/uploads/31428786-0d19-4d5e-b0dc-a3fcda2160c1/original/Digital_Products_with_Micro_Frontends.png"
        alt="Digital products with micro frontends"
        class="split-image"
      >
      <div>
        <h2 class="section-title align-left">Modyo <span class="accent">{{ fm.architecture }}</span></h2>
        <p class="section-text align-left">{{ fm.architectureText }}</p>
        <a :href="fm.architectureUrl" class="arrow-link">
          {{ fm.architectureTitle }} <img :src="ARROW" alt="">
        </a>
      </div>
    </section>

    <section class="container block">
      <div class="news">
        <div class="news-image" />
        <div class="news-content">
          <h2 class="news-title">{{ fm.DontMiss }} <span class="accent">Modyo</span></h2>
          <p class="news-text">{{ fm.DontMissText }}</p>
          <a :href="fm.releaseUrl" class="arrow-link inverse">{{ fm.releaseText }} <img :src="ARROW" alt=""></a>
          <a :href="fm.roadmapUrl" target="_blank" rel="noopener noreferrer" class="arrow-link inverse">
            {{ fm.roadmapText }} <img :src="ARROW" alt="">
          </a>
        </div>
      </div>
    </section>

    <section class="help">
      <div class="container">
        <h2 class="help-title">{{ fm.communityTitle }}</h2>
        <p class="help-text">{{ fm.communityText }}</p>
        <div class="help-actions">
          <a :href="supportUrl" target="_blank" rel="noopener noreferrer" class="button button-primary">Modyo Support</a>
          <a :href="fm.communityURL" target="_blank" rel="noopener noreferrer" class="button button-outline">Modyo Community</a>
        </div>
      </div>
    </section>

    <footer v-if="fm.footer" class="footer">{{ fm.footer }}</footer>
  </main>
</template>

<style scoped>
.modyo-home {
  color: var(--modyo-c-navy);
  background: #fff;
}

.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}

.accent {
  color: var(--modyo-c-green-text);
}

.news .accent {
  color: var(--modyo-c-green);
}

.hero {
  background-color: var(--modyo-c-navy);
  background-image: url(https://cdn.modyo.cloud/uploads/24b575f5-81c2-43bc-8716-86f8e9b5dcf5/original/banner_footer.png);
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: top right;
}

.hero-content {
  padding-top: 96px;
  padding-bottom: 96px;
}

.hero-title {
  margin: 0 0 8px;
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 700;
  color: #fff;
}

.hero-title::before {
  content: "";
  display: block;
  width: 20%;
  max-width: 120px;
  height: 5px;
  margin-bottom: 1rem;
  background: var(--modyo-c-green);
}

.hero-tagline {
  margin: 0;
  font-size: 2rem;
  line-height: 1.3;
  color: #fff;
}

.search {
  background: linear-gradient(180deg, var(--modyo-c-navy) 50%, #fff 50%);
  padding-bottom: 48px;
}

.search-card {
  max-width: 864px;
  margin: 0 auto;
  padding: 48px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 5rem rgba(21, 31, 56, 0.1);
  text-align: center;
}

.search-title {
  margin: 0 0 16px;
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 700;
}

.search-button {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 3rem;
  padding: 0 16px;
  border: 1px solid #d0d2d7;
  border-radius: 6px;
  background: #f3f4f7;
  color: var(--modyo-c-muted);
  font-size: 1rem;
  cursor: pointer;
}

.search-button:hover {
  border-color: var(--vp-c-brand-1);
}

.search-icon {
  width: 20px;
  height: 20px;
}

.block {
  padding-top: 48px;
  padding-bottom: 48px;
}

.section-title {
  margin: 0 0 8px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 700;
  text-align: center;
}

.section-text {
  margin: 0 0 48px;
  font-size: 1.5rem;
  line-height: 1.4;
  color: var(--modyo-c-muted);
  text-align: center;
}

.align-left {
  text-align: left;
}

.grid {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
}

.card {
  display: block;
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 5rem rgba(21, 31, 56, 0.1);
  color: inherit;
  text-decoration: none;
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0 0 1.5rem rgba(21, 31, 56, 0.25);
}

.card-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.card-icon {
  width: 60px;
}

.card-icon-small {
  width: 50px;
  flex-shrink: 0;
}

.card-title {
  margin: 8px 0;
  font-size: 1.4rem;
  line-height: 1.2;
  font-weight: 700;
}

.card-text {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--modyo-c-muted);
}

.split {
  display: grid;
  gap: 32px;
  align-items: center;
}

.split-image {
  max-width: 100%;
}

.arrow-link {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--modyo-c-navy);
  text-decoration: none;
}

.arrow-link img {
  width: 30px;
  margin-left: 0.8rem;
  transition: margin-left 0.3s;
}

.arrow-link:hover img {
  margin-left: 1.3rem;
}

.arrow-link.inverse {
  color: #fff;
}

.news {
  display: grid;
  background: var(--modyo-c-navy);
}

.news-image {
  min-height: 240px;
  background-image: url(https://cloud.modyocdn.com/uploads/52aefd55-ba90-4542-92d5-08a57bf97f80/original/img_bcibank.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

.news-content {
  padding: 40px;
}

.news-title {
  margin: 0 0 4px;
  font-size: 2.5rem;
  line-height: 1.1;
  font-weight: 700;
  color: #fff;
}

.news-text {
  margin: 0 0 24px;
  font-size: 1.5rem;
  line-height: 1.4;
  color: var(--modyo-c-muted-on-dark);
}

.help {
  padding: 96px 0;
  background: var(--modyo-c-navy);
  text-align: center;
}

.help-title {
  margin: 0 0 4px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 700;
  color: #fff;
}

.help-text {
  margin: 0 0 8px;
  font-size: 1.5rem;
  color: #fff;
}

.help-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.button {
  display: inline-block;
  margin: 16px;
  padding: 1rem 1.75rem;
  border: 1px solid var(--modyo-c-green);
  border-radius: 4px;
  font-size: 1.25rem;
  line-height: 1.5;
  text-decoration: none;
  transition: background-color 0.15s, border-color 0.15s, color 0.15s;
}

.button-primary {
  background: var(--modyo-c-green);
  color: var(--modyo-c-navy);
}

.button-primary:hover {
  background: var(--modyo-c-green-light);
  border-color: var(--modyo-c-green-light);
}

.button-outline {
  color: var(--modyo-c-green);
}

.button-outline:hover {
  background: var(--modyo-c-green);
  color: var(--modyo-c-navy);
}

.footer {
  padding: 2.5rem;
  text-align: center;
  color: var(--modyo-c-muted);
}

@media (min-width: 640px) {
  .grid-4,
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .split,
  .news {
    grid-template-columns: 1fr 1fr;
  }

  .news-content {
    padding: 48px;
  }
}

@media (min-width: 960px) {
  .grid-4 {
    grid-template-columns: repeat(4, 1fr);
  }

  .help {
    background-image: url(https://cdn.modyo.cloud/uploads/1289097a-1359-45ca-898a-ad32519d5152/original/clouds.png);
    background-size: 250px;
    background-repeat: no-repeat;
    background-position: bottom right 10%;
  }
}

@media (max-width: 978px) {
  .hero {
    background-image: none;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-tagline {
    font-size: 1.5rem;
  }

  .search-card {
    padding: 24px;
  }

  .section-title,
  .help-title {
    font-size: 2.5rem;
  }

  .section-text,
  .news-text,
  .help-text {
    font-size: 1.1rem;
  }
}
</style>
