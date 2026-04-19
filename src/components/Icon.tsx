import { 
    Search, ShoppingCart, User, Star, ArrowRight, Plus, Leaf, 
    ShieldCheck, PawPrint, Bone, Share2, Heart, Home, ShoppingBag, 
    ChevronLeft, ChevronRight, BarChart2, Globe 
} from 'lucide-react';

export default function Icon({ name, className = "" }: { name: string, className?: string }) {
    switch (name.trim()) {
        case 'search': return <Search className={className} />;
        case 'shopping_cart': return <ShoppingCart className={className} />;
        case 'person': return <User className={className} />;
        case 'star': return <Star className={className} />;
        case 'arrow_forward': return <ArrowRight className={className} />;
        case 'add': return <Plus className={className} />;
        case 'eco': return <Leaf className={className} />;
        case 'verified_user': return <ShieldCheck className={className} />;
        case 'pets': return <PawPrint className={className} />;
        case 'skeleton': return <Bone className={className} />;
        case 'share': return <Share2 className={className} />;
        case 'favorite': return <Heart className={className} />;
        case 'home': return <Home className={className} />;
        case 'shopping_bag': return <ShoppingBag className={className} />;
        case 'chevron_left': return <ChevronLeft className={className} />;
        case 'chevron_right': return <ChevronRight className={className} />;
        case 'social_leaderboard': return <BarChart2 className={className} />;
        case 'language': return <Globe className={className} />;
        default: return <Star className={className} />;
    }
}
