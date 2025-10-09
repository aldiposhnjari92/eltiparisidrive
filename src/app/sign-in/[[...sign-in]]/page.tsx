import { SignIn } from '@clerk/nextjs'

const LoginPage = () => {
    return(
        <div className='flex flex-col items-center justify-center h-screen w-screen'>
            <SignIn />
        </div>
    )
}

export default LoginPage;