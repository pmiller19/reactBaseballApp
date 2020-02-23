import React from 'react';
import './Header.css';
import Logo from "/Users/parker/Documents/GitHub/reactBaseballApp/src/unlLogo2.jpg";
import fire from '../fire';


console.log(fire);


let db = fire.firestore();


db.collection("Players")
    .get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });

function Header() {

    return (
        // <div className="App">
        //     <h1>Header</h1>
        // </div>
        <div className="heading">
            <a href="../index.html">
                <img className="heading-child" src={Logo} width="55" height="55" alt="logo" />

                
                <p className="heading-text"> Baseball </p>
            </a>
        </div>
    );
}

export default Header;
