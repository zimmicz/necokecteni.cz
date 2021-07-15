import React from 'react';
import Link from 'next/link';

type Props = React.PropsWithChildren<{
    to: string;
    className?: string;
}>

export const BlockLink = ({ children, to, className, ...props }: Props) => {
    return (
        <Link href={to} {...props}>
            <a className={className}>{children}</a>
        </Link>
    );
}
