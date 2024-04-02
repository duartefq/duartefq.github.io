import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CustomBadge from '../CustomBadge.vue'

describe('CustomBadge', () => {
  it('renders properly', () => {
    const wrapper = mount(CustomBadge, {
      props: {
        href: '#'
      },
      slots: {
        default: 'Content'
      }
    })

    expect(wrapper.text()).toContain('Content')
  })

  it('shows the gradient effect', () => {
    const wrapper = mount(CustomBadge, {
      props: {
        animated: true,
        href: '#'
      }
    })

    expect(wrapper.find('button').html()).toContain('animate-border')
  })
})
