const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

//Menünün açılıp kapanması
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

//Tıklandığında modülün açılması
open.addEventListener('click', () => modal.classList.add('show-modal'));

//Kapatmaya tıklandığında modülün kapanması
close.addEventListener('click',() =>modal.classList.remove('show-modal'));
//Dışarıda biryere tıklandığında modülün kapanması
window.addEventListener('click', e=>e.target ==modal ? modal.classList.remove('show-modal') : false)