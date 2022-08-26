// Kelompok Nakama
// 1. Fahrel Gibran Alghany - 24060120130106
// 2. Hanan Nurul Hardyana Zain - 24060120140148
// 3. Muhammad Fiqih Ikhsan - 24060120140097
// 4. Rayhan Ilyas Annabil - 24060120120004
// 5. Rif'an Fatoni Febrianto - 24060120130073

// Scroll
let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    // console.log(value); 
    bg.style.left = value * 0.25 + 'px';
    moon.style.top = value * 0.9 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 5 + 'px';
    text.style.marginTop = value * 0.8 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})

// Swipe
const pages = document.querySelectorAll(".page");
    const translateAmount = 100; 
    let translate = 0;

    slide = (direction) => {

      direction === "next" ? translate -= translateAmount : translate += translateAmount;

      pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
      );
    }

// Animasi slide anggota
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

// Change subtitle when form is submitted
const message = (event) => {
  event.preventDefault();
  const subtitle = document.getElementById("subtitle");
  const name = document.getElementById("input-name").value;

  subtitle.innerHTML = `Thanks for sending a message, ${name}!`;

  document.getElementById("input-name").value = "";
  document.getElementById("telp").value = "";
  document.getElementById("msg").value = "";
}