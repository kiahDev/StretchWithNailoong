const toggleButton = document.querySelector('.toggle-btn');
const progressBar = document.querySelector('.progress-bar');
const typesExercise = document.querySelector('.types');
const timer = document.querySelector('.clock');
const gif = document.querySelector('.gif')

let timeLeft = 59;
let countdown = null;
let isRunning = false;

let typeIndex = 0;
const changeInterval = 10;

const stretchingTypes = [
    "Stretch your knees 🦵",
    "Stretch your back 🫂",
    "Move your neck 🤸‍♂️",
    "Rotate your shoulders 🤷‍♂️",
    "Stretch your arms 💪",
    "Twist your waist 🔄",
    "Bend your fingers 🤲",
    "Stretch your legs 🏃‍♂️"
]

toggleButton.addEventListener('click', function() {
    if (!isRunning) {
        
        gif.src = 'https://media1.tenor.com/m/6iqUYEgLmz0AAAAC/nailong-nailong-dancing.gif';

        typesExercise.textContent = stretchingTypes[typeIndex];
        typeIndex = (typeIndex + 1) % stretchingTypes.length;

        countdown = setInterval(function() {

            timer.textContent = timeLeft;

            let percent = (timeLeft / 59) * 100; 
            progressBar.style.width = percent + '%';

            if (timeLeft % changeInterval === 0) {
    
                typesExercise.classList.add('fade');

                setTimeout(() => {
                    typesExercise.textContent = stretchingTypes[typeIndex];
                    typeIndex = (typeIndex + 1) % stretchingTypes.length;

                    typesExercise.classList.remove('fade');
                }, 300); 
            }

            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(countdown);
                toggleButton.textContent = 'Start';
                timeLeft = 59;
                isRunning = false;
                progressBar.style.width = '100%'
                gif.src = 'https://media1.tenor.com/m/_vc6PMnHMVUAAAAC/nailong-yellow-dragon.gif';
            }

        }, 1000);       

        toggleButton.textContent = 'Pause';
        isRunning = true;

    } else {
        clearInterval(countdown);
        toggleButton.textContent = 'Resume';
        isRunning = false;
        gif.src = 'https://media1.tenor.com/m/dKJ_vGqO9qgAAAAC/nailong-yellow-dragon.gif';
        typesExercise.textContent = 'Comeback soon, Nailoong is sad';
        typesExercise.style.color = 'red';
    }
})