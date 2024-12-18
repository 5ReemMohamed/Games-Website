export class Ui {
   displayGameData(data) {
       let Box = ``;
       for (let i = 0; i < data.length; i++) {
        Box += `
          <div class="col">
          <div data-id="${data[i].id}" id="card"  class="card h-100 bg-transparent pointer" >
             <div  class="card-body">
                <div class="position-relative">
                   <img class="card-img-top object-fit-cover" src="${data[i].thumbnail}" />
                </div>
                <div>
                   <div class="d-flex justify-content-between py-3">
                      <h3 class="card-title">${data[i].title}</h3>
                      <span class="badge text-bg-primary p-2 text-capitalize">free</span>
                   </div>
    
                   <p class="card-description small text-center text-white opacity-50 py-2">
                      ${data[i].short_description.split(" ", 8)}
                   </p>
    
                </div>
             </div>
             <footer class="card-footer d-flex justify-content-between">
                <span class="badge badge-bg">${data[i].genre}</span>
                <span class="badge badge-bg">${data[i].platform}</span>
             </footer>
          </div>
       </div>
          `;
       }
 
       document.getElementById("gameData").innerHTML = Box;
    }
 
    displayGameDetails(data) {
       const content = `
       <div class="col-md-4">
       <img src="${data.thumbnail}" class="w-100" alt="details" />
    </div>
    <div class="col-md-8 py-3 py-md-0 ">
       <h3 class="fst-normal">Title: ${data.title}</h3>
       <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
       <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
       <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
       <p class="small">${data.description}</p>
       <a class="btn btn-outline-warning text-capitalize" target="_blank" href="${data.game_url}">show game</a>
    </div>
       `;
 
       document.getElementById("detailsData").innerHTML = content;
    }
 }
 