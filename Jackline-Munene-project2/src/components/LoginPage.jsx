import './LoginPage.css';

function LoginPage(){
    return(
        <div className='login-page'>
        <header className='page-header'>
            <h1 className='heading'>Log in</h1>
            <p className='subheading'>Log into your existing account</p>
        </header>
        <main>
            <section className='card container'>
                <form className='login-form'>
                    <div className='form-row'>
                        <label htmlFor="username">Username</label>
                        <input 
                        id='username'
                        type="text" 
                        name='username'
                        placeholder='Enter your username'
                        />
                        <small className='help'>
                            Forgot your username? Click on "Forgot username."
                        </small>
                    </div>
                    <div className='form-row'>
                        <label htmlFor="password">Password</label>
                        <input 
                        id='password'
                        type="text"
                        name='password'
                        placeholder='Enter your password'
                         />
                         <small className='help'>
                            Forgot your password? Click on "Forgot password."
                         </small>
                    </div>
                    <div className='actions'>
                        <button type='button' className='btn btn-secondary'>
                            Forgot username
                        </button>
                        <button type='button' className='btn btn-secondary'>
                            Forgot password
                        </button>
                        <button type='button' className='btn btn-primary'>
                            Log in
                        </button>
                    </div>
                </form>
            </section>
        </main>
        </div>
    );
}

export default LoginPage;