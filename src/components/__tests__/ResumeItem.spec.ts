import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ResumeItem from '../ResumeItem.vue'

describe('ResumeItem', () => {
  it('renders properly', () => {
    const wrapper = mount(ResumeItem, {
      slots: {
        default: 'Main Content',
        icon: 'some-icon',
        heading: 'Role',
        'sub-heading': 'Company',
        period: 'Date',
        location: 'City',
        technologies: 'Vue.js'
      }
    })

    expect(wrapper.find('h2').text()).toContain('Role')
    expect(wrapper.find('h3').text()).toContain('Company')
    expect(wrapper.find('span').text()).toContain('some-icon')
    expect(wrapper.html()).toContain('Main Content')
    expect(wrapper.html()).toContain('Date')
    expect(wrapper.html()).toContain('City')
    expect(wrapper.html()).toContain('Vue.js')
  })
})
