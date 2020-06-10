//Search by State
//   include search dropdown with state. States need translation to include 'GA' or 'Georgia'



//on State or category select, fetch list of grants, set state in App

import React from 'react'
import { stateOptions } from './options'
//style
import { Divider, Button, Dropdown } from 'semantic-ui-react'

const SearchPage = props => {

    const stateDropdownCallback = e => {
        // props.fetchGrants({states: [e.target.textContent]})
        props.setSelectedStates([e.target.textContent])
    }

    // const categoryButtonCallback = categoryId => {
    //     // props.fetchGrants(categoryObj)
    //     debugger
    //     props.setSelectedCategories(categoryId)
    // }

    const createCategoryButton = (id, name) => {
        return <Button 
                id={id}
                key={id}
                className='category'
                onClick={() => props.setSelectedCategories([ id ])}
                >{name}
                </Button>
    }

    return(
        <div id='search-page'>
            <div>
                <h1>Search by State</h1>
                <Dropdown
                    placeholder='State'
                    fluid
                    search
                    selection
                    options={stateOptions}
                    onChange={stateDropdownCallback}
                />
            </div>
            <Divider horizontal>OR</Divider>
            <div>
                <h1>Select a Category</h1>
                {props.categories.map(cat => createCategoryButton(cat.id, cat.label))}
            </div>
        </div>
        
    )
}




export default SearchPage