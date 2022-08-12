import React from 'react'
import { Container } from '@/styles/pages/home'
import AppHead from '@/components/common/app-head'
import GroupList from '@/components/home/group-list'
import NextEvents from '@/components/home/next-events'
import UserDetails from '@/components/home/user-details'
import HomeShortcuts from '@/components/home/home-shortcuts'

const Home: React.FC = () => {
    return (
        <>
            <AppHead title="Home" />
            <Container>
                <UserDetails />
                <NextEvents />
                <GroupList />
                <HomeShortcuts />
            </Container>
        </>
    )
}

export default Home
