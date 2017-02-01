"use strict";

const assert = require("assert");
const sprintfjs = require("sprintf-js");
const sprintf = sprintfjs.sprintf;
const vsprintf = sprintfjs.vsprintf;
require("../index").bind(sprintf);

function should_throw(format,args,err) 
{
   assert.throws( function(){ vsprintf(format,args); }, err);
}

const empty = "";
const chl   = "l";
const chu   = "U";
const hello = "heLLo WORLD";
const name  = "DoLly mollY";
const sym   = "$%[]123";

describe("sprintf-ext-string", function() 
{
   it("should throw SyntaxError for invalid formats", function() 
   {
      should_throw("%[ ]S", [], SyntaxError);
      should_throw("%[z]S", [], SyntaxError);
      should_throw("%[u]S", [], SyntaxError);
      should_throw("%[L]S", [], SyntaxError);
      should_throw("%[c]S", [], SyntaxError);
      should_throw("%[ U]S", [], SyntaxError);
      should_throw("%[FU]S", [], SyntaxError);
      should_throw("%[fl]S", [], SyntaxError);
      should_throw("%[CU]S", [], SyntaxError);
      should_throw("%[cU]S", [], SyntaxError);
      should_throw("%[cl]S", [], SyntaxError);
   });

   it("should return all formatted strings as is", function() 
   {
      assert.equal(empty, sprintf("%[]S", empty));
      assert.equal(chl,   sprintf("%[]S", chl));
      assert.equal(chu,   sprintf("%[]S", chu));
      assert.equal(hello, sprintf("%[]S", hello));
      assert.equal(name,  sprintf("%[]S", name));
      assert.equal(sym,   sprintf("%[]S", sym));
   });

   it("should return all formatted strings in UPPER CASE", function() 
   {
      assert.equal(empty, sprintf("%S", empty));
      assert.equal("L",   sprintf("%S", chl));
      assert.equal("U",   sprintf("%S", chu));
      assert.equal("HELLO WORLD", sprintf("%S", hello));
      assert.equal("DOLLY MOLLY",  sprintf("%S", name));
      assert.equal(sym,   sprintf("%S", sym));
   });

   it("should return all formatted strings in lower case", function() 
   {
       assert.equal(empty, sprintf("%[l]S", empty));
       assert.equal("l",   sprintf("%[l]S", chl));
       assert.equal("u",   sprintf("%[l]S", chu));
       assert.equal("hello world", sprintf("%[l]S", hello));
       assert.equal("dolly molly",  sprintf("%[l]S", name));
       assert.equal(sym,   sprintf("%[l]S", sym));
   });

   it("should return a string with first letter in Upper case", function() 
   {
       assert.equal(empty, sprintf("%[F]S", empty));
       assert.equal("L",   sprintf("%[F]S", chl));
       assert.equal("U",   sprintf("%[F]S", chu));
       assert.equal("HeLLo WORLD", sprintf("%[F]S", hello));
       assert.equal("DoLly mollY",  sprintf("%[F]S", name));
       assert.equal(sym,   sprintf("%[F]S", sym));
   });

   it("should return a string with first letter in lower case", function() {
      assert.equal(empty, sprintf("%[f]S", empty));
      assert.equal("l",   sprintf("%[f]S", chl));
      assert.equal("u",   sprintf("%[f]S", chu));
      assert.equal("heLLo WORLD", sprintf("%[f]S", hello));
      assert.equal("doLly mollY",  sprintf("%[f]S", name));
      assert.equal(sym,   sprintf("%[f]S", sym));
   });

   it("should return a string with first letter in upper case and others in Lower case", function() {
      assert.equal(empty, sprintf("%[Fl]S", empty));
      assert.equal("L",   sprintf("%[Fl]S", chl));
      assert.equal("U",   sprintf("%[Fl]S", chu));
      assert.equal("Hello world", sprintf("%[Fl]S", hello));
      assert.equal("Dolly molly",  sprintf("%[Fl]S", name));
      assert.equal(sym,   sprintf("%[Fl]S", sym));
   });

   it("should return a string with first letter in lower case and others in uPPER CASE", function() {
      assert.equal(empty, sprintf("%[fU]S", empty));
      assert.equal("l",   sprintf("%[fU]S", chl));
      assert.equal("u",   sprintf("%[fU]S", chu));
      assert.equal("hELLO WORLD", sprintf("%[fU]S", hello));
      assert.equal("dOLLY MOLLY",  sprintf("%[fU]S", name));
      assert.equal(sym,   sprintf("%[fU]S", sym));
   });

   it("should return a string with first letter in each word in Upper Case", function() {
      assert.equal(empty, sprintf("%[C]S", empty));
      assert.equal("L",   sprintf("%[C]S", chl));
      assert.equal("U",   sprintf("%[C]S", chu));
      assert.equal("L U", sprintf("%[C]S", chl + " " + chu));
      assert.equal("HeLLo WORLD", sprintf("%[C]S", hello));
      assert.equal("DoLly MollY",  sprintf("%[C]S", name));
      assert.equal(sym,   sprintf("%[C]S", sym));
   });

   it("should return a string with first letter in each word in Upper Case and others in Lower case", function() {
      assert.equal(empty, sprintf("%[Cl]S", empty));
      assert.equal("L",   sprintf("%[Cl]S", chl));
      assert.equal("U",   sprintf("%[Cl]S", chu));
      assert.equal("L U", sprintf("%[Cl]S", chl + " " + chu));
      assert.equal("Hello World", sprintf("%[Cl]S", hello));
      assert.equal("Dolly Molly",  sprintf("%[Cl]S", name));
      assert.equal(sym,   sprintf("%[Cl]S", sym));
   });
});

