// filename: config/menu.ts
export type MenuData = {
    label: string;
    href?: string;
    disabled?: boolean;
    contents?: MenuData[];
}

export const menu: MenuData[] = [
    { label: 'Home', href: '/' },
    { label: 'Sponsors', href: '/sponsors' },
    {
        label: 'About',
        contents: [
            { label: 'History', href: '/history' },
            { label: 'Contact', href: '/contact' },
        ]
    },
    {
        label: 'Schedule',
        contents: [            
            { label: 'Calendar', href: '/calendar' },
            { label: 'Weekly Activities', href: '/weekly' },
            { label: 'Tournaments', href: '/tournaments' },
            { label: 'District', href: '/district' },
            { label: 'Group Events', href: '/group' },
        ]
    },
    {
        label: 'Bowling Basics',
        disabled: true,
        contents: [
            { label: 'Learn to Play', href: '/learn' },
            { label: 'Etiquette', href: '/etiquette' },
            { label: 'Rules', href: '/rules' },
        ]
    },
    {
        label: 'Membership',
        contents: [
            { label: 'Join', href: '/join' },
            { label: 'Executive', href: '/executive' },
            { label: 'By-Laws', href: '/bylaws' },
        ]
    },
    {
        label: 'Gallery',
        disabled: true,
        contents: [
            { label: '2026', href: '/gallery2026' },
            { label: '2025', href: '/gallery2025' },
            { label: 'History', href: '/galleryHistory' },
        ]
    }
];