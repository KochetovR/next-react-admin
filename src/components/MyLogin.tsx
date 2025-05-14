import { Login, LoginForm } from 'react-admin';

export const MyLogin = () => (
    <Login backgroundImage={'./img/login.webp'}>
        <LoginForm />
        <div className={'flex flex-col items-center justify-center mb-3'}>
            <p>Username: admin</p>
            <p>Password: 123456</p>
        </div>
    </Login>
);