import React from 'react';
import 'isomorphic-fetch';                     //It's not necessary to give a name

const Home = ({ repositories }) => (
	<div>{repositories.map(repo => <h1 key={repo.id}>{repo.name}</h1>)}</div>
	);

Home.getInitialProps = async () => {           //getInitialProps is started first of all  |  this method is done to call the api
   const response = await fetch("https://api.github.com/users/goowlart/repos");
   const repositories = await response.json();

   return { repositories };
};

export default Home;