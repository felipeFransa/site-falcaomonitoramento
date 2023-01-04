import React from 'react';
import { CardDescription, CardTitle, CardsServises, Container, ServicesProvision } from './style'

export const Services = () => {
  return (
    <ServicesProvision>
      <Container>
        <CardsServises>
          <CardTitle>
            <h2>Titulo 1</h2>
          </CardTitle>
          <CardDescription>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit blanditiis laboriosam hic quae consectetur error perspiciatis! Veniam voluptatibus harum qui veritatis rerum soluta, perferendis, impedit quam, animi architecto voluptate!</p>
          </CardDescription>
        </CardsServises>
  
        <CardsServises>
          <CardTitle>
            <h2>Titulo 2</h2>
          </CardTitle>
          <CardDescription>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit blanditiis laboriosam hic quae consectetur error perspiciatis! Veniam voluptatibus harum qui veritatis rerum soluta, perferendis, impedit quam, animi architecto voluptate!</p>
          </CardDescription>
        </CardsServises>

        <CardsServises>
            <CardTitle>
            <h2>Titulo 2</h2>
          </CardTitle>
          <CardDescription>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex suscipit blanditiis laboriosam hic quae consectetur error perspiciatis! Veniam voluptatibus harum qui veritatis rerum soluta, perferendis, impedit quam, animi architecto voluptate!</p>
          </CardDescription>
        </CardsServises>
      </Container>
    </ServicesProvision>
  )
}