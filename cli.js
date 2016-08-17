#!/usr/bin/env node
'use strict';
const meow = require('meow');
const areacodes = require('./');

const cli = meow(`
	Usage
	  $ us-area-codes [code]

	Examples
	  $ us-area-codes 210
	  Texas
`);

console.log(areacodes.get(cli.input[0]));
