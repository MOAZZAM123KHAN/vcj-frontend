import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const JsonLd = ({ data }: { data: any }) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
};

export default JsonLd;
