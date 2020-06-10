//h1 foundation_name (include w/ serializer)
//h3 grant_name
//p grant_description
//divider Available Contact Info
//contact_name, address, city, state, zip
//url, email, phone

import React from 'react'

import { Label, Header, Grid } from 'semantic-ui-react'

const GrantCard = props => {
const { foundation_name, city, state, zip, contact_name, address_1 } = props.grant.foundation
const { grant_name, grant_description } = props.grant
const category_name = props.grant.category.label
    return (
        <div className="grant-card">
            <div className="grant-card-label">
                <Label color='orange'>{category_name}</Label>
                <Label color='teal'>{state}</Label>
            </div>
            <div className="grant-card-inner">

            <Header size='huge'>{foundation_name ? foundation_name : "Unnamed Foundation"}</Header>
            <Header size='large'>{grant_name}</Header>
            <p>{grant_description}</p>
            <Header size='medium'>Available Contact Info</Header>
            <Grid stackable divided>
                <Grid.Row columns={2} verticalAlign='middle'>
                    <Grid.Column>
                        <p>{contact_name}</p>
                    </Grid.Column>
                    <Grid.Column>
                        <p size='tiny'>{address_1}</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3} verticalAlign='middle'>
                    <Grid.Column>
                        <p size='tiny'>{city}</p>
                    </Grid.Column>
                    <Grid.Column>
                        <p size='tiny'>{state}</p>
                    </Grid.Column>
                    <Grid.Column>
                        <p size='tiny'>{zip}</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        </div>
    )
}

export default GrantCard