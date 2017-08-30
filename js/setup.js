'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var userDialog = document.querySelector('.setup');
var inputText = userDialog.querySelector('.setup-user-name');
var setupSubmit = userDialog.querySelector('.setup-submit');
var setupBtn = document.querySelector('.setup-open');
var setupCross = document.querySelector('.setup-close');

var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
var wizardFireBoll = userDialog.querySelector('.setup-fireball-wrap');

var personsBlock = document.querySelector('.setup-similar');
var similarList = document.querySelector('.setup-similar-list');

var wizzards = {
  firstNames: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  secondNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
  fireBollColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
  nameSelector: '.setup-similar-label',
  coatSelector: '.wizard-coat',
  eyesSelector: '.wizard-eyes',
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
    setColor(cloneTemplate, wizzards.coatSelector, randomCoatColor);
    setColor(cloneTemplate, wizzards.eyesSelector, randomEyesColor);
    setName(cloneTemplate, wizzards.nameSelector, randomFirstName, randomSecontName);
    list.appendChild(cloneTemplate);
  }
};

var openPopUp = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', pushEscClose);
};
var closePopUp = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', pushEscClose);
};
var pushEscClose = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopUp();
  }
};

var onBtnClick = function () {
  openPopUp();
};
var onBtnPush = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopUp();
  }
};
var onBtnClickClose = function () {
  closePopUp();
};
var onBtnPushClose = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopUp();
  }
};
var onInputFocusIn = function () {
  document.removeEventListener('keydown', pushEscClose);
};
var onInputFocusOut = function () {
  document.addEventListener('keydown', pushEscClose);
};
var onCoatClick = function () {
  wizardCoat.setAttribute('style', 'fill: ' + selectAttribute(wizzards.coatColors) + ';');
};
var onEyesClick = function () {
  wizardEyes.setAttribute('style', 'fill: ' + selectAttribute(wizzards.eyesColors) + ';');
};
var onFireBollClick = function () {
  wizardFireBoll.setAttribute('style', 'background: ' + selectAttribute(wizzards.fireBollColors) + ';');
};

setupBtn.querySelector('img').setAttribute('tabindex', 0);
setupCross.setAttribute('tabindex', 0);

setupBtn.addEventListener('click', onBtnClick);
setupBtn.addEventListener('keydown', onBtnPush);
setupCross.addEventListener('click', onBtnClickClose);
setupCross.addEventListener('keydown', onBtnPushClose);
inputText.addEventListener('focusin', onInputFocusIn);
inputText.addEventListener('focusout', onInputFocusOut);
setupSubmit.addEventListener('click', onBtnClickClose);
setupSubmit.addEventListener('keydown', onBtnPushClose);

wizardCoat.addEventListener('click', onCoatClick);
wizardEyes.addEventListener('click', onEyesClick);
wizardFireBoll.addEventListener('click', onFireBollClick);

removeClass(personsBlock, 'hidden');
renderWizardsTo(similarList);
