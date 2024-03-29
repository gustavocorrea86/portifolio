const name = document.querySelector('#name');
    const nameValid = RegExp (/[a-z\s]{2,}$/i) 
    const adress = document.querySelector('#adress');
    const emailValid = RegExp (/[a-z0-9_.-]{2,}\@[a-z0-9_.-]{2,}\.[a-z]{2,}$/i)
    const phone = document.querySelector('#phone')
    const phoneValid = RegExp (/([0-9]{2})\s([0-9]{8,9})$/)
    let modal = document.querySelector('dialog')
    let fundo = document.querySelector('body')
    let inputBorder = document.querySelector('input')

    closeModal = document.querySelector('button')
    btnNext = document.querySelector('.btnNext')
    localStorage.clear()
    btnNext.addEventListener('click', ()=>{
        if((nameValid.test(name.value)) && (emailValid.test(adress.value))&&(phoneValid.test(phone.value))){
            location.href = 'https://gustavocorrea86.github.io/portifolio/page6/page6_step2.html'
            localStorage.nameUser = name.value
            localStorage.emailUser = adress.value
            localStorage.phoneUser = phone.value
        }else{
            modal.showModal()
            fundo.style.opacity = '0.5'
        } 
    })
    closeModal.addEventListener('click', ()=>{
        modal.close()
        fundo.style.opacity = '1'
    })