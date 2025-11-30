import './RulesPage.css';

function RulesPage(){
    return(
        <div className='rules-page'>
            <header className='page-header'>
            <h1 className='heading'>Rules of Sudoku</h1>
            <p className='subhead'>Play like a pro. No guesswork</p>
            </header>
            <main>
                <section className='card container'>
                    <ol className='rules'>
                        <li><strong>One of each per row:</strong>numbers 1 to 9, no repeats.</li>
                        <li><strong>One of each per column:</strong>same deal, no duplicates.</li>
                        <li><strong>One of each per 3x3 box:</strong>each little square needs 1 to 9 too.</li>
                        <li><strong>Only numbers 1 to 9:</strong>no zeros, no letters.</li>
                        <li><strong>No guessing</strong>every puzzle can be solved with logic.</li>
                    </ol>
                </section>
            </main>
            <footer className='credits-footer'>
                <small className='credits'>
                    <a href="https://github.com/jmunen" target='_blank' rel='noopener'>
                        Made by Jackie Munene
                    </a>
                </small>
            </footer>
        </div>
    );
}

export default RulesPage;