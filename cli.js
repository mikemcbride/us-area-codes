#!/usr/bin/env node
'use strict';
const meow = require('meow');
const areacodes = require('./');

const cli = meow(`
	Usage
	  $ areacodes [code]

	Examples
	  $ areacodes 210
	  Texas
`);

console.log(codes.get(cli.input[0]));
