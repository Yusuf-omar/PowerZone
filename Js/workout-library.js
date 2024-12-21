document.addEventListener('DOMContentLoaded', function() {
    const workoutBoxes = document.querySelectorAll('.workout-box');

    workoutBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const plan = box.getAttribute('data-plan');
            showWorkoutDetails(plan);
        });
    });

    document.getElementById('back-button').addEventListener('click', () => {
        document.getElementById('workout-content').classList.add('hidden');
    });
});

function showWorkoutDetails(plan) {
    const details = {
        'bro-split': {
            exercises: ['Day 1: Chest', 'Day 2: Back', 'Day 3: Shoulders','Day 4: Arms','Day 5: Legs' ]
        },
        'arnold-split': {
            exercises: ['Day 1: Chest & Back', 'Day 2: Shoulders & Arms ', 'Day 3: Lowerbody & Lowerback'],
        },
        'ppl': {
            exercises: ['Day 1: Push - Chest & Triceps & Shoulders', 'Day 2: Pull - Back & Biceps', 'Day 3: Legs - Lowerbody'],
        },
        'upper-lower': {
            exercises: ['Day 1: Upper Body - Chest & Back & Shoulders', 'Day 2: Lower Body - Quads & Hamstrings & Glutes',],
        },
    };

    const selectedDetails = details[plan];
    const detailsContainer = document.getElementById('workout-details');
    
    detailsContainer.innerHTML = `
        <h2>${plan.replace('-', ' ').toUpperCase()}</h2>
        <ul>
            ${selectedDetails.exercises.map(exercise => `<li>${exercise}</li>`).join('')}
        </ul>
    `;

    document.getElementById('workout-content').classList.remove('hidden');
}
