// src/routes.ts
import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
    index('pages/Home/Home.tsx'),
    route('weekly', 'pages/WeeklyEvents/WeeklyEvents.tsx'),
    route('groupEvents', 'pages/GroupEvents/GroupEvents.tsx'),
	route('sponsors', 'pages/Sponsors/Sponsors.tsx'),
    route('history', 'pages/History/History.tsx'),
    route('contact', 'pages/Contact/Contact.tsx'),
    route('*', 'pages/NotFound/NotFound.tsx'),
] satisfies RouteConfig