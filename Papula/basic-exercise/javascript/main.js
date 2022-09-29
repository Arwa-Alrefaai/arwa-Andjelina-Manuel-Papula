var sandwiches = JSON.parse(sandwiches)
var fries = JSON.parse(fries)

for(var sandwich of sandwiches){
    for(var frie of fries){
        document.getElementById("display").innerHTML += `
        <div class="content">
            <p>My favorite sandwich is a ${sandwich.sandwich} which has approximately ${sandwich.calories} calories, along with it I enjoy eating ${frie.fries_size} which have about ${frie.calories} calories.</p>
        </div>`;
    }
}

