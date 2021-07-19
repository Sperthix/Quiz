const correctAnswers = ['A','A','B','A','B'];

const form = document.querySelector('.quiz-form');
const output = document.querySelector('.result');

let score = 0;

form.addEventListener('submit', e => {
    e.preventDefault();

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    //console.log(userAnswers);  
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) score+=20;
    })
    output.textContent = `Tvoja motivacia je ${score} %`;
    output.classList.remove('d-none');
    scrollTo(0,0);
})



  
