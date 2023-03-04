import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'


test('render a sanapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  // console.log(tree)
  expect(tree).toMatchSnapshot()
})