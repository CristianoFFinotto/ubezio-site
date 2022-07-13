const submit = document.querySelector('form button');
const subject = document.querySelector('#name');
const message = document.querySelector('#message');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    window.open(`mailto:gianpiero.ubezio@gmail.com?subject=${subject.value}&body=${message.value}`);
})


