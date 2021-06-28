/**
 * @format
 */

import 'react-native'
import React from 'react'
import App from '../App.tsx'
import { render } from '@testing-library/react-native'

it('renders correctly', () => {
  const { getByText } = render(<App />)
  expect(getByText('Open up App.tsx to start working on your app!')).toBeTruthy()
})
