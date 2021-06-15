import React, { FunctionComponent, useEffect, useRef, useState } from 'react';

import AlphaPicker from './alphaPicker';

type AlphaPickerProps = {
    onAlphaPicked: () => void
};

// React compatibility wrapper component for alphaPicker.js
// eslint-disable-next-line @typescript-eslint/no-empty-function
const AlphaPickerComponent: FunctionComponent<AlphaPickerProps> = ({ onAlphaPicked = () => {} }: AlphaPickerProps) => {
    const [ alphaPicker, setAlphaPicker ] = useState(null);
    const element = useRef(null);

    useEffect(() => {
        setAlphaPicker(new AlphaPicker({
            element: element.current,
            mode: 'keyboard'
        }));

        element.current?.addEventListener('alphavalueclicked', onAlphaPicked);

        return () => {
            alphaPicker?.destroy();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Disabled for wrapper components
    }, []);

    return (
        <div
            ref={element}
            className='alphaPicker align-items-center'
        />
    );
};

export default AlphaPickerComponent;
