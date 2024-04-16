// tests/components/ActionDispatcher.nuxt.spec.ts
import ActionDispatcher from '~/components/ActionDispatcher.vue'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { expect, it } from 'vitest'
import { screen } from '@testing-library/vue'

it('can render some component', async () => {
  await renderSuspended(ActionDispatcher)
  expect(
    screen.getByText('O recurso que você está buscando não foi encontrado.')
  ).toBeDefined()
})