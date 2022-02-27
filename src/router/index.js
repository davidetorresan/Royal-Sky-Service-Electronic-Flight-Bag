import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Missions from '../views/Missions.vue'
import Weather from '../views/Weather.vue'
import Planning from '../views/Planning.vue'
import Book from '../views/Book.vue'
import Profile from '../views/Profile.vue'
import BookFlight from '../views/BookFlight.vue'
import Academy from '../views/Academy.vue'
import Ratings from '../views/Ratings.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/missions',
    name: 'Missions',
    component: Missions
  },
  {
    path: '/academy',
    name: 'Academy',
    component: Academy
  },
  {
    path: '/academy/ratings',
    name: 'Ratings',
    component: Ratings
  },
  {
    path: '/book',
    name: 'Book',
    component: Book
  },
  {
    path: '/book/:flight',
    name: 'Book Flight',
    component: BookFlight
  },
  {
    path: '/planning',
    name: 'Planning',
    component: Planning
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
