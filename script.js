'use strict';

const menuLinks = document.querySelector('.menu-links');
const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.querySelector('.overlay');
const li = document.querySelectorAll('li');


const toggle = () =>{
  menuLinks.classList.toggle('show');
  openMenu.classList.toggle('hidden');
  closeMenu.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

for(let i =0; i < li.length;i++){
  li[i].addEventListener('click',toggle);
}

menu.addEventListener('click', toggle);
overlay.addEventListener('click',toggle);