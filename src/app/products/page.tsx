
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import Icon from '@/components/Icon';


export default function Products() {
    return (
        <>
            

<Header />
<main className="pt-24 pb-12 px-8 max-w-[1600px] mx-auto">

<section className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-5 space-y-6">
<span className="bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase font-label">Curated Selection</span>
<h1 className="text-6xl md:text-7xl font-extrabold font-headline leading-[0.9] tracking-tighter text-on-surface">
                    Pure Joy, <br/><span className="text-primary-container">Tail-Wagging</span> Quality.
                </h1>
<p className="text-lg text-on-surface-variant leading-relaxed max-w-md">
                    Beyond standard pet care. We hand-pick every ingredient and every stitch to ensure your best friend lives their most vibrant life.
                </p>
</div>
<div className="lg:col-span-7 relative h-[400px] rounded-xl overflow-hidden shadow-2xl group">
<Image className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGNdzDHXy2X5d75QpPHBPF77R_gQMxLk8OspuMmGOFbJ_Cb-csVsJEsWdUyLtnhsMEMB_gEs-ZscKKt1MSZiveZe4TWB5PirK7dZyJua28KYnequZkxSW2d439BMLrG2c2K2aRkDYQN8U7fv2YRiL3XX8AjONY4Rvm7gFC0ZLo1sSFgZvjJi00KEdm8u_zbKONeE6ajuLWVPrGel7tYMecG0Wa1XBjjxtXB9MqJuWzgNBRKPyK-az_VwRUIU-ays_EfUpuznvKjn0" alt="Happy golden retriever dog jumping in a sun-drenched garden catching a bright orange frisbee, vibrant colors, soft focus background" width={800} height={800}  />
<div className="absolute inset-0 bg-gradient-to-r from-on-background/40 to-transparent"></div>
</div>
</section>
<div className="flex flex-col lg:flex-row gap-12">

<aside className="lg:w-64 space-y-10 shrink-0">
<div>
<h3 className="text-sm font-black font-headline uppercase tracking-widest text-secondary mb-6 flex items-center gap-2">
<span className="w-2 h-2 bg-primary-container rounded-full"></span> Life Stage
                    </h3>
<div className="space-y-4">
<label className="flex items-center group cursor-pointer">
<input className="w-5 h-5 rounded border-none bg-surface-container-high text-primary focus:ring-primary-container" type="checkbox"/>
<span className="ml-3 text-on-surface-variant group-hover:text-on-surface font-medium transition-colors">Puppy</span>
</label>
<label className="flex items-center group cursor-pointer">
<input defaultChecked className="w-5 h-5 rounded border-none bg-surface-container-high text-primary focus:ring-primary-container" type="checkbox"/>
<span className="ml-3 text-on-surface-variant group-hover:text-on-surface font-medium transition-colors">Adult</span>
</label>
<label className="flex items-center group cursor-pointer">
<input className="w-5 h-5 rounded border-none bg-surface-container-high text-primary focus:ring-primary-container" type="checkbox"/>
<span className="ml-3 text-on-surface-variant group-hover:text-on-surface font-medium transition-colors">Senior</span>
</label>
</div>
</div>
<div>
<h3 className="text-sm font-black font-headline uppercase tracking-widest text-secondary mb-6 flex items-center gap-2">
<span className="w-2 h-2 bg-primary-container rounded-full"></span> Breed Size
                    </h3>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-bold text-xs hover:bg-primary-fixed transition-colors">SMALL</button>
<button className="px-4 py-2 rounded-full bg-on-secondary-fixed text-on-secondary-fixed-variant font-bold text-xs">MEDIUM</button>
<button className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-bold text-xs hover:bg-primary-fixed transition-colors">LARGE</button>
</div>
</div>
<div>
<h3 className="text-sm font-black font-headline uppercase tracking-widest text-secondary mb-6 flex items-center gap-2">
<span className="w-2 h-2 bg-primary-container rounded-full"></span> Toy Type
                    </h3>
<div className="space-y-4">
<label className="flex items-center group cursor-pointer">
<input className="w-5 h-5 border-none bg-surface-container-high text-primary focus:ring-primary-container" name="toy_type" type="radio"/>
<span className="ml-3 text-on-surface-variant group-hover:text-on-surface font-medium transition-colors">Chew</span>
</label>
<label className="flex items-center group cursor-pointer">
<input className="w-5 h-5 border-none bg-surface-container-high text-primary focus:ring-primary-container" name="toy_type" type="radio"/>
<span className="ml-3 text-on-surface-variant group-hover:text-on-surface font-medium transition-colors">Fetch</span>
</label>
<label className="flex items-center group cursor-pointer">
<input defaultChecked className="w-5 h-5 border-none bg-surface-container-high text-primary focus:ring-primary-container" name="toy_type" type="radio"/>
<span className="ml-3 text-on-surface-variant group-hover:text-on-surface font-medium transition-colors">Puzzle</span>
</label>
</div>
</div>
</aside>

<div className="flex-1">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-3xl font-black font-headline tracking-tighter text-on-surface">The Fresh List</h2>
<p className="text-on-surface-variant">Showing 24 of 142 results</p>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Sort by:</span>
<select className="border-none bg-transparent font-bold text-on-surface focus:ring-0 cursor-pointer">
<option>Curated Popularity</option>
<option>Price: Low to High</option>
<option>New Arrivals</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

<div className="group relative bg-surface-container-lowest rounded-xl p-6 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] flex flex-col">
<div className="relative h-64 mb-6 overflow-hidden rounded-lg bg-surface-container-low">
<Image className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAflp6mbOqk9P_vlCxahk9WPDvNv2MJb5dP9vI4RkYeskc2cSUqaThlNCZStMl5J_XCJ7Jn9tuXFd0JvkM1x6i23d3INExdqF_LscD434bUCIwY1wH7tEaE3IQz0QXaCefC7eqVW6xh25QRswSfAK_1YjMcvMChHrSVBo-0ZUEgv8CCmPSX3Lx99FUsxasytr5gdSrSK5EPBwPk35wCHgzu72Jk6rTtA5FGhYU8YjDmxLDNXfwsrZ8zwnp0e2C9kvvg_bCIToucpxo" alt="Premium organic dog food in a ceramic bowl with pieces of fresh salmon and blueberries, professional food photography" width={800} height={800}  />
<span className="absolute top-4 left-4 bg-tertiary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Fresh Batch</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold font-headline text-on-surface group-hover:text-primary transition-colors leading-tight">Wild Salmon &amp; Berry Fusion</h3>
<span className="text-xl font-black font-headline text-on-surface-variant">$34.00</span>
</div>
<p className="text-sm text-on-surface-variant mb-4 font-medium">Grain-free nourishment for high-energy adults.</p>
</div>
<button className="w-full py-4 rounded-full bg-primary-container text-on-primary-container font-black uppercase text-xs tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
<Icon name="shopping_bag" className="text-base" /> Add to Pack
                        </button>
</div>

<div className="group relative bg-surface-container-lowest rounded-xl p-6 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] flex flex-col md:row-span-2">
<div className="relative flex-1 mb-6 overflow-hidden rounded-lg bg-surface-container-low min-h-[300px]">
<Image className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMACbW1foNU7KbE7adyvNt0R6AMSwXNJZ_w-eI-1jKKBrIloZ90KNGZnb_BaZKLUN0JN-VbC4ULISiG7Ip7g6-bKLWOJ81eprW2LT8Gxk-EoWwBz7Rw7L3bRqE_OZ96ImkhmBln1NdYQyAmEI46dcXLKivu-orGochdIAyY7yE57Dkur7hezlE7xHpCftjB11x0Pf-hptQXIzuiQSosxi2UyVVUTjeB2ZZlfXN63SQzXUgsNXqfpD19gOOmP0qCLM2eyruCDnplv8" alt="Durable rubber dog toy in the shape of a gear, resting on a textured concrete surface with a happy dog's chin in the corner" width={800} height={800}  />
<span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Indestructible</span>
</div>
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold font-headline text-on-surface group-hover:text-primary transition-colors leading-tight">The Unbreakable Gear Toy</h3>
<span className="text-xl font-black font-headline text-on-surface-variant">$19.99</span>
</div>
<p className="text-sm text-on-surface-variant mb-6 font-medium">Engineered for the most aggressive chewers. Natural heavy-duty rubber.</p>
<button className="w-full py-4 rounded-full bg-primary-container text-on-primary-container font-black uppercase text-xs tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
<Icon name="shopping_bag" className="text-base" /> Add to Pack
                            </button>
</div>
</div>

<div className="group relative bg-surface-container-lowest rounded-xl p-6 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] flex flex-col">
<div className="relative h-64 mb-6 overflow-hidden rounded-lg bg-surface-container-low">
<Image className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQVVS0vUC4XPJK6gt0Bc_p6cSsqM7dZf13y9An3UGimRX_ppnJV2tKqjEUF7FT3o6mpnFnoY1PhUFUgt7Dcxv9-6srqu8HSTkPVkAsChEGhVRCFcbRmiy8RkkHcGirBi6B1uN2GxzYIf70ZP58adBxN1-sj82ocwMHCvoy5RhcZkgMxtgszbd0yhdqEZ-_UTyxi0qJ2xEggEZY8Db1QkGRHhIn0Me3PW6JuBUD42C9n6RS-B9KbVjFxpYs6XuHAU_shJvaHj_VyWU" alt="Minimalist wooden treat puzzle for dogs, sleek Scandinavian design with hidden compartments" width={800} height={800}  />
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold font-headline text-on-surface group-hover:text-primary transition-colors leading-tight">Oslo Mind Games Puzzle</h3>
<span className="text-xl font-black font-headline text-on-surface-variant">$42.50</span>
</div>
<p className="text-sm text-on-surface-variant mb-4 font-medium">Mental stimulation meets premium Scandi-design.</p>
</div>
<button className="w-full py-4 rounded-full bg-primary-container text-on-primary-container font-black uppercase text-xs tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
<Icon name="shopping_bag" className="text-base" /> Add to Pack
                        </button>
</div>

<div className="group relative bg-surface-container-lowest rounded-xl p-6 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] flex flex-col">
<div className="relative h-64 mb-6 overflow-hidden rounded-lg bg-surface-container-low">
<Image className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKGF3avJ6eOUkaDPnrVCwd2h5BKJ6E_Us58Rexqun2yxUTaEp9Oby5lX1tePnpG57sZN06JcQ4CFhrRGEhHtQUwjsuhNQfha2MAMFUL8_X5RQDZc9oDbeUCBcLJmuPE71ybADsTbHen6ixYhfzBFwFUbOeZHB3jMLZ0ugd66bf2NtkOJ2K41F835xYmj_ipEMj-i5GM-TyIh_34FJ6qEijXGUiKAQ5BOaXPM9_h7d3GcD7NxoTAYyn2clYBLbj3xM61gQCbK71PIc" alt="Bag of artisan dog treats with organic labels, ingredients like sweet potato and chicken visible" width={800} height={800}  />
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold font-headline text-on-surface group-hover:text-primary transition-colors leading-tight">Sweet Potato Crunchies</h3>
<span className="text-xl font-black font-headline text-on-surface-variant">$12.00</span>
</div>
<p className="text-sm text-on-surface-variant mb-4 font-medium">Single-ingredient, air-dried goodness.</p>
</div>
<button className="w-full py-4 rounded-full bg-primary-container text-on-primary-container font-black uppercase text-xs tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
<Icon name="shopping_bag" className="text-base" /> Add to Pack
                        </button>
</div>

<div className="group relative bg-surface-container-lowest rounded-xl p-6 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] flex flex-col">
<div className="relative h-64 mb-6 overflow-hidden rounded-lg bg-surface-container-low">
<Image className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZuYhh-QPH6NMd5utRacSqDqvVG_Lk0r0xu6in3u7c7DVVG7SX95mchTu05AHGk-cQhc1lADyKQFUhiMNa3QNFugXHRQdQ7zTn8d2mBq3cP1CLGxX98qh_JBwY0912bd1SwiZ0WJvQyB_cn_QZdaCd2_TO_cJCh7gJ9BMZVNWPEa1_t8ufgIa0-c7B3sTKkRY4UvLwmCUsK-p5MQUT5EJQqBjrJVfWIBDE_73_akXDFVJvwHOikgDt826Gq-ConzUvUQbwyx9fV08" alt="Close up of a plush dog toy in a soft pastel color, extremely soft texture, artistic lighting" width={800} height={800}  />
<span className="absolute bottom-4 right-4 bg-on-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Sleepy Time</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold font-headline text-on-surface group-hover:text-primary transition-colors leading-tight">Cloud-Soft Snuggle Bear</h3>
<span className="text-xl font-black font-headline text-on-surface-variant">$22.00</span>
</div>
<p className="text-sm text-on-surface-variant mb-4 font-medium">Hypoallergenic plush for anxious puppies.</p>
</div>
<button className="w-full py-4 rounded-full bg-primary-container text-on-primary-container font-black uppercase text-xs tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
<Icon name="shopping_bag" className="text-base" /> Add to Pack
                        </button>
</div>
</div>

<div className="mt-20 flex justify-center items-center gap-4">
<button className="w-12 h-12 rounded-full flex items-center justify-center bg-surface-container-low text-on-surface transition-all hover:bg-primary-container hover:text-on-primary-container">
<Icon name="chevron_left" className="" />
</button>
<div className="flex gap-2">
<button className="w-12 h-12 rounded-full flex items-center justify-center bg-primary-container text-on-primary-container font-bold">1</button>
<button className="w-12 h-12 rounded-full flex items-center justify-center bg-surface-container-low text-on-surface font-bold hover:bg-surface-container-high">2</button>
<button className="w-12 h-12 rounded-full flex items-center justify-center bg-surface-container-low text-on-surface font-bold hover:bg-surface-container-high">3</button>
</div>
<button className="w-12 h-12 rounded-full flex items-center justify-center bg-surface-container-low text-on-surface transition-all hover:bg-primary-container hover:text-on-primary-container">
<Icon name="chevron_right" className="" />
</button>
</div>
</div>
</div>
</main>

<MobileNav />

<Footer />

        </>
    );
}
