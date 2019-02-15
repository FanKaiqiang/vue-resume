import Vue from 'vue'
import Router from 'vue-router'
import Message from '../components/Message'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Message',
      component: Message
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
