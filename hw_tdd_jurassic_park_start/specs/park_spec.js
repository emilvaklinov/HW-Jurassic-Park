const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaurRex;
  let dinosaursSteg;
  let dinosaurVel;
  let park;

  beforeEach(function () {
    dinosaurRex = new Dinosaur('t-rex', 'carnivore', 50),
    dinosaurSteg = new Dinosaur('Stegozaurus', 'herbivore', 20)
    dinosaurVel = new Dinosaur("Velosiraptor", "omnivore", 65);
    park = new Park("Jurrasicpark", 45);

  });

  it('should have a name', function(){
    const actual = park.name;
    const expected = "Jurrasicpark";
    assert.strictEqual(actual, expected);
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 45);
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.dinosaurs, dinosaurs);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur);
    dinosaurs.push(dinosaur);
    assert.deepStrictEqual(park.dinosaurs, dinosaurs);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur);
    park.removeDinosaur(dinosaur);
    assert.deepStrictEqual(park.dinosaurs, dinosaurs);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur);
    assert.deepStrictEqual(park.getHighestAttraction(), dinosaur);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur);
    const dinosaur2 = new Dinosaur("Velosiraptor", "omnivore", 65);
    park.addDinosaur(dinosaur2);
    assert.deepStrictEqual(park.getBySpecies("Velosiraptor"), [dinosaur, dinosaur2]);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur);
    const dinosaur2 = new Dinosaur("Velosiraptor", "omnivore", 65);
    park.addDinosaur(dinosaur);
    park.removeBySpecies(dinosaur);
    assert.deepStrictEqual(park.dinosaurs, dinosaurs);
  });

});
