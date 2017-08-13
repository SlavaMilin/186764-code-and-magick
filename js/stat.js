'use strict';
window.renderStatistics = function (ctx, names, times) {
  // shadow
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  // rectangle
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  // text
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  // histogram
  var maxTime = Math.max.apply(null, times);
  var histogramHeight = 150;
  var histogramWidth = 40;
  var hisigramTall = -histogramHeight / maxTime;
  var indent = 50;
  var initialX = 150;
  var initialY = 250;
  var step = histogramWidth + indent;
  // painting rectangle
  times.forEach(function (value, index) {
    if (names[index] === 'Вы') {
      ctx.fillStyle = 'rgb(255, 0, 0)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random(0.1, 0.9).toFixed(2) + ')';
    }
    ctx.fillRect(initialX + step * index, initialY, histogramWidth, hisigramTall * value);
  });
  // writing names and times
  times.forEach(function (value, index) {
    ctx.fillStyle = '#000';
    ctx.fillText(parseInt(value, 10), initialX + step * index, initialY + hisigramTall * value - 10);
    ctx.fillText(names[index], initialX + step * index, initialY + 20);
  });
};
