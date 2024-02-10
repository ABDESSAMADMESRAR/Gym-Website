document.querySelector('#btm').addEventListener("click", () => {
window.scrollTo(0,document.body.scrollHeight)
})



document.querySelector('#btm2').addEventListener("click", () => {
  window.scrollTo(0,document.body.scrollHeight)
  })


  document.querySelector('#btm3').addEventListener("click", () => {
    window.scrollTo(0,document.body.scrollHeight)
    })
    /*=============== EMAIL JS ===============*/
    let contact = document.getElementById('contact-footer'),
  contactmessages = document.getElementById('contact-message'),
  contactUser = document.getElementById('contact-user'),
  contactUser1 = document.getElementById('contact-user1'),
  contactUser2 = document.getElementById('contact-user2'),
  contactUser3 = document.getElementById('contact-user3'),
  contactUser4 = document.getElementById('contact-user4'),
  contactUser5 = document.getElementById('contact-user5')
const sendEmail = (eo) => {
  eo.preventDefault()
  if (contactUser.value === '' &&contactUser1.value === ''&&contactUser2.value === '' &&contactUser3.value === '' &&contactUser4.value === '' &&contactUser5.value === '') {
    contactmessages.classList.remove('color-green');
    contactmessages.classList.add('color-red');
    contactmessages.textContent=`Please complete the information👆`

    setTimeout(()=>{
      contactmessages.textContent=``
    },3000)
  }else{
    emailjs.sendForm('service_vkfwdy8','template_apt5opo', '#contact-footer', 'bWyW3cn3EIGZosUfq')
    .then(()=>{
      contactmessages.classList.add('color-green');

      contactmessages.textContent=`You have been registered successfully. See you soon💪`
      setTimeout(()=>{
        contactmessages.textContent=``
      },3000)
    },(error)=>{
      alert('OOPS! SOMETHING HAS FAILED...',error)
    })
    contactUser.value===""
  }

}  
contact.addEventListener('submit', sendEmail)