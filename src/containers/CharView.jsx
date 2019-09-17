import React from 'react';

const CharView = ( {match} ) => {
    return (
        <div>
            this is the view {match.params.id}
        </div>
    );
};

export default CharView;