import React from 'react';
import Home from './Home';
import Categories from './components/Categories';
import About from './components/About';
import Compare from './components/Compare';

const routes = {
    '/': () => <Home />,
    '/about': () => <About />,
    '/categories': () => <Categories />,
    '/compare': () => <Compare />

}

export default routes;