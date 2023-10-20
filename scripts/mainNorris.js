document.getElementById("fetchData").addEventListener("click", function() {
    console.log("pressed");
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
            document.getElementById("dataContainer").innerHTML = `
            <p>${data.value}</p>
            `;
        })
        .catch(error => {
            console.error("There was an error fatching data: ", error);
        });
})