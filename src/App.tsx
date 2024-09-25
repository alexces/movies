import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import DisplaySearch from './components/DisplaySearch';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <div>
        <Search onSubmit={(value: string) => setSearchTerm(value)} />
      </div>
      {searchTerm === '' && 'Search for movies'}
      {searchTerm !== '' && <DisplaySearch searchTerm={searchTerm} />}
    </div>
  )
}

export default App
