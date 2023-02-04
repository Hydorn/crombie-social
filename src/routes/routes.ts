import { FunctionComponent } from 'react'
import { Homepage } from '../pages/Home';
import { ProfilePage } from '../pages/Profile'

interface Route {
    path: string;
    name: string;
    component: FunctionComponent;
    icon: string;
  }

export const Routes:Route[] = [
  { path: '/home', component: Homepage, name: 'Home', icon: 'bi bi-house-fill'},
  { path: '/profile', component: ProfilePage, name: 'Profile', icon: 'bi bi-person-fill' },
  { path: '/home', component: Homepage, name: 'Notifications', icon: 'bi bi-bell-fill' },
  { path: '/home', component: Homepage, name: 'Messages', icon: 'bi bi-chat-fill' },
  { path: '/home', component: Homepage, name: 'More', icon: 'bi bi-three-dots'}
]

