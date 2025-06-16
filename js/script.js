// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict"
// This function calculates the sum of all numbers from 0 to the user input number

function repeatSentence () {

    let counter = 0

    let finalSentences = ""

    let sentence = document.getElementById("userSentence").value

    let userNum = parseInt(document.getElementById("userNum").value)

    do {
        finalSentences = finalSentences + sentence + "<br>"

        counter = counter + 1
    }while (counter < userNum)

    document.getElementById("display-results").innerHTML = finalSentences
}