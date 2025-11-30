import './SelectionPage.css';
import { Link } from 'react-router-dom';

function SelectionPage(){
    return(
        <div className='selection-page'>
        <header className='page-header'>
            <h1 className='heading'>Select a Game</h1>
            <p className='subhead'>Choose your difficulty or theme</p>
    
        </header>
        <main>
            <section className='card container'>
                <ol className='select'>
                    <li>
                        <strong><Link className='btn' to='/games/easy'>Jen's Game</Link></strong>
                        <span className='author'>by Jen - Easy</span>
                    </li>
                    <li>
                        <strong><Link className="btn" to="/games/normal">Ziggy's Game</Link></strong>
                        <span className='author'>by Ziggy - Normal</span>
                        
                    </li>
                        <li>
                        <strong><Link className="btn" to="/games/easy">Wanjiku's Game</Link></strong>
                            <span className='author'>by Wanjiku  - Easy</span>
                    </li>
                    <li>
                        <strong><Link className="btn" to="/games/normal">Njeri's Game</Link></strong>
                        <span className='author'>by Njeri - Normal</span>
                    </li>
                    <li>
                        <strong><Link className="btn" to="/games/normal" >Philip's Game</Link></strong>
                            <span className='author'>by Philip - Normal</span>
                    </li>
            
                </ol>
            </section>
        </main>
        </div>
    );
}

export default SelectionPage;