// import Link from 'next/link';
// import React from 'react';

// const Header = () => {
//     return (
//         <div>
//             <ul>
//                 <li><Link href="/">Home</Link></li>
//                 <li><Link href="/blog">Blog</Link></li>
//             </ul>
//         </div>
//     );
// };

// export default Header;

import Link from 'next/link';
import React from 'react';
import Search from './Search';

interface HeaderProps {
    onSearch: (searchTerm: string) => void;
  }

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    return (
        <div className='container mx-auto'>
            <ul className='flex flex-row'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
            </ul>
            <Search onSearch={onSearch} />
        </div>
    );
};

export default Header;