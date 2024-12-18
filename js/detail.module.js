import { Ui } from "./ui.module.js";

export class Details {
   constructor(id) {
      this.ui = new Ui();

      this.closeSection();

      this.getGameDetails(id);
   }


   closeSection(){
      document.getElementById("btnClose").addEventListener("click", () => {
         document.getElementById("games").classList.remove("d-none");
         document.getElementById("details").classList.add("d-none");
      });
   }

  async getGameDetails(id) {
      const loading = document.getElementById("loading");
      loading.classList.remove("d-none");

      const options = {
        	method: 'GET',
	      headers: {
		      'x-rapidapi-key': '39cf6f43d5msh0950cad20f9f913p189e37jsnb63cec1552af',
		      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	      },
      };

      try {
         const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
         const data = await response.json();
         this.ui.displayGameDetails(data);
      } catch (error) {
         console.error("Error fetching game details:", error);
      } finally {
         loading.classList.add("d-none");
      }
   }
}
