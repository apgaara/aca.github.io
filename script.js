function submitQuiz() {
    const correctAnswers = {
        q1: "B",
        q2: "A",
        q3: "C",
        q4: "D",
        q5: "A",
        q7: "D",
        q8: "A",
        q9: "B",
        q10: "C",
        q11: "B",
        q12: "C",
        q13: "C",
        q14: "B",
        q15: "D",
        q16: "C",
        q17: "A",
        q18: "A",
        q19: "B",
        q20: "B",
        q21: "B",
        q22: "A",
        q23: "C",
        q24: "B",
        q25: "D",
        q26: "A",
        q27: "C",
        q28: "D",
        q29: "C",
        q30: "D",
        q31: "True",
        q32: "False",
        q33: "True",
        q34: "True",
        q35: "True",
        q36: "False",
        q37: "True",
        q38: "True",
        q39: "True",
        q40: "False",
        q41: ["A", "D"],
        q42: ["A", "B"],
        q43: ["A", "B", "C", "D"],
        q44: ["A", "B"],
        q45: ["A", "B", "C"],
        q46: ["B", "F", "A"],
        q47: ["B", "C", "D"],
        q48: ["A", "B", "D"],
        q49: ["B", "C", "D"],
        q50: ["A", "B", "C"]
    };

    const userAnswers = {};
    const questions = document.querySelectorAll('.question');

    questions.forEach((question) => {
        const questionId = question.querySelector('p').innerText.split(' ')[0].toLowerCase(); // Extract question ID from the question text
        const selectedAnswers = [];
        question.querySelectorAll('input[type="radio"]:checked').forEach((input) => {
            selectedAnswers.push(input.value);
        });

        if (selectedAnswers.length > 0) {
            userAnswers[questionId] = selectedAnswers.sort().toString();
        }
    });

    let score = 0;
    for (const [key, value] of Object.entries(correctAnswers)) {
        if (Array.isArray(value)) {
            if (userAnswers[key] && userAnswers[key] === value.sort().toString()) {
                score++;
            }
        } else {
            if (userAnswers[key] === value) {
                score++;
            }
        }
    }

    document.getElementById('result').innerText = `You scored ${score} out of ${Object.keys(correctAnswers).length}`;
}
