import Icon from './Icon';

export default function Footer() {
    return (
        <footer className="w-full py-12 px-8 mt-20 flex flex-col md:flex-row justify-between items-center gap-6 bg-slate-900 dark:bg-black font-['Plus_Jakarta_Sans'] text-sm">
            <div className="flex flex-col items-center md:items-start gap-2">
                <span className="text-xl font-black text-white">Paws &amp; Play</span>
                <p className="text-slate-400">© 2024 Paws &amp; Play. Curated with joy for your best friend.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                <a className="text-slate-400 hover:text-white transition-colors" href="#">Sustainability</a>
                <a className="text-slate-400 hover:text-white transition-colors" href="#">Wholesale</a>
                <a className="text-slate-400 hover:text-white transition-colors" href="#">Track Order</a>
                <a className="text-slate-400 hover:text-white transition-colors" href="#">Pet Care Blog</a>
            </div>
            <div className="flex gap-4 text-amber-500">
                <Icon name="social_leaderboard" className="cursor-pointer w-6 h-6 hover:text-white transition-colors" />
                <Icon name="language" className="cursor-pointer w-6 h-6 hover:text-white transition-colors" />
                <Icon name="share" className="cursor-pointer w-6 h-6 hover:text-white transition-colors" />
            </div>
        </footer>
    );
}
