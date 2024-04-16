// tests/components/ActionDispatcher.nuxt.spec.ts
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { expect, it } from 'vitest'
import { screen } from '@testing-library/vue'

it('can render some component', async () => {
  await renderSuspended(SomeComponent)
  expect(screen.getByText('This is an auto-imported component')).toBeDefined()
})