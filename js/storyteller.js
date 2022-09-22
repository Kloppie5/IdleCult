// storytelling is responsible for the story and the story events

// Cult of the Crimson Flame
// Cult of the Scarlet Flame

// Cult of the Snow Embrace / The Silent Ones
// -> splinter group is raising the Creeping Cold

var Story = {
  "intro": [
    "You are a farmer living on the outskirts of a small village.",
    "The harvest has been poor this year, and you are fairly certain that you will not have enough food to last the winter.",
    "In the distance, you see a group of people cloaked in crimson robes coming down the road, a few wagons in tow.",
    "When they reach you, one of them speaks to you.",
    "\"Hello there, farmer. We are of the Cult of the Crimson Flame. Visions in the flames have shown us that the village is in danger of being consumed by the Creeping Cold.\"",
    "\"We ask that we may stay on your land until the winter is over. In return, we will teach you the ways of the Flame, such that you will never again be at the mercy of the cold.\"",
    "[Do you accept their offer?]"
    // accept-crimson-flame
    // reject-crimson-flame
  ],
  "accept-crimson-flame": [
    "You agree to let the Cult stay on your land.",
    "After the one who spoke to you gives a signal, the rest of the Cult members start unloading their belongings from their wagons.",
    "Within no time, they have set up a large crimson tent in one of the corners of your field.",
    "[You start with the Cult of the Crimson Flame.]"
    // start-crimson-flame
  ],
  "reject-crimson-flame": [
    "You tell the Cult that you will not let them stay on your land.",
    "The Cult members look at you with disdain, and after a few moments, they turn and leave.",
    "You hear them muttering something about \"ungrateful dirt farmers\" as they go.",
    "After a few days, you hear a knock on your door.",
    "You are greeted by a small group of people cloaked in white robes.",
    "You see some wagons on the road behind them with crates marked with a snowflake symbol.",
    "One of the cultists speaks to you.",
    "\"Hello there, farmer. We are of the Cult of the Snow Embrace. As winter approaches, we have taken it upon ourselves to check on the villages in the area.\"",
    "\"We have heard that the harvest has been poor this year, and we are concerned about the well-being of the villagers.\"",
    "\"We have brought food and supplies to help you through the winter. We only ask that you let us borrow a sewing kit.\"",
    "\"We have been traveling for a while, and some of our robes are in need of repair.\"",
    "[Do you accept their help?]"
    // accept-snow-embrace
    // reject-snow-embrace
  ],
  "accept-snow-embrace": [
    "You happily accept their help.",
    "The cultists bow to you and some of them move to the back of one of the wagons.",
    "Three of the cultists ask for entry and to use the sewing kit.",
    "You lead them upstairs and show them where the sewing kit is.",
    "One of the cultists takes the sewing kit and starts working on the robes of the other two.",
    "As you walk back downstairs, you see that the other cultists have put one of the crates in the hallway.",
    "They open the crate and you see dried meat, flour, blankets, candles, and other supplies.",
    "\"I told them that these supplies should contain a basic first aid kit and other tools, but they insisted on including candles.\"",
    "As you show the cultists where to put the supplies, you notice that one of the cultists is looking at you strangely.",
    "[Do you ask them about it?]"
    // ask-snow-embrace-cultist
    // ignore-snow-embrace-cultist
  ],
  "reject-snow-embrace": [
    "You tell the Cult that you will not accept their help.",
    "The Cult members look worried, but they do not press the issue.",
    "They bow to you and turn to leave.",
    "As they walk away, you hear one of them mutter something about \"ungrateful dirt farmers\".",
    "A few weeks pass, and every day is colder than the last.",
    "As you are throwing some wood in the fireplace, you hear a knock on your door.",
    "It is Victor, the village doctor, and he is accompanied by his wife, Mary.",
    "Victor tells you that the last couple of nights, more and more villagers have not woken up, succumbing to the cold.",
    "This morning, he and Mary packed up their belongings and left the village, afraid of what might happen to them.",
    "\"I know I am abandoning my post and it is a lot to ask, but I know that your farm was built to withstand the cold.\"",
    "\"We have brought more than enough food for the two of us, we just need a warm place to stay.\"",
    "[Do you let them in?]"
    // accept-victor
    // reject-victor
  ],
  "ask-snow-embrace-cultist": [
    "You ask the cultist what is wrong.",
    "The cultist looks away flustered.",
    "\"I am sorry, I did not mean to stare. I just got this strange feeling that I have seen you before.\"",
    "As you rack your brain on the identity of the cultist, you realize that you have seen him before.",
    "It's Damian, who you used to date before he moved to the city to study astrology.",
    "You ask him if he is still studying astrology.",
    "This catches him off guard, and he looks at you with a confused expression until he realizes who you are.",
    "\"Oh, it's you! I am sorry, I did not recognize you.\"",
    "\"No, I dropped out after failing my first year. I've been traveling around for a while until I found the Cult.\"",
    "\"Did you know that the Cult of the Snow Embrace is single-handedly responsible for saving the lives of thousands of people every winter?\"",
    "\"We prepare supplies and travel to the villages in the area to help them through the winter.\"",
    "\"I feel like I am doing something meaningful with my life.\"",
    "\"I am sorry, I did not mean to ramble.\"",
    "\"I am glad to see that you are doing well.\"",
    "\"It was nice to see you again, but I should get back to work.\"",
    "Damian bows to you and leaves.",
    "You are left with a strange feeling in your stomach.",
    "[Do you follow him?]"
    // follow-damian
    // ignore-damian
  ],
}
