import React, {useState, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import {fetchSpell} from '../actions/actions';
import {connect} from 'react-redux';
import '../styles/searchbar.css';

const SearchBar = (props) => {
    const [qry, setQry] = useState('');

    const spellInput = useRef(null);

    useEffect(() => {
        spellInput.current.focus();
    }, [])

    const list = useSelector(state => state.spells);

    const spellName = e => {
        const name = e.target.value;
        const composedName = name.replace(/\s/g, "-");
        setQry(composedName);
    }

    const handleQuery = () => {
        if (list.every(spell => spell.index !== qry)) {
            props.fetchSpell(qry);
            setQry('');
        } else {
            setQry('');
        }
        spellInput.current.focus();
    }

    return (
        <>
            <InputGroup>
                <FormControl
                    placeholder="find a spell"
                    className="spell-input"
                    onChange={spellName}
                    value={qry}
                    ref={spellInput}
                />
                <InputGroup.Append>
                    <Button 
                    variant="warning" 
                    className="btn"
                    onClick={handleQuery}
                    >Search</Button>
                    </InputGroup.Append>
            </InputGroup>
        </>
    )
}


export default connect(null, {fetchSpell})(SearchBar);
