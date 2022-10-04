import React from 'react'
import styled from "styled-components"
import Section  from './Section'

function Home() {
    return (
        <Container>
           <Section
           tittle="Model S"
           description="Order Online For Touches Delivery"
           backgroundImg="model-s.jpg"
           leftbtnText="Custom order"
           rightbtnText="Existing inventory"
           />
           <Section
           tittle="Model Y"
           description="Order Online For Touches Delivery"
           backgroundImg="model-y.jpg"
           leftbtnText="Custom order"
           rightbtnText="Existing inventory"
           />
           <Section
           tittle="Model 3"
           description="Order Online For Touches Delivery"
           backgroundImg="model-3.jpg"
           leftbtnText="Custom order"
           rightbtnText="Existing inventory"
           />
           <Section
           tittle="Model X"
           description="Order Online For Touches Delivery"
           backgroundImg="model-x.jpg"
           leftbtnText="Custom order"
           rightbtnText="Existing inventory"
           />
             <Section
           tittle="Solar Panels"
           description="Money Back Guarantee"
           backgroundImg="solar-panel.jpg"
           leftbtnText="Order now"
           rightbtnText="Learn more"
           />
            <Section
           tittle="Solar Roof"
           description="Produce Clean Energy From Your Roof"
           backgroundImg="solar-roof.jpg"
           leftbtnText="Order now"
           rightbtnText="Learn more"
           />
           <Section
           tittle="Accessories"
           backgroundImg="accessories.jpg"
           leftbtnText="SHOP NOW"

           />
           
        </Container>
    )
}

export default Home

const Container = styled.div`
height:100vh;
color:black;
`