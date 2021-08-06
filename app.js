
const API_Key = "e77d6c36d6a84caeafce979c45eaaf13"; //Api key

const query = "pasta"; //The requirement which recipies you want to show//
const ShowPasta = document.querySelector('.ShowPasta'); //target the div whose class name 'ShowPasta'



fetch(` https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_Key}&query=${query}`).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);

    data.results.forEach(results => {
        ShowPasta.innerHTML += `
        <div class="card-container   ">
        <div class="flex-card">
                    <div class="card mt-5 mb-3" style="max-width: 540px;">
                        <div class="row no-gutters">
                            <div class=" col-6">
                                <div class="card-body">
        
                                    <h3 class="card-title">${results.title}</h3>
        
                                    <p class="desc card-text">Delicious Mouth watering pasta recipies make your own pasta at home with simple recipy</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    <button type="button" class="btn btn-danger ">Get Recipes</button> <br> <br>
                                    <a class="link text-danger" href="#">License: CC BY-SA 3.0</a>
                                </div>
        
                            </div>
                            <div class=" col-6 ">
                                <span class="icon"><i class="fa fa-bookmark-o" aria-hidden="true"></i></span>
                                <img src="${results.image}" class="card-img" alt="Pasta-img">
                            </div>
                        </div>
                        </div>
                    </div>
        
        `

    });


})

