import CharacterCounter from './components/CharacterCounter/CharacterCounter'
import './App.css'

function App() {
  

  return (
    <>
    <h1>Character Counter</h1>
    <main className="page">
      <CharacterCounter minWords={20} maxWords={100} targetReadingTime={2}/>
    </main>
    </>
  )
}

export default App
