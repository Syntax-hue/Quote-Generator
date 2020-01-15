const button = document.getElementById('myBtn');
const bodyBackg = document.getElementsByTagName('BODY')[0];
const quote = document.getElementById('blockquote');
const author = document.getElementById('author');
const colors = ['#001f3f', '#0074D9', '#7FDBFF', '#39CCCC','#3D9970', '#3D9970','#FFDC00', '#2ECC40'];
const  quotes = [
{
    name: `― Albert Einstein`,
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`
},
{
    name: '― Oscar Wilde',
    quote: `“Be yourself; everyone else is already taken.”`
},
{
    name: '― Marcus Tullius Cicero',
    quote: `“A room without books is like a body without a soul.”`
},
{
    name: '― Mahatma Gandhi',
    quote: `“Be the change that you wish to see in the world.”`
},
{
    name: '― Robert Frost',
    quote: `“In three words I can sum up everything I've learned about life: it goes on.”`
},
{
    name: '― Martin Luther King Jr.',
    quote: `“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”`
},
{
    name: '― Ralph Waldo Emerson',
    quote: `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`
},
{
    name: '― Marilyn Monroe',
    quote: `“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”`
},
{
    name: '― Mark Twain',
    quote: `“Never put off till tomorrow what may be done day after tomorrow just as well.”`
},

];


button.addEventListener('click', function() {
    let i = Math.floor(Math.random() * colors.length);
    bodyBackg.animate([{opacity:0.3}, {opacity:1.0}],{duration:900,fill:"forwards"} )
    bodyBackg.style.backgroundColor = colors[i] ;
    blockquote.innerHTML = quotes[i].quote;
    author.innerHTML = quotes[i].name;
});