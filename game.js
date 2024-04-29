let container = document.querySelector("#container");

for (let i=1; i<=16;i++){
    let rows=document.createElement('div');
    container.appendChild(rows);
}

for(let i=1; i<=16;i++){
    let columns=document.createElement('div');
    container.appendChild(columns);
}


