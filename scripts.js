$(document).ready(function(){
  AllIdeas.retrieve();
  AllIdeas.renderStorage();
});

$('.save-button').on('click', function(){
  var title = $('.title').val();
  var body = $('.body').val();
  AllIdeas.render(title, body);
  AllIdeas.addToArray(title, body);
  AllIdeas.store();
  AllIdeas.retrieve();

});

function Idea(title, body, id, quality) {
  this.title = title;
  this.body = body;
  this.id = id || Date.now();
  this.quality = quality || 'swill';
}

var qualties = ['swill', 'plausible', 'genius'];

Idea.prototype.qualityUp = function() {
  //when quality up button is clicked, look at position of quality in array
  //and move by one in the array

};

Idea.prototype.qualityDown = function() {
  //when quality down button is clicked, look at position in the array
  //move down by 1 if in position 1 or 2 in the array
};

var ideasArray = [];

var AllIdeas = {

  addToArray: function(title, body){
    ideasArray.push(new Idea(title, body));
    this.store();
    console.log(ideasArray);
    console.log(title);
  },

  store: function () {
    localStorage.setItem('ideasArray', JSON.stringify(ideasArray));
  },

  render: function(title, body, id) {
    $('.list-container').prepend('<div class="list-item' + " " + id + '"><li class="title-style"><input value=' + title + '><img src="icons/delete.svg" height="20" width="20"></li><li class="body-style"><input value=' + body + '></li><img src="icons/downvote.svg" height="20" width="20"><img src="icons/upvote.svg" height="20" width="20"><p class="quality">quality: </p>');
  },

  renderStorage: function() {
    debugger;
    //before we use ideasArray, check localStorage and make sure ideasArray matches
    for (var i = 0; i < ideasArray.length; i++) {
     //iterate through the ideasArray array.
        //identify the individual titles, body, id, buttons, and quality for each object
        //prepend to the page in the right order

        var title = ideasArray[i].title;
        var body = ideasArray[i].body;
        var id = ideasArray[i].id;
        var quality = ideasArray[i].quality;
        console.log(title);

        $('.list-container').prepend('<div class="list-item' + " " + id + '"><li class="title-style"><input value=' + title + '><img src="icons/delete.svg" height="20" width="20"></li><li class="body-style"><input value=' + body + '></li><img src="icons/downvote.svg" height="20" width="20"><img src="icons/upvote.svg" height="20" width="20"><p class="quality">quality: </p>');
      }
    },

  retrieve: function(title, body){
    if (localStorage.ideasArray) {
      var retrievedArray = localStorage.getItem('ideasArray');
      ideasArray = JSON.parse(retrievedArray);
    }
  },

  clearListContainer: function() {
    $('.list-item').empty();
  },

  remove: function() {},
  find: function() {}


};
