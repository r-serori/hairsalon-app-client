import React from 'react';
import Link from 'next/link';
import LogoutButton from '../components/elements/button/logoutButton';

const dashboard: React.FC = () => {
    return (
        <div>
            
            <h1>Dashboard</h1>
            <LogoutButton />
            <nav>
                <ul>
                    <li><Link href="/attendances">勤怠管理</Link></li>
                    <li><Link href="/customers">aq</Link></li>
                    <li><Link href="/daily_sales">aq</Link></li>
                    <li><Link href="/schedules">aq</Link></li>
                    <li><Link href="/stocks">aq</Link></li>
                    <li><Link href="/courses">aq</Link></li>
                    <li><Link href="/options">aq</Link></li>
                    <li><Link href="/merchandises">aq</Link></li>
                    <li><Link href="/hairstyles">aq</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default dashboard;