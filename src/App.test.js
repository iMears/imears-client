import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function add(a,b) {
  return a + b;
}

it('passes canary test', () => {
  expect(1).toBe(1)
});

describe('add()', () => {
	it('sums two numbers', () => {
	  const result = add(1, 2);

	  expect(result).toBe(3);
	});	
})



xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
