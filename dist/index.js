/*=============== SHOW MENU ===============*/
const navmeun = document.querySelector('.nav--meun'),
  toggle = document.querySelector('.toggle'),
  navclose = document.querySelector('.nav-close');


if (toggle) {
  toggle.addEventListener('click', () => {
    navmeun.classList.add('SHOWMENU');
  })
}

/*=============== REMOVE MENU MOBILE ===============*/

if (navclose) {
  navclose.addEventListener('click', () => {
    navmeun.classList.remove('SHOWMENU');
  })
}
/*=============== CHANGE BACKGROUND HEADER ===============*/
const srcollHeader = () => {
  const header = document.getElementById('header')

  if (this.scrollY >= 50) {
    header.classList.add('srcoll-header');
  }
  else {
    header.classList.remove('srcoll-header');

  }


}
// Window.addEventListener('scroll', srcollHeader)




/*=============== SHOW SCROLL UP ===============*/
const scrollup = (eo) => {
  const scrollUP= document.getElementById('scrollup');
  this.scrollY>=350? scrollUP.classList.add('show-up'):scrollUP.classList.remove('show-up')




}
window.addEventListener('scroll',scrollup);


/*=============== SCROLL REVEAL ANIMATION ===============*/

let sr= ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
})

sr.reveal(`.home--date ,.footer--container,.section--date,.section__titles,.contact-box`)
sr.reveal(`.home--img `, {delay: 700,origin:'bottom'})
sr.reveal(`.logos-img , .program--card ,.pricing--card `, {interval:100})
sr.reveal(`.choose--img ,.calculate--content `, {origin:'left'})
sr.reveal(`.choose--content ,.calculate--img `, {origin:'right'})



/*=============== CALCULATE JS ===============*/
let calculateform = document.getElementById('calculate-form'),
  calculateCm = document.getElementById('calculate-Cm'),
  calculateKg = document.getElementById('calculate-Kg'),
  calculatemessage = document.getElementById('calculate--message')

const calculateBmi = (eo) => {
  eo.preventDefault();
  if (calculateCm.value === '' || calculateKg.value === '') {
    calculatemessage.classList.remove('color-green');
    calculatemessage.classList.add('color-red');
    calculatemessage.textContent = 'Fill in the Height and Weight👩‍🎓';



    setTimeout(() => {
      calculatemessage.textContent = ''
    }, 3000)
  } else {
    const cm = calculateCm.value / 100,
      kg = calculateCm.value,
      Bmi = Math.round(kg / (cm * cm));


    if (Bmi < 18.5) {
      calculatemessage.classList.add('color-green');
      calculatemessage.textContent = `Your BMI ${Bmi}  is and you are skinny😌`;
    } else if (Bmi < 25) {
      calculatemessage.classList.add('color-green');
      calculatemessage.textContent = `Your BMI is ${Bmi} and you are healthy🥳`;
    } else {
      calculatemessage.classList.add('color-green');
      calculatemessage.textContent = `Your BMI is ${Bmi} and you are overweight😌`;
    }


    calculateCm.value = '';
    calculateKg.value = '';
    setTimeout(() => {
      calculatemessage.textContent = ''
    }, 4000)
  }
}

calculateform.addEventListener('submit', calculateBmi)
/*=============== EMAIL JS ===============*/
// let contact = document.getElementById('contact-footer'),
//   contactmessages = document.getElementById('contact--messages'),
//   contactUser = document.getElementById('contact-user')
// const sendEmail = (eo) => {
//   eo.preventDefault()
//   if (contactUser.value === '') {
//     contactmessages.classList.remove('color-green');
//     contactmessages.classList.add('color-red');
//     contactmessages.textContent=`You must enter your email👆`

//     setTimeout(()=>{
//       contactmessages.textContent=``
//     },3000)
//   }else{
//     emailjs.sendForm('service_vkfwdy8','template_apt5opo', '#contact-footer', 'bWyW3cn3EIGZosUfq')
//     .then(()=>{
//       contactmessages.classList.add('color-green');

//       contactmessages.textContent=`You registered successfully💪`
//       setTimeout(()=>{
//         contactmessages.textContent=``
//       },3000)
//     },(error)=>{
//       alert('OOPS! SOMETHING HAS FAILED...',error)
//     })
//     contactUser.value===""
//   }

// }  
// contact.addEventListener('submit', sendEmail)