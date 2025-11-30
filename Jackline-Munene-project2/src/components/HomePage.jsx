import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage(){
    return(
        <div className='home-page'>
        <header className='page-header'>
            <h1 className='brand'>Welcome to the game of Sudoku</h1>
            <p className='tagline'>Pencil-friendly. No guesswork. All logic.</p>
        </header>

        <main>
            <section className='card hero'>
                <div className='hero-copy'>
                    <h2 className='hero-title'>Pick a board and play</h2>
                        <p className='hero-text'>
                            New to Sudoku? Start with <strong>Easy</strong><br/>
                            Feeling bold? Try <strong>Normal</strong><br/>
                            Track your <Link to="/scores">high scores</Link> and read the <Link to="/rules">rules</Link> at any time. 
                        </p>
                <div className="hero-actions">
                    <Link className='btn btn-primary' to="/games/easy">Play Easy</Link>
                    <Link className='btn btn-secondary' to="/games/normal">Play Normal</Link>
                    </div>
                
                    <figure className="hero-art">
                        <img src="/sudoku.png" alt="Sudoku board illustration" />
                    </figure>
                    </div>
            </section>
        </main>
        <footer className='site-footer'>
            <small>Made by <a href="https://github.com/jmunen" target="_blank" rel='noopener'>Jackie Munene</a></small>
        </footer>
        </div>
    );
}

export default HomePage;