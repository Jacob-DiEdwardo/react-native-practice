/*
 * @jest-environment jsdom
 */

import { test, expect, afterEach } from '@jest/globals'
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import withHOC from './index'

interface DummyComponentProps {
  test: string
}

afterEach(cleanup)

const DummyComponent: React.FC<DummyComponentProps> = ({ test }) => (
  <div>{test}</div>
)
const withDummyComponent = withHOC(() => ({ test: 'Hello World!' }))
const HOCedDummyComponent = withDummyComponent(DummyComponent)

test('withHOC', () => {
  const tree = render(<HOCedDummyComponent />)
  expect(tree.container).toMatchSnapshot()
})
