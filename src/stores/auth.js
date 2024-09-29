import { defineStore } from "pinia";
import Cookies from "js-cookie";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
})

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    async login(userData) {
      this.loading = true;
      try {
        const response = await axiosInstance.post("/login", userData);
        this.user = {
          name: response.data.data.username,
        }
        Cookies.set("token", response.data.data.token, {
          expires: 1 / 4
        });
      } catch (error) {
        this.error = 'Email atau password salah';
      } finally {
        this.loading = false;
      }
    },
    async register(userData) {
      this.loading = true;
      try {
        const response = await axiosInstance.post("/register", userData);
        this.user = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      this.loading = true;
      try {
        const token = Cookies.get('token');
        await axiosInstance.get("/logout", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        Cookies.remove("token");
        this.user = null;
      } catch (error) {
        this.error = error.value.message;
      } finally {
        this.loading = false;
      }
    },
    checkAuth() {
      const token = Cookies.get('token');
      if (token) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'auth',
        storage: localStorage,
      },
    ],
  },
})