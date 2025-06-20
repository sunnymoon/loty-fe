<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const year = Number(route.params.year)
const loty = ref<{ id: number; name: string; year: number } | null>(null)
const currentYear = new Date().getFullYear()
const API_BASE = import.meta.env.MODE === 'production' ? 'http://loty-be' : 'http://localhost:8080'

onMounted(async () => {
  const res = await fetch(`${API_BASE}/api/v1/loty/year/${year}`)
  loty.value = await res.json()
})
</script>

<template>
  <main v-if="loty">
    <div class="loty-card">
      <div class="loty-year">{{ loty.year }}</div>
      <h1 v-if="loty.year === currentYear" class="twinkle"><strong>{{ loty.name }}</strong></h1>
      <h1 v-else>{{ loty.name }}</h1>
    </div>
  </main>
</template>

<style scoped>
.loty-card {
  border: 2px solid #1976d2;
  border-radius: 1.5rem;
  background: transparent;
  padding: 2rem 2.5rem;
  max-width: 400px;
  margin: 2rem auto;
  box-shadow: 0 2px 12px rgba(25, 118, 210, 0.08);
  text-align: center;
}
.loty-year {
  color: #888;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
@keyframes twinkle {
  0%, 100% { filter: brightness(1); text-shadow: 0 0 0 #fff; }
  20% { filter: brightness(1.5); text-shadow: 0 0 8px #fff, 0 0 16px #1976d2; }
  40% { filter: brightness(1); text-shadow: 0 0 0 #fff; }
  60% { filter: brightness(1.5); text-shadow: 0 0 8px #fff, 0 0 16px #1976d2; }
  80% { filter: brightness(1); text-shadow: 0 0 0 #fff; }
}
.twinkle {
  animation: twinkle 1.5s infinite;
  color: #1976d2;
}
</style>
