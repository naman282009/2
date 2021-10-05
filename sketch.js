var title;
var mentalAbility;
var generalKnowledge;
var riddles;
var puzzles;
var funAndGames;

function setup() {
  createCanvas(400,600);
  
  title = createElement('h2')
  title.html("Your Brain Lab ");
  title.position(510, 100);

  mentalAbility = createButton('Mental Ability');
  mentalAbility.position(530, 230);

  generalKnowledge = createButton('General Knowledge');
  generalKnowledge.position(520, 280);

  riddles = createButton('Riddles');
  riddles .position(550, 330);

  puzzles = createButton('Puzzles');
  puzzles.position(550, 380);

  funAndGames= createButton('Fun And Games');
  funAndGames.position(530, 430);



}

function draw() {
  background("lightpink");  
  drawSprites();
}