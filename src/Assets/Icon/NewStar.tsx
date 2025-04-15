import React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';

const NewStar = ({ color }: { color?: string }) => {
    return (
        <Svg width="20" height="20" viewBox="0 0 16 16" fill="none">
            <Mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                <Path d="M0 0H16V16H0V0Z" fill="white" />
            </Mask>
            <G mask="url(#mask0)">
                <Path
                    d="M8.99977 6.5H6.99977V8M6.99977 8H8.59977M6.99977 8V9.5H8.99977M3.49977 10V6M5.49977 6V10M3.99977 6C3.99977 6.5 4.99977 9.5 4.99977 10M9.99977 6V9.5M9.99977 9.5V10M9.99977 9.5C9.99977 8.575 10.6528 7.656 11.1528 7.656C11.6528 7.656 12.4998 8.575 12.4998 9.5M12.4998 9.5V6M12.4998 9.5V10M7.99977 1L9.90277 2.141L12.1138 2.337L12.9838 4.379L14.6568 5.837L14.1598 8L14.6568 10.163L12.9828 11.621L12.1138 13.663L9.90377 13.858L7.99977 15L6.09577 13.858L3.88577 13.663L3.01577 11.621L1.34277 10.163L1.83977 8L1.34277 5.837L3.01577 4.379L3.88577 2.337L6.09577 2.141L7.99977 1Z"
                    stroke={color}
                />
            </G>
        </Svg>
    );
};

export default NewStar;
