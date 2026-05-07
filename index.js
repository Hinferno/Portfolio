// mobile menu components
const menuIconJs = document.querySelector('.menu-icon');
const closeIconJs = document.querySelector('.close-icon');
const mobile = document.querySelector('.mobile');

//button components
const contactsBtnJs = document.querySelectorAll('.btn-style1');
const jobsBtnJs = document.getElementById('jobs-btn');
const istTarget = document.getElementById('contacts');
const target2 = document.getElementById('jobs');

//button events
//contacts buttons
contactsBtnJs.forEach((button) => {
    button.addEventListener('click', (event) => {
        // 1. Prevent any default jumps/refreshes
        event.preventDefault(); 

        // 2. Scroll to the section
        if (istTarget) {
            istTarget.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        }
        // 3. Close the menu safely
        closeMenu(); 
    });
});
//jobs button
jobsBtnJs.addEventListener('click', () => {
  target2.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  })
})

//functions

function openMenu(){
  mobile.classList.add('active');
  menuIconJs.style.display = 'none';
  closeIconJs.style.display = 'block';
}

function closeMenu(){
  mobile.classList.remove('active');
  menuIconJs.style.display = 'block';
  closeIconJs.style.display = 'none';
}


//open Menu
menuIconJs.addEventListener('click', openMenu);

//close Menu
closeIconJs.addEventListener('click', closeMenu);

//close Mobile-menu onScroll
let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
  if (mobile.classList.contains('active')){
    const currentScroll = window.scrollY;
    //close if scroll more than 10px
    if(Math.abs(currentScroll - lastScroll) > 10) {
        closeMenu();
    }
  }
    lastScroll = window.scrollY;
})