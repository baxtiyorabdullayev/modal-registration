"use strict";
let body = document.querySelector("body");

// **************Sign in button
let sighInButton = document.querySelector(".sign-in__button");
let modalBox = document.querySelector(".modal-box");
let bigBox = document.querySelector(".big-container");
let closeButton = document.querySelector(".fa-xmark");

function openModal() {
  modalBox.classList.toggle("modal-box__click");
  bigBox.classList.toggle("clicked");
}
sighInButton.addEventListener("click", openModal);

function closeModal() {
  modalBox.classList.remove("modal-box__click");
  bigBox.classList.remove("clicked");
}
closeButton.addEventListener("click", closeModal);

let accountButton = document.querySelector(".create-account");
let joinButton = document.querySelector(".sigh-in");
let accountSection = document.querySelector(".create-account__section");
let joinSection = document.querySelector(".sigh-in__section");

function accountOpen() {
  accountSection.style.display = "block";
  joinSection.style.display = "none";
  accountButton.classList.add("active-button");
  joinButton.classList.remove("active-button");
}
accountButton.addEventListener("click", accountOpen);

function joinOpen() {
  joinSection.style.display = "block";
  accountSection.style.display = "none";
  joinButton.classList.add("active-button");
  accountButton.classList.remove("active-button");
}
joinButton.addEventListener("click", joinOpen);
