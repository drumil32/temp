

let form = document.querySelector('form');
let Container = document.querySelector("#datafromapi")


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let searchTerm = document.getElementById('Search_data').value; // Get the search term from the input
    let query = searchTerm;
    let getdata = async function () {

        try {
            let response = await fetch('http://api.serpstack.com/search?access_key=b80c69b2c13c284e2817f5d41dc7108b&type=web&query=' + query);
            let data = await response.json();

            data.organic_results.forEach(element => {

                let newDiv = document.createElement('div');
                newDiv.innerHTML = `<h3>${element.title}</h3>
                <p>${element.snippet}</p>
                <a href="${element.url}">Visit Site:''</a>`;
                Container.appendChild(newDiv);
                console.log(element);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    getdata();
});
