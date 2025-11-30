import './ScoresPage.css';

function ScoresPage(){
    return(
        <div className='scores-page'>
        <header className='page-header'>
            <h1 className='heading'>High Scores</h1>
            <p className='subhead'>Top Sudoku players this month.</p>
           
        </header>

        <main>
            <section className='card container'>
                <table className='scores-table'>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>Puzzles Completed</th>
                            <th>Best Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>SudokuMaster99</td>
                            <td>142</td>
                            <td>2:34</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>PuzzleQeen</td>
                            <td>128</td>
                            <td>3:04</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>NumberNinja</td>
                            <td>115</td>
                            <td>3:24</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>LogicLover</td>
                            <td>98</td>
                            <td>3:45</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>GridGuru</td>
                            <td>87</td>
                            <td>4:12</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Jackie</td>
                            <td>72</td>
                            <td>4:40</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
        </div>
    );
}

export default ScoresPage;