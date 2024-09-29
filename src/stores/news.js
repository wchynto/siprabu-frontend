import { defineStore } from 'pinia'
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`
  }
});

export const useNewsStore = defineStore({
  id: 'news',
  state: () => ({
    news: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchNews() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosInstance.get('/news');
        this.news = response.data;
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
    async addNews(newArticle) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosInstance.post('/news', newArticle);
        this.news.push(response.data);
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
    async updateNews(id, updatedArticle) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosInstance.put(`/news/${id}`, updatedArticle);
        const index = this.news.findIndex(article => article.id === id);
        if (index !== -1) {
          this.news[index] = response.data;
        }
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
    async deleteNews(id) {
      this.loading = true;
      this.error = null;
      try {
        await axiosInstance.delete(`/news/${id}`);
        this.news = this.news.filter(article => article.id !== id);
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    }
  },
  persist: {
    enabled: true,
  }
});
