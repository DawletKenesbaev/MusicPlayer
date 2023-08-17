import React from 'react'
import SiteHeader from '../components/templates/header'
import SiteFooter from '../components/templates/footer/copyrightText'
import { Route, Routes } from 'react-router-dom'
import { PublicRoutes } from '../configs/routes/app.route'
import Container from '../components/templates/container'

export default function Views() {
    return (
        <div style={{display: 'flex', width: '100%', flexDirection: 'column', height: '100vh'}}>
            <SiteHeader />
            <div style={{flexGrow: 1}}>
                <Container>
                    <Routes>
                        {
                            PublicRoutes.map(route => <Route key={route.key} path={route.path} element={route.element} />)
                        }
                    </Routes>
                </Container>
            </div>
            <SiteFooter />
        </div>
    )
}
