window.onload = function () {//encases all code, makes sure all JS is loaded before any code can run

    var story = {//story object

        //Loop1

        opener: {//Properties in object, containing text and options
            text: "Deep in the murky woods, far from civilization, is a house. Not a comfortable safety of our modern appliances and neighbors, but a rotting shell of the failed beginnings of a society, haunted by the past`s sins. Whether it`d be from curiosity, a dare, ghost hunting, or sheer stupidity, you found this place. Do you enter the house?",
            options: [["enter", "Yes"], ["funnyend", "No"]]
        },

        enter: {//entering the house
            text: "You enter the house; a cold chill washes over you as if a barrier has been crossed. A door slams behind you! A gust of wind must have picked up. Where do you go now?",
            options: [["livingroom", "Take a right"], ["library", "Take a left"]]
        },

        livingroom: {//the living room
            text: "The Living Room gives you a feeling of familiarity, but off. The cold light makes a feeling of “un-life” radiate from this room, like it is a space that doesn't want you here. Where do you go now?",
            options: [["outside", "Proceed"], ["searchtheroomfurther", "Look Around"]]
        },

        library: {//the library
            text: " A small library opens up to you, the smell of moth-eaten pages greeting your nostrils like cold water down your neck. The floor is decorated by rusty limestone tiles, with a scratched-out heart or flower on it. The bookshelves flank two doors, to your left and right. As you Where do you go now?",
            options: [["outside", "The Right"], ["ballroom", "The Left"]]
        },

        ballroom: {//the ballroom, first meeting with the ghost
            text: "The ballroom gives a cold feeling of unwelcoming to the area, the cold air freezing over as a blue figure is seen. Your confused senses can only describe it as a solitary, human-like essence, wearing a ripped and torn Victorian Dress with flowers and roses decorated on it. It dances, then stops, to look at you with a dead, rotten face. What do you do now?",
            options: [["possessed", "Approach it"], ["wannahelp", "I want to help you"]]
        },

        searchtheroomfurther: {//the choice to search the living room further
            text: "You notice a loose plate in the floor. Upon further inspection, it turrns out to be a hidden stair case heading downwards into a dark cold room, with worn roses as it's wallpaper.",
            options: [["whyuhere", "Enter"], ["leaveasisandcontinueon", "Outside"]]
        },

        whyuhere: {//ghost asks why you are here
            text: "As you head down the stair case you noice that the air is becoming much cold and thin. After a bit of walking you come to a large opening where a dark figure greets you. The figure says, 'Why have you come here.' How do you respond?",
            options: [["timeloop", "I am looking for adventure"], ["possessed", "Stay quite"], ["wannahelp", "I want to help you"]]
        },

        outside: {//the outside of the house
            text: "The muck you saw from outside was highlighted by Green and mounds of dirt. The hoot of owls and howls of feral wolves silences your breathing. A Shed greets you, and a fence boxes you in. what do you do?",
            options: [["fence", "Go to the fence"], ["shed", "Head into the shed"], ["returninside", "Go back inside"]]
        },

        fence: {//the fence
            text: "The fence is rusted and decrepit, yet still holds strong after all these years. It's easily double your size, but rust makes easy to hold on tightly without slipping. What do you do?",
            options: [["returninside", "Go back inside"], ["vaultgate", "Vault the Fence"]]
        },

        returninside: {//allows to go back inside
            text: "Which room do you go to?",
            options: [["library", "Go to the Library"], ["livingroom", "Go to the Living Room"]]
        },

        wannahelp: {//offer to help the ghost
            text: "What do you think you could do for me?",
            options: [["possessed", "Approach"], ["timeloop", "I can set you free"]]
        },

        timeloop: {//the loop to opener 2
            text: "Then I have just the thing for you.",
            options: ["opener2", "̴́̓͐̋̕ḅ̷̲̟̣͍͈̆́̔͌̐͋́̈́͐̈́̕͘͠o̵̮̤̟̺͎͑́͗̾̏͆̍́̐̚͜ư̸̲͔̦͕̈́̉͆͊͂͆͋̉̓̓͘͝ͅć̵̅̀̉ë̶̖͙̯̣̖͛̏̿̈̔̚͜͜͝ ̵̡̧̧̢̠̲̥͓̰͙̙̘̪͂̈́́̍́d̴̨̡̧̺̼͎̝̹̗̼̓͠ͅe̶̬̺̥̰̱̖̪̅̃̒͒̂̑̑̀̿ͅț̵̹̠̣̊̏̂̆̈́͗͋̆̉̇͒́ḛ̵̡̢͓͔̗̺͔͚͉̘̟͖͉́͂͂̓̋͌͋̍͠ͅm̴̳̙̗̫͆̑̐̋͑p̸̖̱̪̈́́̐̈͂̎̾̃͋̉̚̕̕͝s̸̭̖̗̦͔͙̄̓̉"]
        },

        //Loop2

        opener2: {//the beginning of the loop
            text: "Deep in the murky woods, far from civilization now, is a house. Not a comfortable safety of our modern appliances and neighbors, but a rotting shell of the failed beginnings of a society, haunted by the pasts sins. Whether itd be from curiosity, a dare, ghost hunting... wait. havent you been here before?",
            options: [["enter2", "Yes"], ["funnyend", "NOT AGAIN"]]
        },

        enter2: {//the second time you enter
            text: "You reenter the house cold chill washes over you as if a barrier has been crossed. The door slams behind you, and you turn to see the entrance shut behind you again. She's keeping you in. Where do you go now?",
            options: [["livingroom2", "Take a Right"], ["library2", "Take a Left"]]
        },

        livingroom2: {//the second living room
            text: "The Living Room's familiar, but off. The cold light gives light to the library shelf room, like it has work. Where do you go now?",
            options: [["outside2", "Proceed"], ["livingroomsearched", "Search the room further"]]
        },

        library2: {//the second library
            text: " A small library opens up to you, the smell of moth-eaten pages greeting your nostrils like a smack to the face. The floor is decorated by rusty limestone tiles, with a scratched-out heart or flower on it. The bookshelves flank two doors, to your left and right. Where do you go now?",
            options: [["outside2", "The Right"], ["librarysearched", "Explore the Library"]]
        },

        livingroomsearched: {//the choice to search the living room further
            text: "You find a small, golden chest. It's locked, and still well kept enough to be unaffected by any force to break it.",
            options: [["chest", "Look at the chest more throughly"], ["outside2", "Leave the chest and proceed onwards"]]
        },

        outside2: {//the second outside
            text: "The muck you saw from outside was highlighted by Green and mounds of dirt. The hoot of owls and howls of feral wolves silences your breathing. A Shed greets you, and a fence boxes you in. what do you do?",
            options: [["fence2", "Go to the fence"], ["shed", "Head into the shed "]]
        },

        librarysearched: {//the searched library
            text: "The bookshelves, soaked in dust, showing some books escaping from moths. Which book shoud you choose?",
            options: [["diary1", "Ruined Book"], ["soulhurty", "Bible"]]
        },

        diary1: {//the first diary entree
            text: "Dear Diary,",
            options: ["continue1","Continue"]
        },

        diary2: {//the first diary entree
            text: "Dear Diary,",
            options: ["continue2","Continue"]
        },

        diary3: {//the first diary entree
            text: "Dear Diary,",
            options: ["continue3","Continue"]
        },

        continue1: {
            text: "Do you wish to continue?",
            options: [["diary2", "Yes"], ["bible", "Lets Read the other book instead"], ["library2", "No"]]
        },

        continue2: {
            text: "Do you wish to continue?",
            options: [["diary3", "Yes"], ["bible", "Lets Read the other book instead"], ["library2", "No"]]
        },

        continue3: {
            text: "NO PEAKING!",
            options: ["̴́̓͐̋̕ḅ̷̲̟̣͍͈̆́̔͌̐͋́̈́͐̈́̕͘͠o̵̮̤̟̺͎͑́͗̾̏͆̍́̐̚͜ư̸̲͔̦͕̈́̉͆͊͂͆͋̉̓̓͘͝ͅć̵̅̀̉ë̶̖͙̯̣̖͛̏̿̈̔̚͜͜͝ ̵̡̧̧̢̠̲̥͓̰͙̙̘̪͂̈́́̍́d̴̨̡̧̺̼͎̝̹̗̼̓͠ͅe̶̬̺̥̰̱̖̪̅̃̒͒̂̑̑̀̿ͅț̵̹̠̣̊̏̂̆̈́͗͋̆̉̇͒́ḛ̵̡̢͓͔̗̺͔͚͉̘̟͖͉́͂͂̓̋͌͋̍͠ͅm̴̳̙̗̫͆̑̐̋͑p̸̖̱̪̈́́̐̈͂̎̾̃͋̉̚̕̕͝s̸̭̖̗̦͔͙̄̓̉"
        ]
        },

        //endings

        funnyend: {//The first ending
            text: "NOOOOPE!!! You immediately make a 180 as you sprint out of the house and through the mud into your car, as you hear laughter behind you.",
        },

        possessed: {//The second ending
            text: "You feel yourself being shoved out of your body. You look to see yourself smiling, and then leaving the house, damning your soul forevermore in this tomb until another body comes.",
            options: ["opener", "Restart"]
        },

        vaultgate: {//The third ending
            text: "You grab the gate and vault yourself up their, flinging yourself body up into the muck. You stomp off, feeling as though somebody followed you along, and when you turn around you see a twirling ghostly figure at the corner of your eye.",
            options: ["opener", "Restart"]
        },

        soulhurty: {//The fourth ending
            text: "A bible now rests in your hands. You look through what appears to be a heavily edited book, with scribbles and random sentences in it. Without thought, you chant oneof the sentences aloud. A scream from the house echoes out. You go to where the sound is, only to find the front door open. You walk out of the house, satisfied with your work.",
            options: ["opener", "Restart"]
        },

        puzzle: {//The fifth ending
            text: "You say Time outloud and the box oppens and inside of the box is a watch and as you pickup the watch everything seems to stop. The house was silent but now seemingly even more so. They crickets that were chirpping stopped and the creeks of the floor boards. You soon come to the realisation that you are trapped in time and now have to face that fact that you can never escape the endless cycle.",
            options: ["opener", "Restart"]
        },
    };
    var playerChoices = ["opener"];

    var playArea = document.getElementById("playArea");
    var buttonArea = document.getElementById("btnArea");
    var startButton = document.getElementById("startButton");

    function createButton(btnText, choice) {
        var button = document.createElement("button");
        button.innerHTML = btnText;
        buttonArea.appendChild(button);

        button.addEventListener("click", function () {
            playerChoices.push(choice);
            createStory();
        });
    }

        function addStory(text) {
            playArea.innerHTML = text;
        }

        function createStory(text) {
            let pageNow = playerChoices[playerChoices.length - 1];
            playArea.innerHTML = "";
            buttonArea.innerHTML = "";
            for (let idea of playerChoices) {
                addStory(story[idea].text);
            }
            for (let idea of story[pageNow].options) {
                createButton(idea[1], idea[0]);
            }
        }
    startButton.addEventListener("click", function () {
        createStory();
    })
}