function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "hi") {
        return "Hello there!";
    } else if (input == "how are you") {
        return "Great! What about you..";
    } else if (input == "fine") {
        return "then, Whatsup";
    } else if (input == "tell me a joke") {
        return "Why did the scarecrow get promoted? bcz she was outstanding in her field.";
    } else if (input == "tell me something") {
        return "How was your day?";
    } else if (input == "good") {
        return "Me too!";
    } else if (input == "bye") {
        return "Have a nice day";
    } else if (input == "i love coding!") {
        return "Great!";
    } else {
        return "Try asking something else!";
    }
}
