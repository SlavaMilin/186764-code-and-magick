'use strict';

var shadow = {
  color: 'rgba(0, 0, 0, 0.7)',
  x: 110,
  y: 20,
  width: 420,
  height: 270
};
var box = {
  color: 'white',
  x: 100,
  y: 10,
  width: 420,
  height: 270
};
var firstLetter = {
  text: 'Ура вы победили!',
  x: 120,
  y: 40,
  color: '#000',
  font: '16px PT Mono'
};
var secondLetter = {
  text: 'Список результатов!',
  x: 120,
  y: 60,
  color: '#000',
  font: '16px PT Mono'
};
var drawRect = function (context, rectangle) {
  context.fillStyle = rectangle.color;
  context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
};
var drawText = function (context, letter) {
  context.fillStyle = letter.color;
  context.font = letter.font;
  context.fillText(letter.text, letter.x, letter.y);
};
window.renderStatistics = function (ctx, names, times) {
  // histogram
  var maxTime = Math.max.apply(null, times);
  var histogramHeight = 150;
  var histogramWidth = 40;
  var histogramTall = -histogramHeight / maxTime;
  var indent = 50;
  var initialX = 150;
  var initialY = 250;
  var step = histogramWidth + indent;
  // painting rectangle
  var drawHistogram = function (value, index) {
    if (names[index] === 'Вы') {
      ctx.fillStyle = 'rgb(255, 0, 0)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random(0.1, 0.9).toFixed(2) + ')';
    }
    ctx.fillRect(initialX + step * index, initialY, histogramWidth, histogramTall * value);
  };
  // writing names and times
  var drawHistogramText = function (value, index) {
    ctx.fillStyle = '#000';
    ctx.fillText(parseInt(value, 10), initialX + step * index, initialY + histogramTall * value - 10);
    ctx.fillText(names[index], initialX + step * index, initialY + 20);
  };
  drawRect(ctx, shadow);
  drawRect(ctx, box);
  drawText(ctx, firstLetter);
  drawText(ctx, secondLetter);
  times.forEach(drawHistogram);
  times.forEach(drawHistogramText);
};
