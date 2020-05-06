import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from './components/Nav';
import SpellList from './components/SpellList';

function App() {
    return (
        <Container>
                <Nav />
                <SpellList />
        </Container>


    );
}

export default App;
