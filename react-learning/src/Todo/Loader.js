import React from 'react';

const styles = {
    loader: {
        display: 'flex',
        justifyContent: 'center',
        margin: '15px'
    }
}

export default () => (
    <div style={styles.loader}>
        <div className="lds-dual-ring"></div>
    </div>
)