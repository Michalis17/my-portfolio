import React from 'react'
interface Props {
    size: number;
}
const WebflowIcon: React.FC<Props> = ({ size }) => {
return(
   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={size} height={size} viewBox="0 0 48 48">
<circle cx="24" cy="24" r="20" fill="#1976d2"></circle><path fill="#fff" d="M30.1,21.43c0,0-1.73,5.42-1.86,5.88c-0.05-0.46-1.31-10.2-1.31-10.2c-2.95,0-4.52,2.09-5.35,4.32 c0,0-2.1,5.44-2.27,5.9c-0.01-0.43-0.32-5.84-0.32-5.84c-0.18-2.72-2.66-4.37-4.67-4.37l2.42,14.76c3.09-0.01,4.75-2.1,5.62-4.32 c0,0,1.85-4.8,1.93-5.02c0.02,0.21,1.33,9.34,1.33,9.34c3.09,0,4.76-1.96,5.66-4.1l4.32-10.67C32.54,17.11,30.93,19.2,30.1,21.43z"></path>
</svg>
            )
        }
export default WebflowIcon


