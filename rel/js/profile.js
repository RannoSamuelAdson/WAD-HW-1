var i = 0;

function displayProfile(){
    if (i % 2 == 0){
        const spot = document.getElementById("profileSpot");
        const box = document.createElement("div");
        box.className = "flex_profile"
        const row1 = document.createElement("div");
        row1.className = "row";
        row1.appendChild(document.createTextNode("John Doe"));

        const row2 = document.createElement("div");
        row2.className = "row";
        row2.appendChild(document.createTextNode("John.doe@ut.ee"));

        const row3 = document.createElement("div");
        row3.className = "row";
        row3.appendChild(document.createTextNode("logout"));

        box.appendChild(row1);
        box.appendChild(row2);
        box.appendChild(row3);
        spot.appendChild(box)}

    else{
        let spots = document.getElementsByClassName("flex_profile");

        for (let i = 0; i < spots.length; i++){
            spots[i].style.display = "none";
            }
    }
    i += 1;

    }