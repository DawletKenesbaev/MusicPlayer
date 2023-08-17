import React from 'react'
import Container from '../container'
import MainButton from '../../ui/mainButton';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';

export default function SiteHeader() {
    return (
        <div className='site-header'>
            <Container>
                <div className='site-header-inner flex py-8 items-center gap-5' >
                    <p className='text-3xl mr-auto'>Logo</p>
                    <Navbar/>
                    <Link to={'/login'}>
                        <MainButton title='Login' />
                    </Link>
                    <Link to={'/register'}>
                        <MainButton title='Register' />
                    </Link>
                </div>
            </Container>
        </div>
    )
}
