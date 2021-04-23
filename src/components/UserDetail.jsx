import React from 'react';
import PropTypes from 'prop-types';

function UserDetail({user}){
    return(
        <>
            <img src={user.avatar_url} alt="User avatar picture"/>
            <span>{user.name}</span>
            <div>
                BIO: {user.bio}
            </div>
            <div>
                LOCATION: {user.location}
            </div>
        </>
    )
}

UserDetail.propTypes = {
    user : PropTypes.object
}

export default UserDetail;