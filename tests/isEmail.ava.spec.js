import { test } from "ava";
var validators = require("../distrib/format-validator.min.js");

test("isEmail-valids", t => {
  var inputs = [
    'foo@bar.com',
    'x@x.au',
    'foo@bar.com.au',
    'foo+bar@bar.com',
    'hans.m端ller@test.com',
    'hans@m端ller.com',
    'test|123@m端ller.com',
    'test123+ext@gmail.com',
    'some.name.midd.leNa.me+extension@GoogleMail.com',
    '"foobar"@example.com',
    // '"  foo  m端ller "@example.com',
    // '"foo\\@bar"@example.com',
    'test@gmail.com',
    'test.1@gmail.com',
    "Abc@example.com",
    //"Abc@10.42.0.1", 
    "Abc.123@example.com",
    "user+mailbox/department=shipping@example.com",
    "!#$%&'*+-/=?^_`.{|}~@example.com",
    //  "\"Abc@def\"@example.com",
    // "\"Fred Bloggs\"@example.com",
    "\"Joe.\\Blow\"@example.com",
    // "Loïc.Accentué@voilà.fr"
  ];
  for (var input of inputs) {
    let result = validators.isEmail(input);
    t.deepEqual(result, true, input + " fail");
  }
});

test("isEmail-invalids", t => {
  var inputs = [
    'invalidemail@',
    'invalid.com',
    '@invalid.com',
    'foo@bar.com.',
    'somename@ｇｍａｉｌ.com',
    'foo@bar.co.uk.',
    'z@co.c',
    "abc@ex.ff@.com",
    "abc@toto@tti.com",
    //'ｇｍａｉｌｇｍａｉｌｇｍａｉｌｇｍａｉｌｇｍａｉｌ@gmail.com',
    'test1@invalid.co m',
    'test2@invalid.co m',
    'test3@invalid.co m',
    'test4@invalid.co m',
    'test5@invalid.co m',
    'test6@invalid.co m',
    'test7@invalid.co m',
    'test8@invalid.co m',
    'test9@invalid.co m',
    'test10@invalid.co m',
    'test11@invalid.co m',
    'test12@invalid.co　m',
    'test13@invalid.co　m',
    //    'multiple..dots@stillinvalid.com',
    'test123+invalid! sub_address@gmail.com',
    //  'gmail...ignores...dots...@gmail.com',
    'ends.with.dot.@gmail.com',
    //  'multiple..dots@gmail.com',
    "Abc.example.com",
    "Abc.@example.com",
    "Abc..123@example.com"
  ];
  for (var input of inputs) {
    let result = validators.isEmail(input);
    t.deepEqual(result, false, input + " fail");
  }
});