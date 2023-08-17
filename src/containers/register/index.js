import React from 'react'
import { getFormValues } from '../../utils/getFormValues'
import Container from '../../components/templates/container'
import Form from '../../components/ui/form'
import InputField from '../../components/ui/inputField'
import MainButton from '../../components/ui/mainButton'

export default function RegisterContainer() {

    const sendLoginData = () => {
        const data = getFormValues('register-data')
        console.log(data)
    }

    return (
        <Container>
            <div className='login-page'>
                
                <Form id={'register-data'} style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: '15px 0' }} onSubmit={sendLoginData}>
                    <legend className='text-2xl mx-auto  font-semibold text-gray-500'>Register</legend>
                    <InputField placeholder='Full Name' name='full_name' />
                    <InputField placeholder='Email' name='email' />
                    <InputField placeholder='Password' name='password' type='password' />
                    <MainButton title='submit' type="submit" />
                </Form>
            </div>
        </Container>
    )
}
