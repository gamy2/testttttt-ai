
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import Icon from '@/components/Icon';


export default function Home() {
    return (
        <>
            

<Header />
<main className="pt-24 overflow-hidden">

<section className="px-8 mb-24 relative">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-5 z-10">
<span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container text-[10px] font-bold uppercase tracking-widest mb-6 font-label">New Arrivals</span>
<h1 className="font-headline text-6xl lg:text-8xl font-extrabold tracking-tight leading-[0.9] text-on-surface mb-8">
                        The Joy of <br/><span className="text-primary">Curated</span> Play.
                    </h1>
<p className="text-body-lg text-secondary max-w-md mb-10 leading-relaxed">
                        Discover seasonal toys and premium nutritional food tailored for your best friend&apos;s specific needs. Professional quality, joyful spirit.
                    </p>
<div className="flex gap-4">
<button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary-container/20">
                            Shop Collections
                        </button>
<button className="bg-surface-container-high px-8 py-4 rounded-full font-bold text-secondary hover:scale-105 transition-all">
                            View Guides
                        </button>
</div>
</div>
<div className="lg:col-span-7 relative">
<div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative group">
<Image  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"   src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaKPmMsdVczTltcJmWp9Vl9V_FYn4sjn0F1-GaHqLCB28vv1xSm_XU_PODmjGmuzLLImNqvSdFn8qD8v0lfdA8UMkwwGlhwBphdqjzL-Caq7u-_RQQi89dsmzv848jPs5z_z8xD08mWbJumSyNNCg6nlgc4qrYxPMKqcH2Jn4jEZYQkK_lY5-5y50xyAqMX2Cl8GDHAMm7gJrzcZ6bHWlkhVWARFTRk1cTZI7ixNJxvxa5aEbnaLhLmbKoLF0OXP3eTBNDNp8db5Y" alt="Happy Golden Retriever" width={800} height={800}  />
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
</div>

<div className="absolute -bottom-12 -left-12 hidden xl:block bg-surface-container-lowest/80 backdrop-blur-xl p-8 rounded-xl shadow-2xl max-w-sm border-none">
<div className="flex gap-4 items-center mb-4">
<div className="bg-primary-container w-12 h-12 rounded-full flex items-center justify-center">
<Icon name="star" className="text-on-primary-container" />
</div>
<div>
<p className="font-headline font-bold text-lg">Top Rated Food</p>
<p className="text-secondary text-sm font-label">98% Satisfaction</p>
</div>
</div>
<p className="text-sm text-secondary italic">&quot;Barkley hasn&apos;t stopped wagging his tail since we switched to the harvest blend!&quot; — Sarah K.</p>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low py-32 px-8">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
<div>
<h2 className="font-headline text-4xl lg:text-5xl font-extrabold mb-4">Popular for Puppies</h2>
<p className="text-secondary max-w-xl">Curated essentials for the newest members of your pack. Built for growing bodies and active minds.</p>
</div>
<a className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform" href="#">
                        See All Puppy Gear <Icon name="arrow_forward" className="" />
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8">

<div className="md:col-span-2 lg:col-span-6 bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between group cursor-pointer">
<div className="mb-12 overflow-hidden rounded-lg">
<Image  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"   src="https://lh3.googleusercontent.com/aida-public/AB6AXuB94GQzbvLGTwYOGmsVt1wwlqRXWvSSisig1tZD3_DwBPKqg-5uUNfxYhX8Q6E8_-HiTahFcPet_53-l3wawOr4yG4on3IDikONQHPXSbpF5K2FAupRR26JHypSkUjGLdCRHio0nGFJSqNj9G5HgHw-VuSexKMkdY5p7cYlnyd7oX2wsaPGV-f690A8gAlbflGCvqoQ1fDGEDZHpc4zvZMpSVmeKsKNUBc_6Hfu55VX0KFhUxnJ0boA2QzAaxMv_EgzsgdJMabdiek" alt="Puppy Chew Toy" width={800} height={800}  />
</div>
<div>
<span className="text-tertiary font-bold text-[10px] uppercase tracking-widest font-label mb-2 block">Durable</span>
<h3 className="font-headline text-2xl font-bold mb-2">Tough-Flex Teething Ring</h3>
<div className="flex justify-between items-center">
<p className="text-primary font-bold text-xl">$24.00</p>
<button className="w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center hover:bg-primary-container transition-colors">
<Icon name="add" className="text-xl" />
</button>
</div>
</div>
</div>

<div className="md:col-span-2 lg:col-span-3 bg-surface-container-lowest rounded-xl p-6 flex flex-col group cursor-pointer">
<div className="flex-grow mb-6 overflow-hidden rounded-lg">
<Image  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"   src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2zsBkN2QikhPKa8poq0dNEd2P-3vH26B7sJnbbMewfRhIXAvdY7LPVuwjhrijSOosXifKtFuLLoP-6tESa5sMhOSq3dMLabg3GKBxYPEBRIY0TvbLnEAGfEga0LKsGfoXXJTUbZLXt-nIQ1awjcNo2A19Omh9b2Rlcz0CQR-4cQu1-ClPxdvov9Qtpc_JL5SYwypnr3P_bunSYmgdZxj0vZ-ROD3MSea91KMLNIez46WvD7zaBadAjaNsMVJk6dva8TeAhsgy2Mk" alt="Soft Harness" width={800} height={800}  />
</div>
<h3 className="font-headline font-bold text-lg mb-1">Cloud-Soft Puppy Harness</h3>
<p className="text-primary font-bold mb-4">$38.00</p>
<div className="flex items-center gap-1 text-amber-500">
<Icon name="star" className="text-sm filled-icon" />
<Icon name="star" className="text-sm filled-icon" />
<Icon name="star" className="text-sm filled-icon" />
<Icon name="star" className="text-sm filled-icon" />
<Icon name="star" className="text-sm filled-icon" />
</div>
</div>

<div className="md:col-span-2 lg:col-span-3 bg-surface-container-lowest rounded-xl p-6 flex flex-col group cursor-pointer">
<div className="flex-grow mb-6 overflow-hidden rounded-lg">
<Image  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"   src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3iIE6HPoKS6NDTjngSV9GOm5dA8eFLDgAIhuacgBl1xzHS6fSApuQfGXEBpvHc12gbzzl9gyJRUjiQqNt604jrioIZ-bYsYoSwPyohOA7IVg4JY1GxPyIrVGTyD58dHDTKxphGED7TLCQm7IavOIaXlVW4cS4j31dpX0X2ra_LuDp48bhfVfInUCen_abhB-UfuF6rd1n33dwGUFybTwaUC1FwoFKk0XEbTIOBAs98DpFMBIh3AiUNdQFc0mElLQoYldiHvACWeA" alt="Puppy Kibble" width={800} height={800}  />
</div>
<h3 className="font-headline font-bold text-lg mb-1">Growth-Plus Organic Blend</h3>
<p className="text-primary font-bold mb-4">$45.00</p>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed-variant text-[10px] font-bold font-label">Bestseller</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-8 overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 relative">
<div className="w-full aspect-square rounded-full bg-tertiary-fixed relative overflow-hidden flex items-center justify-center">
<Image  className="w-[120%] h-auto rotate-6 group-hover:rotate-0 transition-transform duration-1000"   src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC-h9GMewwSKl4C0fYbNeKASmE45LwimmHZwtYcBe2ccLONM_alEx0rUKuBfXt4LbtMV0URe7emSEOjev4vmZzgwifEK2t6U282sNr-sH74mfO9Fv41ABkZz47f9Rv6uE3HqBfzzVEjG4XwVBnnHcVumOkVWfjAHoTXWhlyQfZOgaF4jlNrmC_UFWRfcS7z8voIZPJm4JQPIelmckd1mZiGTzRge8AS8c1vHaV_gAQdI9fffijqKOhVQkvZZKQo5KZwDFKhK4Im6k" alt="Healthy Treats" width={800} height={800}  />
</div>

<div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container font-black text-xl shadow-lg">100% Organic</div>
</div>
<div className="lg:w-1/2">
<span className="text-tertiary font-bold tracking-widest uppercase text-xs mb-4 block font-label">Nutrition First</span>
<h2 className="font-headline text-5xl lg:text-7xl font-extrabold mb-8 leading-tight text-on-surface">Healthy Treats, <br/><span className="text-tertiary">Happier Tails.</span></h2>
<p className="text-body-lg text-secondary mb-12 leading-relaxed">
                        We believe treats should do more than just taste good. Our selection is curated with limited ingredients, no fillers, and real animal protein. Functional snacks for skin, coat, and cognitive health.
                    </p>
<div className="grid grid-cols-2 gap-8 mb-12">
<div className="flex flex-col gap-2">
<Icon name="eco" className="text-tertiary text-4xl" />
<h4 className="font-bold">Eco-Sourced</h4>
<p className="text-sm text-secondary">Sustainable farming and packaging practices.</p>
</div>
<div className="flex flex-col gap-2">
<Icon name="verified_user" className="text-tertiary text-4xl" />
<h4 className="font-bold">Vet Approved</h4>
<p className="text-sm text-secondary">Formula defaultChecked by leading canine specialists.</p>
</div>
</div>
<button className="bg-on-background text-surface px-10 py-5 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-xl">
                        Shop Healthy Treats
                    </button>
</div>
</div>
</section>

<section className="mx-8 mb-32 bg-primary-container rounded-xl p-12 lg:p-24 flex flex-col items-center text-center relative overflow-hidden">
<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="grid grid-cols-6 gap-8">
<Icon name="pets" className="text-9xl" />
<Icon name="skeleton" className="text-9xl" />
<Icon name="pets" className="text-9xl" />
<Icon name="skeleton" className="text-9xl" />
<Icon name="pets" className="text-9xl" />
<Icon name="skeleton" className="text-9xl" />
</div>
</div>
<h2 className="font-headline text-4xl lg:text-6xl font-extrabold text-on-primary-container mb-6 z-10">Join the Play Pack</h2>
<p className="text-on-primary-container/80 text-xl max-w-2xl mb-10 z-10">Get early access to seasonal drops and expert training guides delivered to your inbox.</p>
<form className="flex flex-col sm:flex-row gap-4 w-full max-w-lg z-10">
<input className="flex-grow px-8 py-5 rounded-full border-none focus:ring-2 focus:ring-on-primary-container bg-surface-container-lowest text-on-surface" placeholder="Your email address" type="email"/>
<button className="bg-on-primary-container text-primary-container font-bold px-10 py-5 rounded-full hover:scale-105 active:scale-95 transition-all" type="submit">
                    Subscribe
                </button>
</form>
</section>
</main>

<Footer />

<MobileNav />

        </>
    );
}
