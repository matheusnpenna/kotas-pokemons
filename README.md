# Front Challenge - Kotas Pokémons By: Matheus Penna

Pokemon catalog using pokeApi [https://pokeapi.co/](https://pokeapi.co/ "https://pokeapi.co/")

>  This is a challenge by [Coodesh](https://coodesh.com/){:target="_blank"}

## Access this project through the link below 

This project is avaiable [here](https://matheuspenna-kotas-pokemons.vercel.app/).

## How to setup and run

Make sure to install the dependencies:

```bash
# yarn
yarn install

```

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev

```

Build the application for production:

```bash
# yarn
yarn build
```

Locally preview production build:

```bash
# yarn
yarn preview
```

## Used technologies

This project was made using the following technologies:
- Vue.js 3
- Nuxt.js 3
- Tailwind
- Sass
- Pinia
- Tanstack Query
- Typescript

## Documentation

#### About the project setup
- I chose to structure the project using sass + tailwind thinking about the agility and ease of tailwind classes together with sass features such as mixins and nesting. These resources combined with the fact that these technologies are known by the development team (Just me) certainly gives the project agility and ease in development and maintenance in order to meet the delivery deadline and future corrections.

#### About the architecture: API comunication
- Due to the fact that the project is small, I chose to use communication with the API via pinia actions without the use of services, aiming for a good understanding of the next programmers who will work on the project since both the state and the actions are located in the same file due to the small code size.
- Due to the simplicity of the project, it was not necessary to use a service, repository or controller as there are no data treatments or business rules that require the use of JavaScript logic to interpret the data before showing it in the view or sending it to the API

#### About the Tanstack Query
- PokeAPI makes the process of showing data about pokemons in the list difficult because the endpoint used to list all pokemons does not provide data such as: code, sprites (images) or type of pokemon, for this it is necessary to make 1 API request for each list item only to show this data on the screen. This increases the stress on the API since each client will make 1 + n requests since n is the number of items shown on the screen. With a very large list, this leads to an unnecessary number of API requests. To achieve this, the Tanstack Query library will help reduce the number of times the frontend will query the API as it manages a cache of requests very well.

#### About different rendering strategies
- I chose not to use SSR on the home page in order to provide a SPA experience with infinite scroll and search field without refreshing the screen, making the experience more fluid.
- However, pokemon detail pages are a good idea to be generated via SSR, so similar to what happens on blogs, these pages could be indexed in search engines since nuxt 3 already generates a sitemap.xml automatically through a native module

#### About the ActionDispatcher component
- To make it easier to request the data needed to list pokemons on the home screen, I created a component called ActionDispatcher that only renders its slot after obtaining the necessary data, thus facilitating requests for each item in the list.

#### About the error handling
- I did basic error management just to not leave the user without guidance if an untreated error occurs in the system. This one could be improved.

#### About the usability
- I added a simple loading to better inform the user of the application's status when requesting data from the API
- To facilitate sharing the page, I added a parameter called search to the URL in order to be able to search based on the parameter passed in the URL and thus share the URL with the search to be performed.
- I improved infinite scroll to use observer and enable infinite scroll to work based on the element of the dom that is being scrolled instead of working based on the entire document. This way, the element's scrollbar can trigger infinite scrolling.

#### About the tests
- The pokemon card component depends on a request to display its content correctly, this can be a point of failure if there is a rendering problem, the information is not passed between components correctly or the Tanstack Query cache is being managed inappropriately . To ensure that this failure does not happen, I created a test that simulates the request and checks if the component showed the correct information