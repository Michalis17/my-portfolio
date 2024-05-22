import React from 'react'

const Waves: React.FC = () => {
    return (
        <svg
            width='100%'
            height='100%'
            viewBox='0 0 1100 300'
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150  transform rotate-180 rounded-b-2xl"
        >

            <defs>
                <linearGradient id="gradient-0" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#00657f"></stop><stop offset="95%" stopColor="#8ED1FC"></stop></linearGradient>
            </defs>

            <path width='100%' d="M 0,700 L 0,105 C 150.40000000000003,133.8 300.80000000000007,162.6 475,147 C 649.1999999999999,131.4 847.2,71.4 1012,57 C 1176.8,42.6 1308.4,73.8 1440,105 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="url(#gradient-0)" fillOpacity="0.265" className="transition-all duration-300 ease-in-out delay-150 path-0"></path>

            <defs>
                <linearGradient id="gradient-1" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#00657f"></stop><stop offset="95%" stopColor="#8ED1FC"></stop></linearGradient>
            </defs>

            <path d="M 0,700 L 0,245 C 192.40000000000003,227.26666666666665 384.80000000000007,209.53333333333333 528,217 C 671.1999999999999,224.46666666666667 765.2,257.1333333333333 909,266 C 1052.8,274.8666666666667 1246.4,259.93333333333334 1440,245 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="url(#gradient-1)" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-1"></path>

            <defs>
                <linearGradient id="gradient-2" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#00657f"></stop><stop offset="95%" stopColor="#8ED1FC"></stop></linearGradient>
            </defs>

            <path d="M 0,700 L 0,385 C 131.2,378.8666666666667 262.4,372.7333333333333 448,365 C 633.6,357.2666666666667 873.5999999999999,347.93333333333334 1048,351 C 1222.4,354.06666666666666 1331.2,369.5333333333333 1440,385 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="url(#gradient-2)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-2"></path>

            <defs>
                <linearGradient id="gradient-3" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#00657f"></stop><stop offset="95%" stopColor="#8ED1FC"></stop></linearGradient>
            </defs>
            <path d="M 0,700 L 0,525 C 195.59999999999997,545.2666666666667 391.19999999999993,565.5333333333334 559,561 C 726.8000000000001,556.4666666666666 866.8,527.1333333333333 1009,517 C 1151.2,506.8666666666667 1295.6,515.9333333333334 1440,525 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="url(#gradient-3)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-3"></path>
        </svg>
    )
}

export default Waves