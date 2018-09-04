const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs.slice();
};

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur)

};


Park.prototype.removeDinosaur = function (dinosaur){
  this.dinosaurs = this.dinosaurs.filter(function(d){
    return d !== dinosaur
  });

};


Park.prototype.getBySpecies = function (species){
  return this.dinosaurs = this.dinosaurs.filter(function(dinosaur){
    return dinosaur.species.toLowerCase() === species.toLowerCase();
  });
};

Park.prototype.removeBySpecies = function (species){
  this.dinosaurs = this.dinosaurs.filter(function(dinosaur){
    return dinosaur.species.toLowerCase() !== species.toLowerCase();
  });
};


Park.prototype.getHighestAttraction = function (){
  return this.dinosaurs.reduce(function (prevD, currentD){
    return prevD.guestsAttractedPerDay > currentD.guestsAttractedPerDay
    ? prevD : currentD;
  });
};
