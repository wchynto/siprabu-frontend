import Cookies from 'js-cookie'
import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = Cookies.get('token');

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`
  }
});

export const useCategoryStore = defineStore({
  id: 'categories',
  state: () => ({
    categories: [],
    category: {},
    loading: false,
    error: null
  }),
  getters: {
    getCategories: (state) => { state.categories },
    getCategoryById: (state) => (id) => {
      return state.categories.find(category => category.id === id);
    }
  },
  actions: {
    async fetchCategories() {
      this.loading = true;
      try {
        const response = await axiosInstance.get('/categoryNews');
        this.categories = response.data.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async fetchCategory(id) {
      this.loading = true;
      try {
        const response = await axiosInstance.get(`/categoryNews/${id}`);
        this.category = response.data.data;
        this.categories = ['1', '2', '3'];
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async createCategory(categoryData) {
      this.loading = true;
      try {
        console.log(categoryData)
        const response = await axiosInstance.post('/categoryNews', categoryData);
        this.categories.push(response.data);
      } catch (error) {
        this.error = error;
        console.log(error)
      } finally {
        this.loading = false;
      }
    },

    async updateCategory(id, categoryData) {
      this.loading = true;
      try {
        const response = await axiosInstance.put(`/categoryNews/${id}`, categoryData);
        const index = this.categories.findIndex(category => category.id === id);
        if (index !== -1) {
          this.categories[index] = response.data;
        }
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async deleteCategory(id) {
      this.loading = true;
      try {
        await axiosInstance.delete(`/categoryNews/${id}`);
        this.categories = this.categories.filter(category => category.id !== id);
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    }
  },
  persist: {
    enabled: true,
  }
});
