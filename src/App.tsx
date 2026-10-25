import CharacterCounter from './components/CharacterCounter/CharacterCounter'
import './App.css'

function App() {
  

  return (
    <main className="page">
      <CharacterCounter minWords={25} maxWords={250} targetReadingTime={2}/>
    </main>
  )
}

export default App
