import React, { useEffect } from 'react'
import store from '@/store'
import Head from 'next/head'
import Router from 'next/router'
import NoAccess from './no-access'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import Layout from '@/components/ui/layout'
import { persistStore } from 'redux-persist'
import { AuthContext } from '@/context/auth.context'
import { PersistGate } from 'redux-persist/integration/react'
import { loadingActions } from '@/store/reducers/loading.reducer'

const persistor = persistStore(store)

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()
    const state = store.getState()
    const { user } = state.auth

    useEffect(() => {
        loadingActions.setMessage('')
        loadingActions.setLoading(false)
    }, [])

    useEffect(() => {
        router.beforePopState(({ as }) => {
            if (as !== router.asPath) onBackButtonClick()
            return true
        })

        return () => {
            router.beforePopState(() => true)
        }
    }, [router])

    const onBackButtonClick = () => {
        Router.events.emit('routeChangeError')
        Router.replace(Router, Router.asPath, { shallow: true })
        throw 'Abort route change. Please ignore this error.'
    }

    const routeControl = () => {
        if (pageProps.protected && !user.id) return <NoAccess />
        return <Component {...pageProps} />
    }

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=0"
                />
            </Head>

            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AuthContext.Provider value={user}>
                        <Layout>{routeControl()}</Layout>
                    </AuthContext.Provider>
                </PersistGate>
            </Provider>
        </>
    )
}

export default MyApp
