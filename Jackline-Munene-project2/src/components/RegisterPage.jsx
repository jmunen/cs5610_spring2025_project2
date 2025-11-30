import './RegisterPage.css';

function RegisterPage(){
    return(
        <div className='register-page'>
        <header className='page-header'>
            <h1 className='heading'>Register here</h1>
            <p className='subheading'>Create an account to save your progress</p>
        </header>
        <main>
            <section className='card container'>
                <form className="register-form">
                    <div className='form-row'>
                    <label htmlFor="username">Username</label>
                    <input 
                    id='username'
                    type="text" 
                    name='username'
                    placeholder='e.g lone_pine'
                    />
                    <small className='help'>
                        3-24 characters. Letters, numbers, underscore, dot or hyphen
                    </small>
                    </div>
                    <div className='form-row'>
                        <label htmlFor="password">Password</label>
                        <input 
                        id='password'
                        type="password" 
                        name='password'
                        placeholder='Create a new password'
                        />
                    </div>
                    <small className='help'>At least 8 characters. Use a mix for strong security</small>
                    
                    <div className='form-row'>
                        <label htmlFor="verify-password">Verify Password</label>
                        <input 
                        id='verify-password'
                        type="password"
                        name='verify-password'
                        placeholder='Re-enter your password' 
                        />
                    </div>
                    <div className='actions'>
                        <button type='button' className='btn btn-primary'>Create a new username</button>
                        <button type='button' className='btn btn-primary'>Create a new Password </button>
                    </div>
                </form>
            </section>
        </main>
        </div>
    );
}

export default RegisterPage;