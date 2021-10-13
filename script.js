// Text Adventure Game

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry GAME OVER!";

const start = `Welcome to the Space Dream Text Adventure Game. Click 'OK' to start the game.`;

const q1 = `Last night, you went to sleep in your own bed. You wake up now floating in a silver room. You notice a porthole window with a planet (maybe Earth) visible way below. You turn your head opposite the planet and see a sliding door. It is open. Do you...
1. Collect your thoughts and wait to wake up from what must be a dream.
OR
2. Try to float through the sliding door.
${enter}`;

const gameOver1 = `You push against the ceiling and walls of the room and make swimming movements until you manage to get to the door. When you finally float outside into a long corridor, a huge man in a uniform sees you and yells in a strange language.  Many more huge space soldiers run down the corridor (somehow, they are not floating), grab you, and fling you into a small compartment. You hear a horrible whoosh sound as you are sucked out into the void of space. Just before life fades as you look at Earth far below, you think, “I should have waited to wake up.” ${gameOver}`;

const q2 = `You float around the room for what feels like an hour. You see huge soldiers walking down the corridor outside the room, but they are so big (8 feet tall at least) that you do not call to them. Finally, a young boy walks into the room and sees you floating above him. He quickly presses a button, and the door slides shut. Do you...
1. Continue to wait to wake up from what must be a dream.
OR
2.Introduce yourself to the young boy.
${enter}`;

const gameOver2 = `The boy is startled and frightened when you start talking to him. He screams and presses the button to open the door. He yells something in a language with sounds like no language you've ever heard. Five of the huge soldiers run into the room and grab you. They pull you out into the corridor and fling you into a compartment. You hear a horrible whoosh sound as you are sucked out into the void of space. Just before life fades as you look at Earth far below, you think, “I should have waited to wake up.” ${gameOver}`;

const q3 = `The young boy studies you floating above him. An older girl walks into the room. When she sees you, she quickly slides the door shut. She says something to the boy in a language that sounds like no language you’ve ever heard. The boy giggles. Then the girl uses a device that translates her language into English. “Who are you? How did you get in here?” she asks. Do you…
1. Continue to wait to wake up from what must be a dream.
OR
2.Tell the girl your name & that you just woke up here. 
${enter}`;

const gameOver3 = `The girl seems upset that you don’t answer her. She throws the device down and it breaks. She screams and the door slides open. Those huge space soldiers come running in and grab you. The girl says something to them and they fit you with a collar. You have to watch as Earth is conquered by the children's parents and their giant soldiers. You spend the rest of your life as their pet. ${gameOver}`;

const q4 = `The boy and girl seem amazed that you've spoken and they've understood. “Weird," the girl says through the device. "Here, put this on,” she says as she reaches in her pocket and hands you a bracelet. As soon as you put it on, you easily float down by just thinking to do so. “Now,” the girl says, “we must take you to meet mother...or would you rather meet father?” Do you...
1. Say that you want to meet mother.
OR
2.Say that you want to meet father.
${enter}`;

const gameOver4 = `The girl and boy each take one of your hands and walk you into the inner corridor. You pass many of the huge soldiers, but they ignore you. You believe that the children's father must be the leader of these aliens. The kids take you into a room and over to a huge man (even bigger than the soldiers). The children talk to him in their language, and he becomes very angry. The girl turns to you and says (through her device and her tears), "Father has forbidden us from telling mother that your planet has intelligent beings." Her father reaches out his giant hand, and the girl puts her device in it. You know as he crushes it that all hope is lost. The soldiers fit you with a collar. You have to watch as Earth is conquered by the children's parents and their giant soldiers. You spend the rest of your life as their pet.   
${gameOver}`;

const q5 = `The girl and boy each take one of your hands and walk you into the inner corridor. You pass many of the huge soldiers, but they ignore you. You believe that the children's parents must be the leader of these aliens. The kids take you into a room and over to a huge woman (even bigger than the soldiers). The children talk to her in their language, and she becomes very angry and then softens. She uses her daughter's device and asks you, "Is a taco a sandwich?" Do you...
1. Say your opinion on whether a taco is or is not a sandwich.
OR
2. Say tacos and sandwiches are delicious, and that's all that matters.
${enter}`;

const gameOver5 = `The mother decides she does not like your answer. She tells you that the only right answer is that tacos and sandwiches are delicious. She rages at you for a while in English and then tells you that she was going to convince her husband NOT to use Earth for meat if you gave the right answer, but now she could not reasonably do so. Mother screams for Father and they eat you together (the children are crying as they're sent to their rooms without supper). Your last thought is that you have doomed Earth. ${gameOver}`;

const win = `The mother is pleased with your answer. She tells you that she had heard that the beings on Earth were primitive and would make good meat for her people, but now that she knows that Earthlings are intelligent, she has decided to invade another planet. She teleports you and herself into the International Space Station. She asks to speak to NASA and informs them that because of you, Earth is saved. She then leaves you on the ISS and you go home a hero. What an amazing space dream! YOU WIN!!!`;
// Alerts the user to start the game
alert(start);

// Sets the value of userInput to the user's entry
let userInput=prompt(q1);

// 1st Conditional Statement
// NOTE: Prompt returns the value entered as a string. That is why double equals == is used instead of triple equals === here.
if (userInput == 1) {
    userInput = prompt(q2);

    // 2nd Conditional Statement Begins (NOTE: this one and the following ones are nested all within the 1st Conditional Statement)
    if(userInput == 1){
        userInput = prompt(q3);

        // 3rd Conditional Statement Begins
        if(userInput == 2){
            userInput = prompt(q4);

            // 4th Conditional Statement Begins
            if(userInput == 1){
                userInput = prompt(q5);

                // 5th Conditional Statement
                if(userInput == 2){
                    // NOTE: THE LAST ONE IS AN ALERT!!
                    alert(win);
                } else {
                    alert(gameOver5);
                }
            // 4th Conditional Statement Ends
            } else {
                alert(gameOver4);
            }
        // 3rd Conditional Statement Ends
        } else {
            alert(gameOver3);
        }
    // 2nd Conditional Statement Ends
    } else {
        alert(gameOver2);
    }
// 1st Conditional Statement Ends
} else {
    alert(gameOver1);
}
