import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import './Sidebar.css';
export const SidebarData = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        path: '/home',
    },
    {
        title: 'Projects',
        icon: <HomeRepairServiceIcon />,
        path: '/projects',
    },
    {   
        title: 'Tasks',
        icon: <BuildIcon />,
        path: '/tasks',
    },
    {
        title: 'Settings',
        icon: <SettingsIcon />,
        path: '/settings',
    },
    {
        title: 'Profile',
        icon: <AccountCircleIcon />,
        path: '/profile',
    },
    {
        title: 'About',
        icon: <InfoIcon />,
        path: '/about',
    }
]