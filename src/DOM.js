/* eslint-disable no-use-before-define */

// ----------------- Credits -----------------
const CREDITS = () => {
  const body = document.querySelector('body');
  const creditsDiv = document.createElement('div');
  const creditsTitle = document.createElement('h1');
  const paragraph = document.createElement('p');
  const btnsDiv = document.createElement('div');
  const home = document.createElement('button');

  creditsDiv.className = 'creditsDiv gameColor';
  paragraph.className = 'w-50 text-center';
  home.className = 'btn btn-light border mx-3';

  home.textContent = 'Home';
  creditsTitle.textContent = 'Credits';
  paragraph.textContent = 'This game was created using Phaser and JavaScript by: Jhonatan Sarrazola';

  btnsDiv.appendChild(home);
  creditsDiv.appendChild(creditsTitle);
  creditsDiv.appendChild(paragraph);
  creditsDiv.appendChild(btnsDiv);
  body.appendChild(creditsDiv);

  home.addEventListener('click', (e) => {
    e.preventDefault();
    creditsDiv.style.display = 'none';
    INIT();
  });
};

// ---------------- LeaderBoard ----------------
const LEADERBOARD = () => {
  const body = document.querySelector('body');
  const leaderBoard = document.createElement('div');
  const leaderBoardTitle = document.createElement('h1');
  const home = document.createElement('button');

  leaderBoard.className = 'creditsDiv gameColor';
  home.className = 'btn btn-light border mx-3';

  home.textContent = 'Home';
  leaderBoardTitle.textContent = 'Leaderboard:';

  leaderBoard.appendChild(leaderBoardTitle);
  leaderBoard.appendChild(home);
  body.appendChild(leaderBoard);

  home.addEventListener('click', (e) => {
    e.preventDefault();
    leaderBoard.style.display = 'none';
    INIT();
  });
};

// ---------------- How to Play ------------------
const HOWTOPLAY = () => {
  const body = document.querySelector('body');
  const howToPlay = document.createElement('div');
  const howToPlayTitle = document.createElement('h1');
  const howToPlayParagraph = document.createElement('p');
  const home = document.createElement('button');

  howToPlay.className = 'creditsDiv gameColor';
  howToPlayParagraph.className = 'w-50 text-center';
  home.className = 'btn btn-light border mx-3';

  home.textContent = 'Home';
  howToPlayTitle.textContent = 'How to play';
  howToPlayParagraph.textContent = 'To play this game you have to use the up, right, and left tiles of your keyboard to jump, move to right, and move to left, respectively.';

  home.addEventListener('click', (e) => {
    e.preventDefault();
    howToPlay.style.display = 'none';
    INIT();
  });

  howToPlay.appendChild(howToPlayTitle);
  howToPlay.appendChild(howToPlayParagraph);
  howToPlay.appendChild(home);
  body.appendChild(howToPlay);
};

// ------------------- Init --------------------
const INIT = () => {
  // Elements creation
  const container = document.querySelector('body');
  const div = document.createElement('div');
  const play = document.createElement('button');
  const btnsDiv = document.createElement('div');
  const title = document.createElement('h1');
  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const howToPlay = document.createElement('button');
  const leaderBoard = document.createElement('button');
  const credits = document.createElement('button');

  // Buttons text
  howToPlay.textContent = 'How to Play';
  leaderBoard.textContent = 'Leaderboard';
  credits.textContent = 'Credits';
  play.textContent = 'Play';

  // Add classes
  div.className = 'gameColor';
  howToPlay.className = 'btn btn-light mx-3';
  leaderBoard.className = 'btn btn-light mx-3';
  credits.className = 'btn btn-light mx-3';
  play.className = 'btn btn-info border mt-3 w-50';

  // Add text to paragraphs and titles
  paragraph1.textContent = 'Welcome to platformer game,';
  paragraph2.textContent = 'I hope you enjoy playing it.';
  title.textContent = 'Platformer';

  // Append childs
  div.appendChild(title);
  div.appendChild(paragraph1);
  div.appendChild(paragraph2);
  btnsDiv.appendChild(howToPlay);
  btnsDiv.appendChild(leaderBoard);
  btnsDiv.appendChild(credits);
  div.appendChild(btnsDiv);
  div.appendChild(play);
  container.appendChild(div);

  // Event listeners
  howToPlay.addEventListener('click', (e) => {
    e.preventDefault();
    div.style.display = 'none';
    HOWTOPLAY();
  });

  leaderBoard.addEventListener('click', (e) => {
    e.preventDefault();
    div.style.display = 'none';
    LEADERBOARD();
  });

  credits.addEventListener('click', (e) => {
    e.preventDefault();
    div.style.display = 'none';
    CREDITS();
  });

  play.addEventListener('click', (e) => {
    e.preventDefault();
    div.style.display = 'none';
  });
};

export default INIT;