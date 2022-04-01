class Player {
  //construindo o jogador
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
    this.rank = 0;
    this.fuel = 185;
    this.life = 185;
    this.score = 0;
  }

  //método que adiciona o novo jogador ao banco de dados.
  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      score: this.score
    });
  }

  //método que consulta as posições dos jogadores no banco de dados e armazena nos atributos do player
  getDistance() {
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    });
  }

  //método que consulta do playerCount no banco de dados
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  //método que atualiza o playerCount no banco de dados
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  //método que atualiza os dados do jogador no banco de dados
  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      score: this.score,
      life: this.life
    });
  }

  //método estático que consulta os dados dos jogadores no banco de dados
  //pega os dados do banco e armazena em allPlayers
  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }

  //método que consulta o rank do jogador no banco e armazena no atributo rank
  getCarsAtEnd() {
    database.ref("carsAtEnd").on("value", data => {
      this.rank = data.val();
    });
  }

  //método estático que atualiza o rank do jogador no banco de dados
  static updateCarsAtEnd(rank) {
    database.ref("/").update({
      carsAtEnd: rank
    });
  }
}
