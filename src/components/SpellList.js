import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import {closeSpell} from '../actions/actions';
import '../styles/card.css';

const SpellList = () => {
    const list = useSelector(state => state.spells);
    const dispatch = useDispatch();

    return (
        <div className="card-wrapper m-2">
            {list.map(spell => {
                if(spell.error) {return}
                return (
                    <Card className="card m-2" key={spell._id}>
                        <Card.Header className="card__header">
                            <Card.Title className="card__title">{spell.name}</Card.Title>
                            <Card.Subtitle className="card__subtitle"><span className="property">School:</span> {spell.school.name}</Card.Subtitle>
                            <div 
                            className="card__close"
                            onClick={() => dispatch(closeSpell(spell.name))}
                            >X</div>
                        </Card.Header>
                        <Card.Body className="card__content">
                            <Card.Text className="card__desc">{spell.desc[0]}</Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroupItem className="pl-0"><span className="property">Level:</span> {spell.level}</ListGroupItem>
                                    <ListGroupItem className="pl-0"><span className="property">Range:</span> {spell.range}</ListGroupItem>
                                    <ListGroupItem className="pl-0"><span className="property">Duration:</span> {spell.duration}</ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default SpellList;
