// Central API base URL for all API calls
// Usage: import { API_BASE } from '@/apiBase'

export const API_BASE = import.meta.env.MODE === 'production'
    ? 'http://loty-be.apps-crc.testing'
    : 'http://localhost:8080'
