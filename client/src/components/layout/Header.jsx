import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { orange } from '../../constants/color'
import { Add, Group, Logout, Menu, Notifications, Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const SearchBar = lazy(import('../specific/SearchBar'));
const NotificationsDialog = lazy(import('../specific/NotificationsDialog'));
const NewGroup = lazy(import('../specific/NewGroup'));


const Header = () => {

    const nav = useNavigate();

    const [isMobile, setisMobile] = useState();
    const [isSearch, setisSearch] = useState();
    const [isNewGroup, setisNewGroup] = useState();
    const [isNotification, setisNotification] = useState();

    const handleMobile = () => {
        setisMobile(!isMobile)
    }

    const openSearchDialog = () => {
        setisSearch(!isSearch);
    }

    const openNewGroup = () => {
        setisNewGroup(!isNewGroup);
    }

    const handleNotification = () => {
        setisNotification(!isNotification);
    }

    const logoutHandler = () => {

    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }} height={"4rem"}>
                <AppBar position='static' sx={{
                    bgcolor: orange
                }} >

                    <Toolbar>

                        <Typography variant='h6' sx={{
                            display: { xs: "none", sm: "block" }
                        }}>
                            Chat App
                        </Typography>

                        <Box sx={{
                            display: { xs: "block", sm: "none" }
                        }}>
                            <IconButton color='inherit' onClick={handleMobile}>
                                <Menu />
                            </IconButton>
                        </Box>

                        <Box sx={{
                            flexGrow: 1
                        }}>

                        </Box>

                        <Box>
                            <IconBtn title={"Search"} onclick={openSearchDialog} icon={<Search />} />
                            <IconBtn title={"New Group"} onclick={openNewGroup} icon={<Add />} />
                            <IconBtn title={"Manage Groups"} onclick={() => nav('/groups')} icon={<Group />} />
                            <IconBtn title={"Notifications"} onclick={handleNotification} icon={<Notifications />} />
                            <IconBtn title={"Logout"} onclick={logoutHandler} icon={<Logout />} />

                        </Box>
                    </Toolbar>

                </AppBar>
            </Box>

            {
                isSearch && (
                    <Suspense fallback={<Backdrop open />}>
                        <SearchBar />
                    </Suspense>
                )
            }

            {
                isNotification && (
                    <Suspense fallback={<Backdrop open />}>
                        <NotificationsDialog />
                    </Suspense>
                )
            }

            {
                isNewGroup && (
                    <Suspense fallback={<Backdrop open />}>
                        <NewGroup />
                    </Suspense>
                )
            }

        </>
    )
}

const IconBtn = ({ title, icon, onclick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color='inherit' size='large' onClick={onclick}>
                {icon}
            </IconButton>
        </Tooltip>
    )

}

export default Header