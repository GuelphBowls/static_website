// filename: routes.ts
// src/routes.ts
import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
    index('pages/Home/Home.tsx'),
    route('weekly', 'pages/WeeklyEvents/WeeklyEvents.tsx'),
    route('group', 'pages/GroupEvents/GroupEvents.tsx'),
	route('sponsors', 'pages/Sponsors/Sponsors.tsx'),
    route('history', 'pages/History/History.tsx'),
    route('contact', 'pages/Contact/Contact.tsx'),
    route('tournaments', 'pages/Tournaments/Tournaments.tsx'),
    route('district', 'pages/District/District.tsx'),
    route('executive', 'pages/Executive/Executive.tsx'),
    route('bylaws', 'pages/ByLaws/ByLaws.tsx'),
    route('join', 'pages/Join/Join.tsx'),
    route('calendar', 'pages/Calendar/Calendar.tsx'),
    route('*', 'pages/NotFound/NotFound.tsx'),
] satisfies RouteConfig