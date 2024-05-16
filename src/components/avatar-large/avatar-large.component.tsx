import { HTMLAttributes } from 'react';

import './avatar-large.styles.css';

type AvatarLargeProps = HTMLAttributes<HTMLImageElement> & {
    src: string | null;
};
const AvatarLarge = ({ src, ...props }: AvatarLargeProps) => {
    console.log('src', src);
    return (<>
        {src && <img className='avatar' src={src} {...props}  alt=''/>}
    </>
    );
};

export default AvatarLarge;