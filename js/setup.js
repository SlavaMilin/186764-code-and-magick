'use strict';

var userDialog = document.querySelector('.setup');
var personsBlock = document.querySelector('.setup-similar');
var similarList = document.querySelector('.setup-similar-list');
var wizzards = {
  firstNames: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  secondNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
  nameSelecter: '.setup-similar-label',
  coatSelecter: '.wizard-coat',
  eyesSelecter: '.wizard-eyes',
};
var selectAttribute = function (attribute) {
  return attribute[Math.round(Math.random() * (attribute.length - 1))];
};
var removeClass = function (element, name) {
  element.classList.remove(name);
};
var setColor = function (node, attributePlace, attributeValue) {
  node.querySelector(attributePlace).setAttribute('style', 'fill: ' + attributeValue);
};
var setName = function (node, attributePlace, firstValue, secondValue) {
  node.querySelector(attributePlace).insertAdjacentText('afterbegin', firstValue + ' ' + secondValue);
};
var renderWizardsTo = function (list) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  for (var i = 0; i < 4; i += 1) {
    var cloneTemplate = similarWizardTemplate.cloneNode(true);
    var randomCoatColor = selectAttribute(wizzards.coatColors);
    var randomEyesColor = selectAttribute(wizzards.eyesColors);
    var randomFirstName = selectAttribute(wizzards.firstNames);
    var randomSecontName = selectAttribute(wizzards.secondNames);
    setColor(cloneTemplate, wizzards.coatSelecter, randomCoatColor);
    setColor(cloneTemplate, wizzards.eyesSelecter, randomEyesColor);
    setName(cloneTemplate, wizzards.nameSelecter, randomFirstName, randomSecontName);
    list.appendChild(cloneTemplate);
  }
};
removeClass(userDialog, 'hidden');
removeClass(personsBlock, 'hidden');
renderWizardsTo(similarList);
