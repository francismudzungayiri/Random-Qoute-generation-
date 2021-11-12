var quotes=[
    "We grow fearless when we do the things we fear. -Robin Sharma.",
    "And, when you want something, all the universe conspires in helping you to achieve it.- Paulo Coelho, The Alchemist.",
    "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us.- Helen Keller.",
    "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.- Vincent Van Gogh.",
    "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.- Paulo Coelho.",
    "You can't be great if you don't feel great. Make exceptional health your number one priority.- Robin Sharma.",
    "Impossible is just an opinion.- Paulo Coelho.",
    "The secret of getting ahead is getting started.- Mark Twain",
    "Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering.- Paulo Coelho, 'By The River Piedra I Sat Down And Wept'",
    "All our dreams can come true if we have the courage to pursue them.- Walt Disney.",
    "I always wanted to be somebody, but now I realize I should have been more specific.- Lily Tomlin.",
    "If you let your head get too big, it'll break your neck.- Elvis Presley.",
    "I am an early bird and a night owl… so I am wise and I have worms - Michael Scott.",
    "Age is of no importance unless you're a cheese.- Billie Burke.",
    "If you think you are too small to make a difference, try sleeping with a mosquito.- Dalai Lama.",
    "Honest criticism is hard to take, particularly from a relative, a friend, an acquaintance, or a stranger.- Franklin P.Jones.",
    "When life gives you lemons, squirt someone in the eye.- Cathy Guisewite.",
    "Even a stopped clock is right twice every day. After some years, it can boast of a long series of successes.- Marie Von Ebner, 'Eschenbach'.",
    "Live each day like it's your second to the last. That way you can fall asleep at night.- Jason Love.",
    "I am so clever that sometimes I don't understand a single word of what I am saying.- Oscar Wilde.",
    "Whatever you are, be a good one.- Abraham Lincoln.",
    "The big secret in life is that there is no secret. Whatever your goal, you can get there if you're willing to work.- Oprah Winfrey.",
    "The miracle is not that we do this work, but that we are happy to do it.- Mother Teresa.",
    "When I had nothing to lose, I had everything. When I stopped being who I am, I found myself.- Paulo Coelho, 'Eleven Minutes'.",
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.- Steve Jobs.",
    "Everyone has inside them a piece of good news. The good news is you don't know how great you can be!... And what your potential is. - Anne Frank.",
    "The best way to appreciate your job is to imagine yourself without one.- Oscar Wilde.",
    "In the middle of every difficulty lies opportunity.- Albert Einstein.",
    "Never allow a person to tell you no who doesn't have the power to say yes.- Eleanor Roosevelt.",
    "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.- Neil Gaiman.",
    "Because when I look at you, I can feel it. And I look at you and I'm home.- Dory, 'Finding Nemo'.",
    "What defines us is how well we rise after falling.- Lionel, 'Maid In Manhattan'.",
    "If you believe in yourself, with a tiny pinch of magic, all your dreams can come true!- Spongebob, 'Spongebob Squarepants'.",
    "The fool doth think he is wise, but the wise man knows himself to be a fool.- William Shakespeare, 'As You Like It', act one, scene one.",
    "Weaseling out of things is important to learn; it's what separates us from the animals… except the weasel.-Homer Simpson, 'The Simpsons'.",
    "Who, being loved, is poor?–Oscar Wilde, 'A Woman Of No Importance'.",
    "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.- H.Jackson Brown Jr., 'P.S. I Love You'.",
    "Do, or do not. There is no try.–Yoda, 'Star Wars: The Empire Strikes Back'.",
    "There is some good in this world, and it's worth fighting for.- J.R.R.Tolkien, 'The Two Towers'.",
    "No matter how your heart is grieving, if you keep on believing, the dream that you wish will come true.- Cinderella, 'Cinderella'."
]

document.querySelector("button").addEventListener("click",changeQuote);

function changeQuote(){
    var randomNum =  Math.floor(Math.random()*quotes.length);
    console.log('function call successful');
    var randomQuote = quotes[randomNum];

    console.log(randomQuote);
    // taking the name of the author
    var index = randomQuote.indexOf('-');
    var name = randomQuote.slice(index);
    console.log(index, name);
    
    // extracting extcly the quote only without the other
    var pure_quote = randomQuote.slice(0,index);

    document.querySelector('.name').textContent = name;
    document.querySelector('.quote').textContent = pure_quote; // changing the quote every time the button is clicked


}
