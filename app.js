import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, ref, push, set, get } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBYt862dHkRPuQAR9Tqud2jTqgo2IBC5s4",
    authDomain: "mt10-4f232.firebaseapp.com",
    projectId: "mt10-4f232",
    storageBucket: "mt10-4f232.appspot.com",
    messagingSenderId: "356048395157",
    appId: "1:356048395157:web:1c57d6fe9839b99ea8349c",
    measurementId: "G-9FGLYRSDNN"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase();

window.add = () => {

    const inp = document.getElementById("inp").value

    const postListRef = ref(db, 'todo');
    const newPostRef = push(postListRef);
    set(newPostRef, {
        name: inp
    });

}

function show() {

    const div = document.getElementById("show")
    const dbRef = ref(db);
    get(dbRef, `todo`).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val().todo);

            div.innerHTML="";

            for (const key in snapshot.val().todo) {
                const name = snapshot.val().todo[key].name
                console.log(name);

                div.innerHTML += ` <div id="${key}" style="display: flex; justify-content: space-between; align-items: center; width: 25px;">

                <div>
                    <p>${name}</p>
                </div>
                
                <div>
                
                    <button onclick"edittodo('${name}' , '${key}')" id="edit">Edit</button>
                    <button id="del">Delete</button>
                
                </div>
                
                </div> `
            }

            // window.location.reload()


        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });


}

show()


const editodo=(name , key) => {
    document.getElementById("key").innerHTML=``
}

