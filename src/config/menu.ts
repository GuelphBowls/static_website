// filename: config/menu.ts
export type MenuData = {
    label: string;
    href?: string;
    children?: MenuData[];
}

export const menu: MenuData[] = [
    { label: 'Home', href: '/' },
    { label: 'Sponsors', href: '/sponsors' },
    {
        label: 'About',
        children: [
            { label: 'History', href: '/history' },
            { label: 'Contact', href: '/contact' },
        ]
    },
    {
        label: 'Schedule',
        children: [
            { label: 'Weekly Activities', href: '/weekly' },
            { label: 'Tournaments', href: '/tournaments' },
            { label: 'District', href: '/district' },
        ]
    },
    {
        label: 'Bowling Basics',
        children: [
            { label: 'Learn to Play', href: '/learn' },
            { label: 'Etiquette', href: '/etiquette' },
            { label: 'Rules', href: '/rules' },
        ]
    },
    {
        label: 'Membership',
        children: [
            { label: 'Join', href: '/join' },
            { label: 'Executive', href: '/executive' },
            { label: 'By-Laws', href: '/bylaws' },
        ]
    },
    {
        label: 'Gallery',
        children: [
            { label: '2026', href: '/gallery2026' },
            { label: '2025', href: '/gallery2025' },
            { label: 'History', href: '/galleryHistory' },
        ]
    }
];