import React from 'react';
import { useSelector } from 'react-redux'

import Home from "./components/Home.js";
import Details from './components/Details.js'

function NewsApp() {
    const home = useSelector(state => state.page.home) 
    return home?(<Home></Home>):(<Details></Details>);
}

export default NewsApp;