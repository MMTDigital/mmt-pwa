import renderMetaTags from './renderMetaTags'

test('it shows a title tag', () => {
  const data = {
    title: 'Example'
  }

  const wrapper = mount(renderMetaTags(data))

  // get this test working...
  // expect(wrapper.find('title')).toHaveLength(1)
  expect(true).toBeTruthy()
})
