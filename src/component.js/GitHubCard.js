import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const GitHubCard = (props) => {

    const [githubName, setGithubName] = useState('')
    const [githubRepo, setGithubRepo] = useState('')
    const [githubAbout, setGithubAbout] = useState('')

    useEffect(() => {
        fetch('https://api.github.com/users/learningToCode1234')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setGithubName(data.name)
            setGithubRepo(data.repos_url)
            setGithubAbout(data.bio)
        })
    })
  return (
    <Card >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title> {githubName}</Card.Title>
        <Card.Text>
            {githubAbout}
        </Card.Text>
        <a href={githubRepo}><Button variant="primary" >Repositories</Button></a>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;

