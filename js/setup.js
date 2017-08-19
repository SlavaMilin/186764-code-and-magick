'use strict';

var userDialog = document.querySelector('.setup');
var personsBlock = document.querySelector('.setup-similar');
var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizzards = {
  firstNames: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  secondNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
  name: '.setup-similar-label',
  coat: '.wizard-coat',
  eyes: '.wizard-eyes',
};
var selectAttribute = function (attribute) {
  return attribute[Math.round(Math.random() * (attribute.length - 1))];
};
var removeClass = function (element, name) {
  element.classList.remove(name);
};
var setColor = function (node, attributePlace, attributeValue, index) {
  node.querySelectorAll(attributePlace)[index].setAttribute('style', 'fill: ' + attributeValue);
};
var setName = function (node, attributePlace, attributeValue, index) {
  node.querySelectorAll(attributePlace)[index].insertAdjacentHTML('afterbegin', '<span>' + attributeValue + ' </span>');
};
var cloneElements = function () {
  for (var i = 0; i < 4; i += 1) {
    var cloneTemplate = similarWizardTemplate.cloneNode(true);
    similarList.appendChild(cloneTemplate);
    setColor(similarList, wizzards.coat, selectAttribute(wizzards.coatColors), i);
    setColor(similarList, wizzards.eyes, selectAttribute(wizzards.eyesColors), i);
    setName(similarList, wizzards.name, selectAttribute(wizzards.secondNames), i);
    setName(similarList, wizzards.name, selectAttribute(wizzards.firstNames), i);
  }
};
removeClass(userDialog, 'hidden');
removeClass(personsBlock, 'hidden');
cloneElements();
