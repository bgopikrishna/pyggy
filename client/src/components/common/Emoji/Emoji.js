import React from 'react';

function Emoji({ label, emoji }) {
    return (
        <span role="img" aria-label={label}>
            {emoji}
        </span>
    );
}

export default Emoji;
