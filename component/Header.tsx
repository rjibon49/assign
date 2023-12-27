import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
            </ul>
        </div>
    );
};

export default Header;