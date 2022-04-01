class Form {
  //criando os elementos html para o formulário do jogo
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "game title");
    this.greeting = createElement("h2");
  }
  //definindo as posições dos elementos html
  setElementsPosition() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  //definindo os estilos dos elementos html
  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  //método para esconder os elementos
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  //método acionado após clicar no botão do formulário
  handleMousePressed() {
    this.playButton.mousePressed(() => {//verificando se o mouse foi clicado no botão
      this.input.hide();
      this.playButton.hide();
      var message = `
      Olá ${this.input.value()}
      </br>espere o outro jogador entrar...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });
  }

  
  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
