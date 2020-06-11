//h1 foundation_name (include w/ serializer)
//h3 grant_name
//p grant_description
//divider Available Contact Info
//contact_name, address, city, state, zip
//url, email, phone

import React from 'react'

import { Label, Header, Grid } from 'semantic-ui-react'

const GrantCard = props => {
const { foundation_name, city, state, zip, contact_name, address_1, phone, email, url } = props.grant.foundation
const { grant_name, grant_description } = props.grant
const category_name = props.grant.category.label
    return (
        <div className="grant-card">
            <div className="grant-card-label">
                <Label className='orange-label'>{category_name ? category_name : "n/a"}</Label>
                <Label className='green-label'>{state ? state : "n/a"}</Label>
            </div>
            <div className="grant-card-inner">

            <Header size='huge'>{foundation_name ? foundation_name : "Unnamed Foundation"}</Header>
            <Header size='large'>{grant_name}</Header>
            <p>{grant_description}</p>
            <Header size='medium'>Available Contact Info</Header>
            <Grid className='grant-card' stackable divided>
                <Grid.Row columns={2} verticalAlign='middle' >
                    <Grid.Column>
                        <h5>{contact_name}</h5>
                    </Grid.Column>
                    <Grid.Column>
                        <h5 size='tiny'>{address_1}</h5>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3} verticalAlign='middle' >
                    <Grid.Column>
                        <h5 size='tiny'>{city}</h5>
                    </Grid.Column>
                    <Grid.Column>
                        <h5 size='tiny'>{state}</h5>
                    </Grid.Column>
                    <Grid.Column>
                        <h5 size='tiny'>{zip}</h5>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} verticalAligh='middle' textAlign='right'>
                    <Grid.Column>
                        <h5 size='tiny'>{phone}</h5>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} verticalAligh='middle' textAlign='right'>
                    <Grid.Column>
                        <h5>{email}</h5>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} verticalAligh='middle' textAlign='right'>
                    <Grid.Column>
                        <h5 size='tiny'>{url}</h5>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        </div>
    )
}

export default GrantCard