import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/* tanda .. menjelaskan bahwa harus mundur 2 foloder (ke atas) */
import Button from '../button/Button';

import styles from './header.module.css'



const Header = ( { showAddToggle, showAdd, clearTodos } ) => {

   

    return (
    <section className={styles.header}>
       
        <Button text= { showAdd ? 'Selesai' : 'Tambah'} onClick={showAddToggle}/>
        <h1 className={styles.headerTitle}>Todo list</h1>
        <Button text="Clear" onClick={clearTodos} color="red" align="right"/>

    </section>
    );
};

Header.propTypes = {

    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodos: PropTypes.func.isRequired,
};

export default Header;