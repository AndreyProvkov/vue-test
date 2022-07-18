import { render, screen } from '@testing-library/vue'
import BtnRemove from './BtnRemove.vue'
// import '@testing-library/jest-dom/extend-expect'

test('renders btn remove', () => {
  render(BtnRemove)
  screen.debug()
  expect(screen.getByTestId('svg-element')).toBeInTheDocument()
})
