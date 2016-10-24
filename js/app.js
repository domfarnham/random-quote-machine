// Random Quote machine



// User clicks on button
// A new random quote appears


// a pool of quotes in the form of an array of objects
var quotePool = [
{
ID: 123,
title: "Frederic Goudy",
content: "A man who would letterspace lower case would steal sheep.",
link: "https://quotesondesign.com/frederic-goudy/"
},
{
ID: 944,
title: "Epictetus",
content: "No great thing is created suddenly.  ",
link: "https://quotesondesign.com/epictetus/"
},
{
ID: 18,
title: "Ivan Chermayeff",
content: "Design is directed toward human beings. To design is to solve human problems by identifying them and executing the best solution.  ",
link: "https://quotesondesign.com/ivan-chermayeff/"
},
{
ID: 2243,
title: "Paul Rand",
content: "Innovation leads one to see the new in the old and distinguishes the ingenious from the ingenuous. ",
link: "https://quotesondesign.com/paul-rand-12/"
},
{
ID: 188,
title: "Shaker Philosophy",
content: "Don't make something unless it is both necessary and useful; but if it is both necessary and useful, don't hesitate to make it beautiful.  ",
link: "https://quotesondesign.com/shaker-philosophy/",
custom_meta: {
Source: "<a href='http://bokardo.com/archives/the-shaker-design-philosophy/''>website</a>"
}
},
{
ID: 1330,
title: "Andy Rutledge",
content: "The way to &#8220;get your name out there&#8221; is to establish a pattern of excellent work and a reputation for integrity over several years.  ",
link: "https://quotesondesign.com/andy-rutledge-2/",
custom_meta: {
Source: "<a href='http://www.smashingmagazine.com/2010/03/08/common-questions-about-design-professionalism/''>article</a>"
}
},
{
ID: 988,
title: "Ellen Lupton",
content: "Urban public space is a stage for viewing the field of graphic design in its diversity. A mix of voices, from advertising to activism, compete for visibility.  ",
link: "https://quotesondesign.com/ellen-lupton-3/"
},
{
ID: 732,
title: "Saul Bass",
content: "Design is thinking made visual.  ",
link: "https://quotesondesign.com/saul-bass/",
custom_meta: {
Source: "<a href='http://en.wikipedia.org/wiki/Saul_Bass'>Wikipedia</a>"
}
},
{
ID: 748,
title: "Gunnar Swanson",
content: "Graphic designers find themselves in a role of visual dishwashers for the Information Architects' chefs.  ",
link: "https://quotesondesign.com/gunnar-swanson/"
},
{
ID: 2430,
title: "Gemma O'Brien",
content: "The great thing about personal work is that it can shape your commercial work. Clients see what you create for yourself and that can be the starting point for a new project, which closes the cap between the work you love making and the work you get paid for. ",
link: "https://quotesondesign.com/gemma-obrien/"
},
{
ID: 106,
title: "Henry David Thoreau",
content: "It's not what you look at that matters, it's what you see.  ",
link: "https://quotesondesign.com/henry-david-thoreau/"
},
{
ID: 2109,
title: "Quentin Tarantino",
content: "I want to risk hitting my head on the ceiling of my talent. I want to really test it out and say: O.K., you're not that good. You just reached the level here. I don't ever want to fail, but I want to risk failure every time out of the gate. ",
link: "https://quotesondesign.com/quentin-tarantino/",
custom_meta: {
Source: "<a href='http://www.nytimes.com/2012/12/23/movies/how-quentin-tarantino-concocted-a-genre-of-his-own.html?pagewanted=5&_r=3&''>interview</a>"
}
},
{
ID: 1769,
title: "Khoi Vinh",
content: "Unsolicited redesigns are terrific and fun and useful, and I hope designers never stop doing them. But as they do so, I also hope they remember it helps no one - least of all the author of the redesign - to assume the worst about the original source and the people who work hard to maintain and improve it, even though those efforts may seem imperfect from the outside. ",
link: "https://quotesondesign.com/khoi-vinh-2/",
custom_meta: {
Source: "<a href='http://www.subtraction.com/2011/07/28/unsolicited-redesigns'>article</a>"
}
},
{
ID: 2209,
title: "Dmitry Fadeyev",
content: "If we have trouble using something then it's probably because that thing is badly designed, rather than us being stupid. ",
link: "https://quotesondesign.com/dmitry-fadeyev-2/",
custom_meta: {
Source: "<a href='http://www.usabilitypost.com/2010/11/17/the-design-of-everyday-things/'>article</a>"
}
},
{
ID: 282,
title: "Frank Zappa",
content: "Art is making something out of nothing and selling it.  ",
link: "https://quotesondesign.com/frank-zappa/",
custom_meta: {
Source: "<a href='http://www.amazon.com/gp/product/159253127X?ie=UTF8&tag=css-tricks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=159253127X'>book</a>"
}
},
{
ID: 1136,
title: "Paul Attwood",
content: "Decisions on artwork by committee end up being made on the premise of not turning people off rather than turning people on.  ",
link: "https://quotesondesign.com/paul-attwood/"
},
{
ID: 1378,
title: "Oren Sherman",
content: "Artists are natural marketers for everyone but themselves.  ",
link: "https://quotesondesign.com/oren-sherman/"
},
{
ID: 780,
title: "Milton Glaser",
content: "I have always railed against ideological purity, or any other kind. Corruption is more interesting than purity.  ",
link: "https://quotesondesign.com/milton-glaser-4/"
},
{
ID: 1306,
title: "Frank Chimero",
content: "Done is beautiful.  ",
link: "https://quotesondesign.com/frank-chimero-4/",
custom_meta: {
Source: "<a href='http://ethos.frankchimero.com/'>ethos</a>"
}
},
{
ID: 1823,
title: "Rasha Hamdan",
content: "Practicality is the serial killer of dreams. ",
link: "https://quotesondesign.com/rasha-hamdan/"
},
{
ID: 942,
title: "Thomas Edison",
content: "Genius is 1% inspiration and 99% perspiration.  ",
link: "https://quotesondesign.com/thomas-edison/"
},
{
ID: 1964,
title: "Arman Nobari",
content: "Design is more of a kitchen than a knife, and more of a lab than a beaker. ",
link: "https://quotesondesign.com/arman-nobari/"
},
{
ID: 2409,
title: "Hillman Curtis",
content: "The goal of a designer is to listen, observe, understand, sympathize, empathize, synthesize, and glean insights that enable him or her to make the invisible visible. ",
link: "https://quotesondesign.com/hillman-curtis/"
},
{
ID: 401,
title: "Carin Goldberg",
content: "&#8220;Fun&#8221; is a tricky word. People think that if you're having &#8220;fun&#8221;, you're ignoring content, or you're ignoring the importance of the piece. But that's not true.  ",
link: "https://quotesondesign.com/carin-goldberg-2/"
},
{
ID: 598,
title: "Andy Rutledge",
content: "Beautiful accidents can happen, but accident is not the basis for design excellence. Purposeful discovery followed by focused, skillful conceptualization and execution is the basis for design excellence.  ",
link: "https://quotesondesign.com/andy-rutledge/",
custom_meta: {
Source: "<a href='http://www.andyrutledge.com/dog-and-pony-show-design.php'>article</a>"
}
},
{
ID: 286,
title: "Robynne Raye",
content: "For me, design is like choosing what I'm going to wear for the day - only much more complicated and not really the same at all.  ",
link: "https://quotesondesign.com/robynne-raye/",
custom_meta: {
Source: "<a href='http://www.amazon.com/gp/product/159253127X?ie=UTF8&tag=css-tricks-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=159253127X'>book</a>"
}
},
{
ID: 1886,
title: "Alex King",
content: "Experience has shown that our best customers are ones who have as much respect for our time as we have for theirs. ",
link: "https://quotesondesign.com/alex-king/",
custom_meta: {
Source: "<a href='http://alexking.org/blog/2012/01/16/im-trying-to-be-respectful-but-this-makes-me-crazy'>comment</a>"
}
},
{
ID: 1049,
title: "Paul Graham",
content: "The easy, conversational tone of good writing comes only on the eighth rewrite.  ",
link: "https://quotesondesign.com/paul-graham/"
},
{
ID: 2207,
title: "Robert Nealan",
content: "Man up, admit it isn't good enough, and fix it now. ",
link: "https://quotesondesign.com/robert-nealan/",
custom_meta: {
Source: "<a href='http://robertnealan.com/m-v-p-not-m-v-p-o-s/'>article</a>"
}
},
{
ID: 1296,
title: "Jeffrey Brown",
content: "Do right.  ",
link: "https://quotesondesign.com/jeffrey-brown/"
},
{
ID: 1141,
title: "Ira Glass",
content: "Great stories happen to people who can tell them.  ",
link: "https://quotesondesign.com/ira-glass/"
},
{
ID: 723,
title: "Paul Howalt",
content: "A lot of people in this business develop huge egos. Why? None of us is curing cancer. None of us is saving babies from burning buildings. We're just a bunch of overpaid knuckleheads who think up nutty stuff for some other knuckleheads' products.  ",
link: "https://quotesondesign.com/paul-howalt/"
},
{
ID: 20,
title: "Jeffrey Veen",
content: "Designers can create normalcy out of chaos; they can clearly communicate ideas through the organising and manipulating of words and pictures.  ",
link: "https://quotesondesign.com/jeffrey-veen-3/"
},
{
ID: 1129,
title: "Dale Harris",
content: "Good ideas never go out of style.  ",
link: "https://quotesondesign.com/dale-harris/"
},
{
ID: 1340,
title: "Dave McClure",
content: "Features are like having sex. You make one mistake and you have to support it for life.  ",
link: "https://quotesondesign.com/dave-mcclure/",
custom_meta: {
Source: "<a href='http://twitter.com/davemcclure/status/10543892062'>twitter</a>"
}
},
{
ID: 1872,
title: "Timothy Samara",
content: "Use two typeface families maximum. OK, maybe three. ",
link: "https://quotesondesign.com/timothy-samara/"
},
{
ID: 1816,
title: "Jordan Manigo",
content: "As a designer, I find it difficult <strong>not</strong> to judge a book by its cover. ",
link: "https://quotesondesign.com/jordan-manigo/"
},
{
ID: 656,
title: "Henry Ford",
content: "Whether you think you can or whether you think you can't - you are right.  ",
link: "https://quotesondesign.com/henry-ford-2/"
},
{
ID: 1151,
title: "Albert Einstein",
content: "We can't solve problems by using the same kind of thinking we used when we created them.  ",
link: "https://quotesondesign.com/albert-einstein-4/"
},
{
ID: 2087,
title: "Daniel Burka",
content: "The next time you're caught in a room full of smart people doing something dumb (like trying to anticipate what your users will do), tune them out, flip open your laptop, and start prototyping. ",
link: "https://quotesondesign.com/daniel-burka/",
custom_meta: {
Source: "<a href='http://the-pastry-box-project.net/daniel-burka/2013-january-20/'>thought</a>"
}
},
{
ID: 2205,
title: "Mark King",
content: "Design is the body language of your marketing. Don't slouch. ",
link: "https://quotesondesign.com/mark-king/",
custom_meta: {
Source: "<a href='http://www.markkingcreative.com/'>slogan</a>"
}
},
{
ID: 1711,
title: "Oliver Reichenstein",
content: "A beef filet cooked for 15 hours by 30 cooks doesn't necessarily taste better than a cheeseburger. ",
link: "https://quotesondesign.com/oliver-reichenstein/",
custom_meta: {
Source: "<a href='http://www.informationarchitects.jp/en/ia-writer-on-prices-and-features/'>article</a>"
}
},
{
ID: 1543,
title: "Cennydd Bowles",
content: "We explore promising avenues that, days later, become dead ends. Sometimes, we solve a month's problem in an hour. ",
link: "https://quotesondesign.com/cennydd-bowles/",
custom_meta: {
Source: "<a href='http://52weeksofux.com/post/1306973984/designers-lie-thats-ok'>article</a>"
}
},
{
ID: 2149,
title: "Aaron Schwartz",
content: "Be curious. Read widely. Try new things. I think a lot of what people call intelligence boils down to curiosity.  ",
link: "https://quotesondesign.com/aaron-schwartz/"
}
]

$(document).ready(function() {
	// Event listener
  $("#getQuote").on("click", function() {
		var html = "";
		html += "<div class>";
		html += "<p class = 'lead'>";
		i = Math.floor(Math.random() * 44) + 0;
		html += quotePool[i].content;
		html += "</p><p>";
		html += quotePool[i].title;
		html += "</p></div><br>";
		$("#quoteContainer").html(html);
		document.getElementById("tweet").href = "https://twitter.com/intent/tweet?hashtags=FamousQuotes&related=freecodecamp&text=" + quotePool[i].content + quotePool[i].title;
  });
});