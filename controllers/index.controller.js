const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
async function index(req,res) {

  res.render('index',{message:messages})  
}

async function form(req,res) {
  res.render('form');
  
}

async function createNew(req,res) {

  const {author, message} =  req.body;

  messages.push({user:author, text:message, added:new Date()})

  console.log(author, message)
 res.redirect('/')
}

module.exports = {index, createNew,form}