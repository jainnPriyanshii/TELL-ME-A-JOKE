const Onclick = document.querySelector(".box")
const jokes = [
    "What rock group has four men that don't sing? Mount Rushmore.",
    "When I was a kid, my mother told me I could be anyone I wanted to be. Turns out, identity theft is a crime.",
    "What do sprinters eat before a race? Nothing, they fast!",
    "What concert costs just 45 cents? 50 Cent featuring Nickelback!",
    "What do you call a mac 'n' cheese that gets all up in your face? Too close for comfort food!",
    "Why couldn't the bicycle stand up by itself? It was two tired!",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere!",
    "How many apples grow on a tree? All of them!",
    "Did you hear the rumor about butter? Well, I'm not going to spread it!",
    "I like telling Dad jokes. Sometimes he laughs!",
    "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",
    "What goes up, lets out a load, and then goes back down?",
    "I bought some shoes off of a drug dealer.I don’t know what he laced them with but I’ve been trippin’ all day",
    "Why did the dinosaur cross the road?Because the chicken joke wasn’t invented yet.She was only a whiskey-maker, but he loved her still.",
    " Cashier in the grocery: “Would you like the milk in a bag”? Man: “No, just leave it in the carton",
    "Jokes about menstruation just aren’t funny.Period.",
    "If you’re struggling to think of what to get someone for Christmas.Get them a fridge and watch their face light up when they open it.",
    "A man goes to the doctor for his annual check-up, and the doctor tells him, “You need to stop masturbating.”The man asks, “Why?The doctor replies, “Because I’m trying to examine you”",
    "How do you make holy water?You boil the hell out of it.",
    "Why do crabs never give to charity?Because they’re shellfish.",
    "What do you call the security guards outside of Samsung.The guardians of the galaxy!",
    " You hear the one about the three holes in the ground filled with water?No?Well, well, well.",
    " cut my finger chopping cheese, but I think that I may have grater problems.",
    "Who can shave 25 times a day and still have a beard?A barber.",
    "What do sprinters eat before a race?Nothing, they fast.",
    "How do you tell the difference between a frog and a horny toad?A frog says, ‘Ribbit, ribbit’ and a horny toad says, ‘Rub it, rub it.",
    " I gave all my dead batteries away today.Free of charge.",
   "A mexican magician tells the audience he will disappear on the count of 3.He says, “Uno, dos…” and then *poof*. He disappeared without a tres!",
   "What do you call a Mexican man leaving the hospital? Manuel",
 "Did you hear about the Italian Chef that died?He pasta way.",
 "A termite walks into a bar and asks “Is the bar tender here?”",
 "What did the Mexican firefighter name his two sons?José and Hose B."
]

function generate(){
    let randomNumber =Math.floor(Math.random()*(jokes.length));
    document.getElementById('displayjoke').innerHTML=jokes[randomNumber];
}

Onclick.addEventListener("click", generate);