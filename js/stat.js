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
var drawRect = function (context, color, x, y, width, height) {
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
};
var drawText = function (context, text, x, y, color, font) {
  context.fillStyle = color;
  context.font = font;
  context.fillText(text, x, y);
};
var drawColumn = function (context, name, time) {
  var positionX = 150;
  var positionY = 250;
  var columnWidth = 40;
  var columnHeight = -150;
  var indent = 50;
  var step = columnWidth + indent;
  var maxTime = Math.max.apply(null, time);
  for (var i = 0; i < name.length; i++) {
    var randomColor;
    var tallRating = time[i] / maxTime;
    if (name[i] === 'Вы') {
      randomColor = 'rgb(255, 0, 0)';
    } else {
      randomColor = 'rgba(0, 0, 255, ' + Math.random(0.11, 0.89).toFixed(2) + ')';
    }
    var column = {
      color: randomColor,
      x: positionX + step * i,
      y: positionY,
      width: columnWidth,
      height: columnHeight * tallRating
    };
    var columnScore = {
      text: parseInt(time[i], 10),
      x: column.x,
      y: column.y + column.height - 10,
      color: '#000',
      font: '16px PT Mono'
    };
    var columnName = {
      text: name[i],
      x: column.x,
      y: column.y + 20,
      color: columnScore.color,
      font: columnScore.font
    };
    drawRect(context, column.color, column.x, column.y, column.width, column.height);
    drawText(context, columnScore.text, columnScore.x, columnScore.y, columnScore.color, columnScore.font);
    drawText(context, columnName.text, columnName.x, columnName.y, columnName.color, columnName.font);
  }
};
window.renderStatistics = function (ctx, names, times) {
  // histogram
  // drawing shadow
  drawRect(ctx, shadow.color, shadow.x, shadow.y, shadow.width, shadow.height);
  // drawing cloud
  drawRect(ctx, box.color, box.x, box.y, box.width, box.height);
  // drawing first letter
  drawText(ctx, firstLetter.text, firstLetter.x, firstLetter.y, firstLetter.color, firstLetter.font);
  // drawing second letter
  drawText(ctx, secondLetter.text, secondLetter.x, secondLetter.y, secondLetter.color, secondLetter.font);
  // drawing column
  drawColumn(ctx, names, times);
};
