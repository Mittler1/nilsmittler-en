/**
 * Snowflakes inspired by "Realistic Snowfall Effect with CSS and JavaScript"
 * from Jerome Rass from Codepen: https://codepen.io/jerora98/pen/rNgGOpM
 * 
 * Improved and extended by NM
 */

snowflakeChars = ['❄', '❅', '❆', '•', '·', '✻', '🟎', '⭒', '✵'];

fallSecs = 18;
sideSecs = 12;
fontSize = 16;
parallel = 10;
interval = 7500;

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
  snowflake.style.fontSize = Math.random() * fontSize + fontSize / 2 + 'px';
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animation = `fall ${Math.random() * fallSecs + fallSecs / 2}s linear infinite, sideWays ${Math.random() * sideSecs + sideSecs / 2}s ease-in-out infinite`;

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.classList.add('fading');
    setTimeout(() => snowflake.remove(), 2000);
  }, Math.random() * fallSecs * 1000 + fallSecs / 2 * 1000);
}

n = 0;
while (n < parallel) {
  setTimeout(createSnowflake, Math.max(0, Math.random() * interval - interval / 2));
  setInterval(createSnowflake, Math.random() * interval + interval / 2);
  n++;
}
