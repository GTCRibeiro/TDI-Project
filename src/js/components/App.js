// src/js/components/App.js
import React from "react";
import List from "./List";




const App = () => (

    <div className="row mt-5">

        <div className="col-md-8 offset-md-1">
            <h2>Reviews</h2>
            <br></br> <br></br> <br></br>
            <List />
        </div>

    </div>
);
export default App;