import React from "react";
import {Routes as Path, Route} from "react-router-dom";
import {Homepage, Items, Login, News, Profile, SignUp, Support} from "../";

export default function Routes(){

    return(
        <>
        <Path>
            <Route path="/" element={<Homepage />}/>
            <Route path="/items" element={<Items />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/news" element={<News />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/support" element={<Support />}/>
        </Path>
        </>

    );

}

// const x = 3;


// export default {
//     Routes,
//     x
// }