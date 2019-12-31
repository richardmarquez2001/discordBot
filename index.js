const Discord = require('discord.js');

const token = 'NjU2OTkzMjE3NzUzMTIwNzg5.XgrmUg.RHWg06f_ZZJdZopw0nId9Gsk7mU';

const PREFIX = '!';

require('dotenv/config');

// const http = ('http');

const port = process.env.PORT || 3000;

// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
//
//   console.log("I am working");
// }).listen(port);

//const token = process.env.token;

const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('this bot is online');
});
bot.on('message', msg =>{


  let args = msg.content.substring(PREFIX.length).split(" ");

  if (msg.content.toLowerCase().includes('kyle') && (msg.author.username === 'yk') && flag){
     msg.channel.send('ETHAN YOU MISS ME');
 } else{
  if (args[0].toLowerCase() === 'talk'){
  switch(args[1].toLowerCase()){
    case 'about':
    msg.channel.send('I was created by Ric. Ric thanks Jonathan for the help, too.');
    case 'help':
    msg.channel.send('Welcome! To use, type in !talk kyle, !talk ethan, !talk maryam, or !talk dylan for a custom message');
    break;
    case 'kyle':
    msg.channel.send('Kyle says: who said my name? ' + getPhrases('kyle'));
    break;
    case 'ethan':
    msg.channel.send('Ethan says: who said my name? ' + getPhrases('ethan'));
    break;
    case 'maryam':
    msg.channel.send('Maryam says: ' + getPhrases('maryam'));
    break;
    case 'dylan':
    msg.channel.send('Dylan says: ' + getPhrases('dylan'));
    break;
    default:
    msg.channel.send('Invalid command entered. Type !talk help for help.');
    break;
  }
}
}
});

function getPhrases(name){

  _name = name.toLowerCase();

  maryamPhrases = ['its halal :)',
  'its haram ;)'];

  kylePhrases = ['you miss me!',
      'we win these!',
      'you\'re actually retarded',
      'dap me up, dap me up!',
      '*moans agressively*',
      '*loses overwatch tournament*',
      'keep ya head up king',
      'chic fil a tommorow?',
      'wheres ethan? hes a degenerate',
      'tell vanessa to streak me !!',
      'dead by daylight? dead by daylight?',
      'PLEASEEE, PLEASEE BRO',
      'you\'re drawinnnnn',
      'yooo what are you guys playing? oh cs? oh minecraft? *leaves call*'
    ];

  ethanPhrases = [
    'sushi buffet later?',
    'who would\'ve thought',
    'Oh my goshh',
  ]

  dylanPhrases = [
    'okay asshole',
    'hey kami',
    'what\'d you get on *insert exam/assignment here*',
    'are you dense?',
    '*insert slightly racist comment here*'
]


  if (_name === 'ethan'){
    return ethanPhrases[(Math.floor(Math.random() * ethanPhrases.length))];
  }else if (_name === 'kyle'){
    return kylePhrases[(Math.floor(Math.random() * kylePhrases.length))];
  }else if (_name === 'maryam'){
    return maryamPhrases[(Math.floor(Math.random() * maryamPhrases.length))];
  }else if (_name === 'dylan'){
    return dylanPhrases[(Math.floor(Math.random() * dylanPhrases.length))];
  }
}

bot.on('error', err =>{
  console.log(err);
});

bot.login(token);
