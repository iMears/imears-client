import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('passes canary test', () => {
  expect(1).toBe(1)
});

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
