import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ResumeItems from '../ResumeItems.vue'

describe('ResumeItems', () => {
  it('renders properly', () => {
    const wrapper = mount(ResumeItems)

    expect(wrapper.text()).toContain('Senior Full Stack Web Developer')
  })
})
