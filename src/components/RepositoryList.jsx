import React from 'react';
import PropTypes from 'prop-types';

function RepositoryList({repositories, resetForm}){
    return(
        <>
            <ol>
                {repositories.map(item => {
                    return (
                        <li>
                          {item.name}
                        </li>
                    )
                })}
            </ol>
            <button onClick={resetForm}>RESET</button>
        </>
    );
}

RepositoryList.propTypes = {
    repositories : PropTypes.array,
    resetForm : PropTypes.func,
}

export default RepositoryList;