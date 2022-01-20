import React from 'react';

export default function Loading({ absolute = false }) {
    return (
        <div style={{ position: absolute ? 'absolute' : 'fixed', inset: '0', background: 'rgba(255,255,255,0.5)', display: 'grid', placeItems: 'center', zIndex: 2000 }}>
            <div className="spinner-border" role="status" style={{ height: '4rem', width: '4rem', }}>
            </div>
        </div>
    );
}
