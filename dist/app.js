const app = Vue.createApp({
    data() {
      return {
        selectedGame: '', // To store the currently selected game
        games: ['Super Mario 64', 'Super Mario Odyssey'], // List of games
        players: [
          {
            name: "Serenmew",
            imageUrl: "/seren.jpg",
            games: ['Super Mario 64', 'Super Mario Odyssey'], // Serenmew plays both games
            socials: [
              { icon: "/twitch.svg", link: "#" },
              { icon: "/discord.svg", link: "#" },
              { icon: "/x-twitter.svg", link: "#" },
              { icon: "/youtube.svg", link: "#" },
            ],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            name: "Serenmew",
            imageUrl: "/seren.jpg",
            games: ['Super Mario 64',], // Serenmew plays both games
            socials: [
              { icon: "/twitch.svg", link: "#" },
              { icon: "/discord.svg", link: "#" },
              { icon: "/x-twitter.svg", link: "#" },
              { icon: "/youtube.svg", link: "#" },
            ],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero placeat aliquam illo fugit laboriosam!",
          },
          
          // Add more player objects here, each with a 'games' field if applicable
        ],
      };
    },
    computed: {
      filteredPlayers() {
        // If no game selected, return all players
        if (!this.selectedGame) return this.players;
        // Return players that play the selected game
        return this.players.filter(player => player.games.includes(this.selectedGame));
      }
    },
  });
  
  app.mount('#twitch_panel_section');
  