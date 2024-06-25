function submitQuestion() {
    var question = document.getElementById("question").value.trim();
    // Here you can implement functionality to submit the question, e.g., store it in a database or send it via email.
    // For demonstration purposes, let's log the question to console.
    console.log("Submitted question:", question);
    alert("Question submitted successfully!"); // You can customize this alert message.
    document.getElementById("question").value = ""; // Clear the textarea after submission
    // Optionally, you can add code to update the FAQ section with the new question.
}

// You can add more JavaScript functions as needed for your specific application.
