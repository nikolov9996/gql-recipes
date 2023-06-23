import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from 'pages/Home';
import "index.css"
import { ROUTES } from 'app/routes';
import Recipe from 'pages/Recipe';

let uri;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  uri = "http://localhost:8080/graphql"
} else {
  uri = "https://recipes-graphql.onrender.com/graphql"
}

const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.RECIPE,
    element: <Recipe />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
