//card group or div
//App.state.grants.map {grant => <GrantCard grant={grant}}

import React, { useState, useEffect } from 'react'
import GrantCard from './GrantCard'
import { stateOptions } from './options'
import { Dropdown, Grid } from 'semantic-ui-react'

const ViewPage = props => {
    const {selectedCategories, setSelectedCategories, selectedStates, setSelectedStates, categories, grants} = props

    //used to set initial state value for category values
    const initialCatValue = (categories, selectedCategories) => {
        const values = categories.filter( cat => (
            selectedCategories.includes(cat.id)
        ))
        return values.map ( value => value.label)
    }
    //state used to control multii-select options in dropdowns
    const [categoryValues, setCategoryValues] = useState(initialCatValue(categories, selectedCategories))


    //creates options for dropdown
    const categoryOptions = categories => {
        return categories.map( cat => {
            return {text: cat.label, value: cat.label, id: cat.id}
        })
    }
    //add/remove id to App selectedCategories
    useEffect(() => {
        const currentCategories = categories.filter( category => categoryValues.includes(category.label))
        const currentIds = currentCategories.map(cat => cat.id)
        setSelectedCategories(currentIds)
    }, [categoryValues, setSelectedCategories, categories])
    

    return(
        <div id='view-page'>
            <Dropdown
                    placeholder='State'
                    fluid
                    multiple
                    search
                    selection
                    closeOnChange
                    options={stateOptions}
                    onChange={(event, data) => setSelectedStates(data.value)}
                    value={selectedStates}
                />
                <Dropdown
                    placeholder='Category'
                    fluid
                    multiple
                    search
                    selection
                    closeOnChange
                    options={categoryOptions(categories)}
                    onChange={(e, d) => setCategoryValues(d.value)}
                    // onChange={(event, data) => props.setSelectedCategories(data.value)}
                    value={categoryValues}
                />
                <Grid columns={3} stackable >
                    {grants.map( grant => <GrantCard grant={grant} key={grant.id} />)}
                </Grid>
            </div>
        
    )
}


export default ViewPage