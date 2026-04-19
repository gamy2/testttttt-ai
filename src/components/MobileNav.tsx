'use client';
import Link from 'next/link';
import Icon from './Icon';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
    const pathname = usePathname();

    const getLinkClasses = (path: string) => {
        const isActive = pathname === path;
        if (isActive) {
            return "flex flex-col items-center justify-center bg-amber-500 text-white rounded-full w-14 h-14 -mt-6 shadow-lg shadow-amber-500/40 gap-1 transition-transform active:scale-95";
        }
        return "flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 hover:text-amber-400 gap-1";
    };

    return (
        <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] rounded-t-[3rem]">
            <Link className={getLinkClasses('/')} href="/">
                <Icon name="home" className="w-6 h-6" />
                <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">Home</span>
            </Link>
            <Link className={getLinkClasses('/products')} href="/products">
                <Icon name="pets" className="w-6 h-6" />
                <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">Shop</span>
            </Link>
            <Link className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 hover:text-amber-400 gap-1" href="#cart">
                <Icon name="shopping_bag" className="w-6 h-6" />
                <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">Cart</span>
            </Link>
            <Link className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 hover:text-amber-400 gap-1" href="#profile">
                <Icon name="person" className="w-6 h-6" />
                <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase tracking-widest mt-1">Profile</span>
            </Link>
        </nav>
    );
}
