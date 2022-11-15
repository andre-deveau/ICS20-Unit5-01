// Copyright (c) 2022 Andre Deveau All rights reserved
//
// Created by: Andre Deveau
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function updates the slider value.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICS2O-Unit5-01-HTML-Slider-Example/sw.js",
    {
      scope: "/ICS2O-Unit5-01-HTML-Slider-Example/",
    }
  )
}

const randomNumebr = Math.floor(Math.random() * 6) + 1

function updateSliderValue(valueFromSlider) {
  document.getElementById("answer").innerHTML = valueFromSlider

  // process
  if (valueFromSlider == randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was, " + randomNumber + "!" + " You got it! Good Job."
  }

  // blocks of code to be executed if condition1 is true
  if (valueFromSlider != randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was, " + randomNumber + "!" + " Nice guess, but try again."
  }
}
