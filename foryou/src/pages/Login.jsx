import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('sign up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    // Handle form submission here
    setEmail('')
    setName('')
    setPass('')
  }

  return (
    <div className='p-10'>
      <form
        className='flex items-center min-h-[80vh] justify-center'
        onSubmit={onSubmitHandler}
      >
        <div className='flex flex-col gap-3 items-start p-8 min-w-[280px] sm:w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-medium text-center flex items-center justify-center'>
            {state === 'sign up' ? 'Create Account' : 'Login'}
          </p>
          <p>
            {state === 'sign up' ? 'Please create an account' : 'Please login'} to book an appointment
          </p>

          {state === 'sign up' && (
            <div className='w-full'>
              <p>Full Name</p>
              <input
                type='text'
                className='border mt-2 border-zinc-800 w-full py-2 px-2'
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          )}

          <div className='w-full'>
            <p>Email</p>
            <input
              type='email'
              className='border border-zinc-800 w-full py-2 px-2'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className='w-full'>
            <p>Password</p>
            <input
              type='password'
              className='border border-zinc-800 w-full py-2 px-2'
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
          </div>

          <button
            type='submit'
            className='bg-primary text-white px-4 py-2 rounded-xl w-full'
          >
            {state === 'sign up' ? 'Create Account' : 'Login'}
          </button>

          {state === 'sign up' ? (
            <p>
              Already have an account?{' '}
              <span
                className='text-primary underline cursor-pointer'
                onClick={() => setState('login')}
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Create a new account?{' '}
              <span
                className='text-primary underline cursor-pointer'
                onClick={() => setState('sign up')}
              >
                Create Account
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default Login
