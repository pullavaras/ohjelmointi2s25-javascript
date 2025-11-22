'use strict';

const dice_rolls = Number(prompt('How many dice rolls?'));


function throw_dice(min, max) {
  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(6);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const dice = throw_dice()
