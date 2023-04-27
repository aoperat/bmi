document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const activity = document.getElementById('activity').value;
    
    const bmi = calculateBMI(weight, height);
    const plan = generatePlan(gender, age, bmi, activity);

    document.getElementById('bmi-result').textContent = `Your BMI is ${bmi.toFixed(1)}`;
    document.getElementById('plan-result').textContent = plan;
    document.getElementById('results').classList.remove('hidden');
});

function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

function generatePlan(gender, age, bmi, activity) {
    // Generate weight management plan based on gender, age, BMI, and activity level.
    const plan = [];

    if (bmi < 18.5) {
        plan.push("You are underweight. You may need to gain weight.");
    } else if (bmi >= 18.5 && bmi < 24.9) {
        plan.push("You have a healthy weight. Maintain your current weight.");
    } else if (bmi >= 25 && bmi < 29.9) {
        plan.push("You are overweight. You may need to lose weight.");
    } else {
        plan.push("You are obese. You may need to lose weight.");
    }

    const activityLevels = {
        1: "very low",
        2: "low",
        3: "average",
        4: "high",
        5: "very high"
    };

    plan.push(`Your activity level is ${activityLevels[activity]}.`);
    plan.push("To manage your weight, consider adjusting your diet and exercise routine accordingly.");

    return plan.join(" ");
}

