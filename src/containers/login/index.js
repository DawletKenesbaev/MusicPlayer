import React from 'react'
import Container from '../../components/templates/container'
import Form from '../../components/ui/form'
import InputField from '../../components/ui/inputField'
import MainButton from '../../components/ui/mainButton'
import { getFormValues } from '../../utils/getFormValues'

export default function LoginContainer() {

  const sendLoginData = () => {
    const data = getFormValues('login-form')
    console.log(data)
  }

  return (
    <Container>
      <div className='login-page'>
        
        <Form id={'login-form'} style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: '15px 0' }} onSubmit={sendLoginData}>
        <legend className='text-2xl mx-auto font-semibold text-gray-500'>Login</legend>
          <InputField placeholder='Email' name='email' />
          <InputField placeholder='Password' name='password' type='password' />
          <MainButton title='submit' type="submit" />
        </Form>
      </div>
    </Container>
  )
}
