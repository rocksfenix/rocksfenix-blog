---
path: que-rayos-son-los-inicializadores-de-propiedad
date: 2019-12-04T23:43:26.995Z
title: El Duro pero delicioso desarrollo Frontend
description: Properti inizializers
tags:
  - flag
  - brand
---
La vida del desarrollador frontend es dura, ahora no por falta de herramientas, si no porque cada dia surgen mejores herramientas que nos ayudan a crear soluciones mas optimizadas y con un facil mantenimiento.

Pero es normal sentirse aplastado con tantas opciones que tenemos a nuestra mano para realizar x o y proyecto

Estoy trabajando en un proyecto React Native y estoy usando clases ES6 para los componentes React.

Como los componentes de React definidos a través de las clases de ES6 no tienen vinculación automática, el equipo React recommends combina los inicializadores de propiedades de ES7 con las funciones de flecha para crear el mismo efecto.

Para ser coherente y evitar la confusión con este enlace, estoy usando inicializadores de propiedad ES7 para todos los métodos de componentes:

```javascript
// Creating things
export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC|Martel|Open+Sans:800,800i&display=swap');

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Martel', serif;
    overflow-x: hidden;
    overflow-y: auto;
  }

  p {
    margin-top: 2em;
  }

  h1, h2, h3 {
    font-family: 'Bowlby One SC', cursive;
    letter-spacing: 1px;
    color: #333242;
  }

  a {
    color: #ff5200;
  }

  a:hover {
    text-decoration: underline;
  }

  h3 a {
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    position: relative;
    font: 800 2rem/1 'Open Sans',sans-serif;
    text-transform: uppercase;
    color: #34323b;
    margin-bottom: 5rem;
    letter-spacing: -1px;
  }
`
```

## Esto es importante
