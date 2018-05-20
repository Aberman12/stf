/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {

    if(detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if(detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var expect = chai.expect;


  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
  expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  it("should equal \'MasterCard\'", function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it("should equal \'MasterCard\'", function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it("should equal \'MasterCard\'", function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal("MasterCard");
  });

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal("MasterCard");
  })
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
var expect = chai.expect;
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011123456789098')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011123456789098765')).to.equal('Discover');
  });

  it('has a prefix of 644-649 and a length of 16',function() {

    expect(detectNetwork('6441234567890987')).to.equal('Discover');

  expect(detectNetwork('6451234567890987')).to.equal('Discover');

expect(detectNetwork('6461234567890987')).to.equal('Discover');

expect(detectNetwork('6471234567890987')).to.equal('Discover');

expect(detectNetwork('6481234567890987')).to.equal('Discover');

expect(detectNetwork('6491234567890987')).to.equal('Discover');
  });
  it('has a prefix of 644-649 and a length of 19', function() {
    expect(detectNetwork('6011123456789098765')).to.equal('Discover');
  });

  it('has a prefix of 644-649 and a length of 19',function() {

    expect(detectNetwork('6441234567890987123')).to.equal('Discover');

  expect(detectNetwork('6451234567890987123')).to.equal('Discover');

expect(detectNetwork('6461234567890987123')).to.equal('Discover');

expect(detectNetwork('6471234567890987123')).to.equal('Discover');

expect(detectNetwork('6481234567890987123')).to.equal('Discover');

expect(detectNetwork('6491234567890987123')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6512345678909876')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6512345678909876123')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  var expect = chai.expect;

  it('has a prefix of 5018 and a length of 12', function(){
    expect(detectNetwork('501812234567')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function(){
    expect(detectNetwork('5018122345674')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 14', function(){
    expect(detectNetwork('50181223445674')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function(){
    expect(detectNetwork('501861225345674')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 16', function(){
    expect(detectNetwork('5018126662345674')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function(){
    expect(detectNetwork('50181224444345674')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 18', function(){
    expect(detectNetwork('501812266666634574')).to.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function(){
    expect(detectNetwork('5018122777777745674')).to.equal('Maestro');
  });


  it('has a prefix of 5020 and a length of 12', function(){
    expect(detectNetwork('502012234567')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 13', function(){
    expect(detectNetwork('5020122345674')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 14', function(){
    expect(detectNetwork('50201223445674')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 15', function(){
    expect(detectNetwork('502061225345674')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 16', function(){
    expect(detectNetwork('5020126662345674')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 17', function(){
    expect(detectNetwork('50201224444445674')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 18', function(){
    expect(detectNetwork('502012266666634574')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 19', function(){
    expect(detectNetwork('5020122777777345674')).to.equal('Maestro');
  });


  it('has a prefix of 5038 and a length of 12', function(){
    expect(detectNetwork('503812234567')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 13', function(){
    expect(detectNetwork('5038122345674')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 14', function(){
    expect(detectNetwork('50381223445674')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 15', function(){
    expect(detectNetwork('503861225345674')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 16', function(){
    expect(detectNetwork('5038126662345674')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 17', function(){
    expect(detectNetwork('50381224444445674')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 18', function(){
    expect(detectNetwork('503812266666634574')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 19', function(){
    expect(detectNetwork('5038122777777345674')).to.equal('Maestro');
  });


  it('has a prefix of 6304 and a length of 12', function(){
    expect(detectNetwork('630412234567')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 13', function(){
    expect(detectNetwork('6304122345674')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 14', function(){
    expect(detectNetwork('63041223445674')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 15', function(){
    expect(detectNetwork('630461225345674')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 16', function(){
    expect(detectNetwork('6304126662345674')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 17', function(){
    expect(detectNetwork('63041224444435674')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 18', function(){
    expect(detectNetwork('630412266666634574')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 19', function(){
    expect(detectNetwork('6304122777777345674')).to.equal('Maestro');
  });
});

describe('should support China UnionPay', function(){
  var expect = chai.expect;
  // it('has prefix 622126-622925 and length of 16', function(){
  //   expect(detectNetwork('6221261234567890')).to.equal('China UnionPay');
  //   expect(detectNetwork('6224381234567890')).to.equal('China UnionPay');
  //   expect(detectNetwork('6229251234567890')).to.equal('China UnionPay');
  // });

  // it('has prefix 622126-622925 and length of 17', function(){
  //   expect(detectNetwork('62212612345667890')).to.equal('China UnionPay');
  //   expect(detectNetwork('62243812345667890')).to.equal('China UnionPay');
  //   expect(detectNetwork('62292512345667890')).to.equal('China UnionPay');
  // });

  // it('has prefix 622126-622925 and length of 18', function(){
  //   expect(detectNetwork('622126123454467890')).to.equal('China UnionPay');
  //   expect(detectNetwork('622438123444567890')).to.equal('China UnionPay');
  //   expect(detectNetwork('622925123454467890')).to.equal('China UnionPay');
  // });

  for(var i = 622126; i<=622925;i++){
    (function(i){
      it('has prefix ' + i + ' and length of 16', function(){
        expect(detectNetwork(i + '1234567890')).to.equal('China UnionPay');
      })
    })(i);
  }

  for(var i = 622126; i<=622925;i++){
    (function(i){
      it('has prefix ' + i + ' and length of 17', function(){
        expect(detectNetwork(i + '12345690987')).to.equal('China UnionPay');
      })
    })(i);
  }

  for(var i = 622126; i<=622925;i++){
    (function(i){
      it('has prefix ' + i + ' and length of 18', function(){
        expect(detectNetwork(i + '123456780987')).to.equal('China UnionPay');
      })
    })(i);
  }

for(var i = 622126; i<=622925;i++){
  (function(i){
    it('has prefix ' + i + ' and length of 19', function(){
      expect(detectNetwork(i + '1234567890987')).to.equal('China UnionPay');
    })
  })(i);
}
  // it('has prefix 622126-622925 and length of 19', function(){
  //   expect(detectNetwork('6221261234565557890')).to.equal('China UnionPay');
  //   expect(detectNetwork('6224381234555567890')).to.equal('China UnionPay');
  //   expect(detectNetwork('6229251234555567890')).to.equal('China UnionPay');
  // });

  it('has prefix 624-626 and length of 16', function(){
    expect(detectNetwork('6241234567890987')).to.equal('China UnionPay');
    expect(detectNetwork('6251234123456789')).to.equal('China UnionPay');
    expect(detectNetwork('6261234123456789')).to.equal('China UnionPay');
  });

  it('has prefix 624-626 and length of 17', function(){
    expect(detectNetwork('62412345678977987')).to.equal('China UnionPay');
    expect(detectNetwork('62512341234577789')).to.equal('China UnionPay');
    expect(detectNetwork('62612341234567789')).to.equal('China UnionPay');
  });

  it('has prefix 624-626 and length of 18', function(){
    expect(detectNetwork('624123456786659098')).to.equal('China UnionPay');
    expect(detectNetwork('625123412354665678')).to.equal('China UnionPay');
    expect(detectNetwork('626123412354566678')).to.equal('China UnionPay');
  });

  it('has prefix 624-626 and length of 19', function(){
    expect(detectNetwork('6241234567856669097')).to.equal('China UnionPay');
    expect(detectNetwork('6251234123546665689')).to.equal('China UnionPay');
    expect(detectNetwork('6261234123545666789')).to.equal('China UnionPay');
  });

it('has prefix 6282 and length 16', function(){
  expect(detectNetwork('6282123456789098')).to.equal('China UnionPay');
});
it('has prefix 6282 and length 17', function(){
  expect(detectNetwork('62821234564789098')).to.equal('China UnionPay');
});
it('has prefix 6282 and length 18', function(){
  expect(detectNetwork('628212345676689098')).to.equal('China UnionPay');
});
it('has prefix 6282 and length 19', function(){
  expect(detectNetwork('6282123456478900098')).to.equal('China UnionPay');
});

it('has prefix 6283 and length 16', function(){
  expect(detectNetwork('6283123456789098')).to.equal('China UnionPay');
});
it('has prefix 6283 and length 17', function(){
  expect(detectNetwork('62831234564789098')).to.equal('China UnionPay');
});
it('has prefix 6283 and length 18', function(){
  expect(detectNetwork('628312345676689098')).to.equal('China UnionPay');
});
it('has prefix 6283 and length 19', function(){
  expect(detectNetwork('6283123456478900098')).to.equal('China UnionPay');
});

it('has prefix 6284 and length 16', function(){
  expect(detectNetwork('6284123456789098')).to.equal('China UnionPay');
});
it('has prefix 6284 and length 17', function(){
  expect(detectNetwork('62841234564789098')).to.equal('China UnionPay');
});
it('has prefix 6284 and length 18', function(){
  expect(detectNetwork('628412345676689098')).to.equal('China UnionPay');
});
it('has prefix 6284 and length 19', function(){
  expect(detectNetwork('6284123456478900098')).to.equal('China UnionPay');
});

it('has prefix 6285 and length 16', function(){
  expect(detectNetwork('6285123456789098')).to.equal('China UnionPay');
});
it('has prefix 6285 and length 17', function(){
  expect(detectNetwork('62851234564789098')).to.equal('China UnionPay');
});
it('has prefix 6285 and length 18', function(){
  expect(detectNetwork('628512345676689098')).to.equal('China UnionPay');
});
it('has prefix 6285 and length 19', function(){
  expect(detectNetwork('6285123456478900098')).to.equal('China UnionPay');
});

it('has prefix 6286 and length 16', function(){
  expect(detectNetwork('6286123456789098')).to.equal('China UnionPay');
});
it('has prefix 6286 and length 17', function(){
  expect(detectNetwork('62861234564789098')).to.equal('China UnionPay');
});
it('has prefix 6286 and length 18', function(){
  expect(detectNetwork('628612345676689098')).to.equal('China UnionPay');
});
it('has prefix 6286 and length 19', function(){
  expect(detectNetwork('6286123456478900098')).to.equal('China UnionPay');
});

it('has prefix 6287 and length 16', function(){
  expect(detectNetwork('6287123456789098')).to.equal('China UnionPay');
});
it('has prefix 6287 and length 17', function(){
  expect(detectNetwork('62871234564789098')).to.equal('China UnionPay');
});
it('has prefix 6287 and length 18', function(){
  expect(detectNetwork('628712345676689098')).to.equal('China UnionPay');
});
it('has prefix 6287 and length 19', function(){
  expect(detectNetwork('6287123456478900098')).to.equal('China UnionPay');
});

it('has prefix 6288 and length 16', function(){
  expect(detectNetwork('6288123456789098')).to.equal('China UnionPay');
});
it('has prefix 6288 and length 17', function(){
  expect(detectNetwork('62881234564789098')).to.equal('China UnionPay');
});
it('has prefix 6288 and length 18', function(){
  expect(detectNetwork('628812345676689098')).to.equal('China UnionPay');
});
it('has prefix 6288 and length 19', function(){
  expect(detectNetwork('6288123456478900098')).to.equal('China UnionPay');
});


// it('has prefix 6282-6288 and length 16', function(){
//   expect(detectNetwork('6282123456789098')).to.equal('China UnionPay');
//   expect(detectNetwork('6284123456789098')).to.equal('China UnionPay');
//   expect(detectNetwork('6288123456789098')).to.equal('China UnionPay');
// });
//
// it('has prefix 6282-6288 and length 17', function(){
//   expect(detectNetwork('62821234567879098')).to.equal('China UnionPay');
//   expect(detectNetwork('62841234567879098')).to.equal('China UnionPay');
//   expect(detectNetwork('62881234567879098')).to.equal('China UnionPay');
// });

// it('has prefix 6282-6288 and length 18', function(){
//   expect(detectNetwork('6282123456789666098')).to.equal('China UnionPay');
//   expect(detectNetwork('6284123456786669098')).to.equal('China UnionPay');
//   expect(detectNetwork('6288123456786669098')).to.equal('China UnionPay');
// });
//
// it('has prefix 6282-6288 and length 19', function(){
//   expect(detectNetwork('6282123456789667760')).to.equal('China UnionPay');
//   expect(detectNetwork('6284123456786677098')).to.equal('China UnionPay');
//   expect(detectNetwork('6288123456786677698')).to.equal('China UnionPay');
// });

})
describe('should support Switch', function(){
  var expect = chai.expect;
  it('has prefix 4903 and length 16', function(){
    expect(detectNetwork('4903123456789098')).to.equal('Switch');
  });
  it('has prefix 4903 and length 18', function(){
    expect(detectNetwork('490312345676859098')).to.equal('Switch');
  });
  it('has prefix 4903 and length 19', function(){
    expect(detectNetwork('4903123456976859098')).to.equal('Switch');
  });

  it('has prefix 4905 and length 16', function(){
    expect(detectNetwork('4905123456789098')).to.equal('Switch');
  });
  it('has prefix 4905 and length 18', function(){
    expect(detectNetwork('490512345676859098')).to.equal('Switch');
  });
  it('has prefix 4905 and length 19', function(){
    expect(detectNetwork('4905123456976859098')).to.equal('Switch');
  });

  it('has prefix 4911 and length 16', function(){
    expect(detectNetwork('4911123456789098')).to.equal('Switch');
  });
  it('has prefix 4911 and length 18', function(){
    expect(detectNetwork('491112345676859098')).to.equal('Switch');
  });
  it('has prefix 4911 and length 19', function(){
    expect(detectNetwork('4911123456976859098')).to.equal('Switch');
  });

  it('has prefix 4936 and length 16', function(){
    expect(detectNetwork('4936123456789098')).to.equal('Switch');
  });
  it('has prefix 4936 and length 18', function(){
    expect(detectNetwork('493612345676859098')).to.equal('Switch');
  });
  it('has prefix 4936 and length 19', function(){
    expect(detectNetwork('4936123456976859098')).to.equal('Switch');
  });

  it('has prefix 564182 and length 16', function(){
    expect(detectNetwork('5641821234567890')).to.equal('Switch');
  });

  it('has prefix 564182 and length 18', function(){
    expect(detectNetwork('564182123457767890')).to.equal('Switch');
  });
  it('has prefix 564182 and length 19', function(){
    expect(detectNetwork('5641821234567890999')).to.equal('Switch');
  });

  it('has prefix 6333 and length 16', function(){
    expect(detectNetwork('6333210234567890')).to.equal('Switch');
  });

  it('has prefix 6333 and length 18', function(){
    expect(detectNetwork('633321012347767890')).to.equal('Switch');
  });
  it('has prefix 6333 and length 19', function(){
    expect(detectNetwork('6333210123567890999')).to.equal('Switch');
  });


  it('has prefix 633110 and length 16', function(){
    expect(detectNetwork('6331101234567890')).to.equal('Switch');
  });

  it('has prefix 633110 and length 18', function(){
    expect(detectNetwork('633110123457767890')).to.equal('Switch');
  });
  it('has prefix 633110 and length 19', function(){
    expect(detectNetwork('6331101234567890999')).to.equal('Switch');
  });

  it('has prefix 6759 and length 16', function(){
    expect(detectNetwork('6759101234567890')).to.equal('Switch');
  });

  it('has prefix 6759 and length 18', function(){
    expect(detectNetwork('675910123457767890')).to.equal('Switch');
  });
  it('has prefix 6759 and length 19', function(){
    expect(detectNetwork('6759101234567890999')).to.equal('Switch');
  });

})
