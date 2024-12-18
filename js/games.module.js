import { Details } from "./detail.module.js";
import { Ui } from "./ui.module.js";

export class Games {
   constructor() {
      this.ui = new Ui();
      this.init();
   }

   init(){
      this.getGames("mmorpg");
      this.setupMenu();
   }

   setupMenu(){
      document.querySelectorAll("a").forEach((link) => {
         link.addEventListener("click", (e) => {
            document.querySelector(".active").classList.remove("active");
            e.target.classList.add("active");
            this.getGames(e.target.dataset.category);
         });
      });
   }

   async getGames(category) {
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
         const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
         const data = await response.json();
         this.ui.displayGameData(data);
         this.setupCard();
      } catch (error) {
         console.error("Error fetching games data:", error);
      } finally {
         loading.classList.add("d-none");
      }
   }

   setupCard() {
      document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", () => {
            const id = card.dataset.id;
            this.showGameDetails(id);
         });
      });
   }

   showGameDetails(idGame) {
      const details = new Details(idGame);
      document.getElementById("games").classList.add("d-none");
      document.getElementById("details").classList.remove("d-none");
   }
}
