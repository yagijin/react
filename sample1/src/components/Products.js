import React from "react";
import MainHeader from './MainHeader.js';
import MainFooter from './MainFooter.js';
import CssBaseline from '@material-ui/core/CssBaseline';

function Products() {
    return (
        <React.Fragment>
            <CssBaseline />
            <MainHeader />
            <h2>Products</h2>
            <MainFooter />
        </React.Fragment>
    );
}

export default Products;