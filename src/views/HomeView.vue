<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { API_BASE } from '@/apiBase'

interface Loty {
  id: number
  name: string
  year: number
}

const lotys = ref<Loty[]>([])
const router = useRouter()

onMounted(async () => {
  const res = await fetch(`${API_BASE}/api/v1/loty`)
  lotys.value = await res.json()
})

function goToYear(year: number) {
  router.push(`/${year}`)
}
</script>

<template>
  <main style="display: flex; flex-wrap: wrap; gap: 1rem;">
    <div
      v-for="loty in lotys"
      :key="loty.id"
      @click="goToYear(loty.year)"
      class="loty-card"
    >
      <div class="loty-year">{{ loty.year }}</div>
    </div>
  </main>
</template>

<style scoped>
.loty-card {
  cursor: pointer;
  border: 2px solid #1976d2;
  border-radius: 8px;
  padding: 1rem;
  min-width: 120px;
  text-align: center;
  background: transparent;
  transition: box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
}
.loty-year {
  font-weight: bold;
  color: #1976d2;
  font-size: 1.2rem;
}
</style>
