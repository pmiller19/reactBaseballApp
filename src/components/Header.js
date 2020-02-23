import React from 'react';
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
        <div className="App">
            <h1>Header</h1>
        </div>
    );
}

export default Header;