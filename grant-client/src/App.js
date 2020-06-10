import React, { useState, useEffect } from 'react';
//style
import './App.css';
//custom components
import GrantHeader from './components/GrantHeader'
import SearchPage from './components/SearchPage';
import ViewPage from './components/ViewPage'


const App = () => {

  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedStates, setSelectedStates] = useState([])
  const [grants, setGrants] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/categories')
    .then(r => r.json())
    .then(categories => {
      setCategories(categories)
    })
  }, [])

  useEffect(() => {
    const filterObj = {
      states: selectedStates,
      categories: selectedCategories
    }
    fetchGrants(filterObj)
  }, [selectedCategories, selectedStates])

  

  const fetchGrants = filterObj => {
    //filterObj format { states: ["State, ST", "State, ST"], categories: [id, id]}
    fetch('http://localhost:3000/grants/filter', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(filterObj)
    })
    .then(r => {
      if(r.ok) {return r.json()} else {throw r}
    })
    .then(grants => setGrants(grants))
    
  }

  return (
    <div className="App">
      <div className='fake-header-one'></div>
      <div className='fake-header-two'></div>
      <GrantHeader />
      <div id='window'>
      {(selectedCategories.length === 0) && (selectedStates.length === 0) ?
        <SearchPage 
          categories={categories}
          setSelectedCategories={setSelectedCategories}
          setSelectedStates={setSelectedStates}
          fetchGrants={fetchGrants}
          />
        : <ViewPage 
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedStates={selectedStates}
          setSelectedStates={setSelectedStates}
          fetchGrants={fetchGrants}
          grants={grants}
          />
      }      
      </div>
    </div>
  );
  
}

export default App;
