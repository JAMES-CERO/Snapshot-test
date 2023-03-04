import GitHubCard from './GitHubCard'
import renderer from 'react-test-renderer'

test(' render a car scrrenshot', () => {
    const github = renderer.create(<GitHubCard/>).toJSON()
    expect(github).toMatchSnapshot()
})

