// storytelling is responsible for the story and the story events

// Cult of the Crimson Flame
// Cult of the Scarlet Flame

// Cult of the Snow Embrace / The Silent Ones
// -> splinter group is raising the Creeping Cold

// Order of the Beating Heart

class Line {
  constructor ( text ) {
    this.text = text;
  }
}
class Choice {
  constructor ( text, options ) {
    this.text = text;
    this.options = options;
  }
}

var Story = {
  "intro": [
    Line("You are a farmer living on the outskirts of a small village."),
    Line("The harvest has been poor this year, and you are fairly certain that you will not have enough food to last the winter."),
    Line("In the distance, you see a group of people cloaked in crimson robes coming down the road, a few wagons in tow."),
    Line("When they reach you, one of them speaks to you."),
    Line("\"Hello there, farmer. We are of the Cult of the Crimson Flame. Visions in the flames have shown us that the village is in danger of being consumed by the Creeping Cold.\""),
    Line("\"We ask that we may stay on your land until the winter is over. In return, we will teach you the ways of the Flame, such that you will never again be at the mercy of the cold.\""),
    Choice("[Do you accept their offer?]", [ "accept-crimson-flame", "reject-crimson-flame" ]),
  ],
    "accept-crimson-flame": [
      Line("You agree to let the Cult stay on your land."),
      Line("After the one who spoke to you gives a signal, the rest of the Cult members start unloading their belongings from their wagons."),
      Line("Within no time, they have set up a large crimson tent in one of the corners of your field."),
      Line("[You start with the Cult of the Crimson Flame.]"),
    ],
    "reject-crimson-flame": [
      Line("You tell the Cult that you will not let them stay on your land."),
      Line("The Cult members look at you with disdain, and after a few moments, they turn and leave."),
      Line("You hear them muttering something about \"ungrateful dirt farmers\" as they go."),
      Line("After a few days, you hear a knock on your door."),
      Line("You are greeted by a small group of people cloaked in white robes."),
      Line("You see some wagons on the road behind them with crates marked with a snowflake symbol."),
      Line("One of the cultists speaks to you."),
      Line("\"Hello there, farmer. We are of the Cult of the Snow Embrace. As winter approaches, we have taken it upon ourselves to check on the villages in the area.\""),
      Line("\"We have heard that the harvest has been poor this year, and we are concerned about the well-being of the villagers.\""),
      Line("\"We have brought food and supplies to help you through the winter. We only ask that you let us borrow a sewing kit.\""),
      Line("\"We have been traveling for a while, and some of our robes are in need of repair.\""),
      Choice("[Do you accept their help?]", [ "accept-snow-embrace", "reject-snow-embrace" ]),
    ],
      "accept-snow-embrace": [
        Line("You happily accept their help."),
        Line("The cultists bow to you and some of them move to the back of one of the wagons."),
        Line("Three of the cultists ask for entry and to use the sewing kit."),
        Line("You lead them upstairs and show them where the sewing kit is."),
        Line("One of the cultists takes the sewing kit and starts working on the robes of the other two."),
        Line("As you walk back downstairs, you see that the other cultists have put one of the crates in the hallway."),
        Line("They open the crate and you see dried meat, flour, blankets, candles, and other supplies."),
        Line("\"I told them that these supplies should contain a basic first aid kit and other tools, but they insisted on including candles.\""),
        Line("As you show the cultists where to put the supplies, you notice that one of the cultists is looking at you strangely."),
        Choice("[Do you ask them about it?]", [ "ask-snow-embrace-cultist-damian", "ignore-snow-embrace-cultist-damian" ]),
      ],
        "ask-snow-embrace-cultist-damian": [
          Line("You ask the cultist what is wrong."),
          Line("The cultist looks away flustered."),
          Line("\"I am sorry, I did not mean to stare. I just got this strange feeling that I have seen you before.\""),
          Line("As you rack your brain on the identity of the cultist, you realize that you have seen him before."),
          Line("It's Damian, who you used to date before he moved to the city to study astrology."),
          Line("You ask him if he is still studying astrology."),
          Line("This catches him off guard, and he looks at you with a confused expression until he realizes who you are."),
          Line("\"Oh, it's you! I am sorry, I did not recognize you.\""),
          Line("\"No, I dropped out after failing my first year. I've been traveling around for a while until I found the Cult.\""),
          Line("\"Did you know that the Cult of the Snow Embrace is single-handedly responsible for saving the lives of thousands of people every winter?\""),
          Line("\"We prepare supplies and travel to the villages in the area to help them through the winter.\""),
          Line("\"I feel like I am doing something meaningful with my life.\""),
          Line("\"I am sorry, I did not mean to ramble.\""),
          Line("\"I am glad to see that you are doing well.\""),
          Line("\"It was nice to see you again, but I should get back to work.\""),
          Line("Damian bows to you and leaves."),
          Line("You are left with a strange feeling in your stomach."),
          Choice("[Do you follow him?]", [ "follow-damian", "ignore-damian" ]),
        ],
          "follow-damian": [
            Line("As Damian is stepping out of the house, you run after him."),
            Line("You catch up to him and ask him if he would like to go for a walk."),
            Line("Damian looks at you with a confused expression."),
            Line("\"I'm sorry, I don't think I can do that.\""),
            Line("\"I don't think I deserve another chance after screwing up twice before.\""),
            Line("\"I dont'deserve someone like you.\""),
            Line("You grab him by his collar and kiss him to shut him up."),
            Line("You lead Damian back to your house."),
            Line("You see a cultist smile and roll his eyes."),
            Line("\"Hey Damian! We'll go ahead. If you don't spend the entire winter at their place, you know where to find us!"),
            Line("You see Damian nod in their direction. He's completely flustered and barely able to form a coherent sentence."),
            Line("\"I... You... Still? Ooh my!"),
            Line("You close the door behind you and pin Damian against the wall."),
            Line("The camera fades to black to preserve a PG-13 vibe."),
            Line("[You start with Damian.]"),
          ],
        "ignore-snow-embrace-cultist-damian": [
          Line("You ignore the cultist and look towards the fireplace."),
          Line("As you see the cultists putting the supplies away, one of them comes over to you."),
          Line("\"You can keep the crate for firewood. We specifically made these crates to be used as firewood.\""),
          Line("\"People always assume that we don't want anything to do with fire, but during the coldest nights, it is a necessary evil.\""),
          Line("\"We have to keep warm somehow, and you seem to be living alone.\""),
          Choice("[Do you want to ask what they mean?]", [ "ask-snow-embrace-cultist-beating-heart", "ignore-snow-embrace-cultist-beating-heart" ]),
        ],
      "reject-snow-embrace": [
        Line("You tell the Cult that you will not accept their help."),
        Line("The Cult members look worried, but they do not press the issue."),
        Line("They bow to you and turn to leave."),
        Line("As they walk away, you hear one of them mutter something about \"ungrateful dirt farmers\"."),
        Line("A few weeks pass, and every day is colder than the last."),
        Line("As you are throwing some wood in the fireplace, you hear a knock on your door."),
        Line("It is Victor, the village doctor, and he is accompanied by his wife, Mary."),
        Line("Victor tells you that the last couple of nights, more and more villagers have not woken up, succumbing to the cold."),
        Line("This morning, he and Mary packed up their belongings and left the village, afraid of what might happen to them."),
        Line("\"I know I am abandoning my post and it is a lot to ask, but I know that your farm was built to withstand the cold.\""),
        Line("\"We have brought more than enough food for the two of us, we just need a warm place to stay.\""),
        Choice("[Do you let them in?]", [ "accept-victor-and-mary", "reject-victor-and-mary" ]),
      ],
}
