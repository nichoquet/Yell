import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ChatWindow from '@/components/ChatWindow.vue'

describe('ChatWindow.vue', () => {
  it('renders props.msg when passed', () => {
    const username = 'jeff'
    const wrapper = shallowMount(ChatWindow, {
      props: { username }
    })
    it("has creation function", () => {
      expect(typeof ChatWindow.created).to.be('function');
    });
    it('sets the correct default data', () => {
      const defaultData = wrapper.props();
      expect(defaultData.username).to.be(username);
    })
  })
})
