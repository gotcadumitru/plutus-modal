import { render, RenderOptions } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

type RenderWithProvidersParameters = {
  route?: string
  renderOptions?: RenderOptions
}
export const renderWithProviders = (
  ui: ReactElement,
  { route = '/', ...renderOptions }: RenderWithProvidersParameters = {},
) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
  )

  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
