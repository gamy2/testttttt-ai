import Link from 'next/link';
import Icon from './Icon';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-xl transition-all duration-300">
            <div className="flex items-center gap-8">
                <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white font-headline">Paws &amp; Play</span>
                <nav className="hidden md:flex items-center gap-6 font-headline font-medium">
                    <Link className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-all duration-300 hover:scale-105" href="/">Home</Link>
                    <Link className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-all duration-300 hover:scale-105" href="/products">Products</Link>
                </nav>
            </div>
            <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border-none">
                    <Icon name="search" className="w-5 h-5 text-on-surface-variant" />
                    <input className="bg-transparent border-none focus:ring-0 text-sm font-medium w-48 ml-2" placeholder="Search curiosities..." type="text"/>
                </div>
                <button className="p-2 transition-all duration-300 hover:scale-105 active:scale-95 opacity-80">
                    <Icon name="shopping_cart" className="w-6 h-6 text-slate-900 dark:text-white" />
                </button>
                <button className="p-2 transition-all duration-300 hover:scale-105 active:scale-95 opacity-80">
                    <Icon name="person" className="w-6 h-6 text-slate-900 dark:text-white" />
                </button>
            </div>
        </header>
    );
}
