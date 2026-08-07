import { useState, useMemo } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, ShoppingBasket, ArrowRight, CheckCircle2, Search } from 'lucide-react';
import DemoLayout from './DemoLayout';

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  img: string;
  desc: string;
};

const PRODUCTS: Product[] = [
  { id: 'saree', name: 'Kanchipuram Silk Saree', price: 2499, category: 'Sarees', img: 'https://images.pexels.com/photos/10317113/pexels-photo-10317113.jpeg?auto=compress&cs=tinysrgb&h=600&w=600', desc: 'Handwoven pure silk with traditional zari border. A timeless piece for weddings and festivities.' },
  { id: 'kurta', name: 'Cotton Kurta', price: 1299, category: 'Menswear', img: 'https://images.pexels.com/photos/35508907/pexels-photo-35508907.jpeg?auto=compress&cs=tinysrgb&h=600&w=600', desc: 'Breathable hand-block cotton kurta with a relaxed fit. Perfect for everyday ethnic wear.' },
  { id: 'dress', name: 'Linen Wrap Dress', price: 1899, category: 'Dresses', img: 'https://images.pexels.com/photos/8484138/pexels-photo-8484138.jpeg?auto=compress&cs=tinysrgb&h=600&w=600', desc: 'Flowy linen wrap dress in earthy tones. Lightweight, breathable, and effortlessly elegant.' },
  { id: 'scarf', name: 'Wool Knit Scarf', price: 699, category: 'Accessories', img: 'https://images.pexels.com/photos/6630873/pexels-photo-6630873.jpeg?auto=compress&cs=tinysrgb&h=600&w=600', desc: 'Soft merino wool scarf, hand-finished edges. Warmth without the bulk.' },
  { id: 'wallet', name: 'Handmade Leather Wallet', price: 1499, category: 'Accessories', img: 'https://images.pexels.com/photos/4452396/pexels-photo-4452396.jpeg?auto=compress&cs=tinysrgb&h=600&w=600', desc: 'Full-grain leather wallet, hand-stitched. Ages beautifully with use.' },
  { id: 'saree2', name: 'Banarasi Silk Saree', price: 3299, category: 'Sarees', img: 'https://images.pexels.com/photos/33433875/pexels-photo-33433875.jpeg?auto=compress&cs=tinysrgb&h=600&w=600', desc: 'Brocade Banarasi silk with gold motifs. A heritage weave for special occasions.' },
];

const CATEGORIES = ['All', 'Sarees', 'Menswear', 'Dresses', 'Accessories'];

type CartItem = { product: Product; qty: number };

export default function EcommerceDemo() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [active, setActive] = useState<Product | null>(null);
  const [checkout, setCheckout] = useState<'idle' | 'form' | 'done'>('idle');

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = category === 'All' || p.category === category;
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [category, search]);

  const cartCount = cart.reduce((n, i) => n + i.qty, 0);
  const cartTotal = cart.reduce((n, i) => n + i.qty * i.product.price, 0);

  const addToCart = (product: Product, qty = 1) => {
    setCart((c) => {
      const existing = c.find((i) => i.product.id === product.id);
      if (existing) return c.map((i) => (i.product.id === product.id ? { ...i, qty: i.qty + qty } : i));
      return [...c, { product, qty }];
    });
    setActive(null);
  };

  const updateQty = (id: string, delta: number) => {
    setCart((c) =>
      c
        .map((i) => (i.product.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const removeItem = (id: string) => setCart((c) => c.filter((i) => i.product.id !== id));

  return (
    <DemoLayout packageId="ecommerce" packageName="E-Commerce / Catalog" accent="#e879f9">
      {/* Storefront header */}
      <header className="border-b border-white/10 bg-ink-900/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-fuchsia-400" aria-hidden="true" />
            <span className="font-display text-base font-bold text-white">Loom &amp; Lace</span>
          </div>
          <div className="relative hidden flex-1 max-w-xs sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-lg border border-white/10 bg-ink-950 py-2 pl-9 pr-3 text-sm text-white placeholder-slate-500 focus:border-fuchsia-400/50 focus:outline-none"
            />
          </div>
          <button
            onClick={() => { setCartOpen(true); setCheckout('idle'); }}
            className="relative inline-flex items-center gap-2 rounded-lg bg-fuchsia-500/15 px-3.5 py-2 text-sm font-semibold text-fuchsia-300 transition-colors hover:bg-fuchsia-500/25"
          >
            <ShoppingBasket className="h-4 w-4" aria-hidden="true" />
            Cart
            {cartCount > 0 && (
              <span className="ml-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-fuchsia-500 px-1 text-xs font-bold text-fuchsia-950">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero strip */}
      <section className="border-b border-white/10 bg-gradient-to-r from-fuchsia-900/30 via-ink-950 to-purple-900/20">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Handpicked boutique fashion
          </h1>
          <p className="mt-2 max-w-lg text-sm text-fuchsia-100/70">
            Curated sarees, kurtas, and accessories from Indian artisans. Free shipping over ₹2,000.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                category === c
                  ? 'bg-fuchsia-500 text-fuchsia-950'
                  : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-850/80 text-left transition-colors hover:border-fuchsia-400/40"
            >
              <div className="aspect-square overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-3">
                <span className="text-[11px] uppercase tracking-wider text-fuchsia-400/80">{p.category}</span>
                <h3 className="mt-0.5 text-sm font-semibold text-white">{p.name}</h3>
                <p className="mt-1 font-display text-base font-extrabold text-fuchsia-400">₹{p.price.toLocaleString('en-IN')}</p>
              </div>
            </button>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-12 text-center text-sm text-slate-500">No products match your search.</p>
        )}
      </section>

      {/* Product detail modal */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" onClick={() => setActive(null)} aria-hidden="true" />
          <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-ink-850 shadow-card">
            <button onClick={() => setActive(null)} className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-ink-950/60 text-slate-300 hover:text-white" aria-label="Close">
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="grid sm:grid-cols-2">
              <div className="aspect-square overflow-hidden sm:aspect-auto">
                <img src={active.img} alt={active.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-fuchsia-400/80">{active.category}</span>
                <h2 className="mt-1 font-display text-xl font-bold text-white">{active.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{active.desc}</p>
                <p className="mt-4 font-display text-2xl font-extrabold text-fuchsia-400">₹{active.price.toLocaleString('en-IN')}</p>
                <button
                  onClick={() => addToCart(active)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-fuchsia-950 transition-colors hover:bg-fuchsia-400"
                >
                  Add to Cart <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm" onClick={() => setCartOpen(false)} aria-hidden="true" />
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-ink-900 shadow-card">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <h2 className="font-display text-lg font-bold text-white">Your Cart</h2>
              <button onClick={() => setCartOpen(false)} className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 hover:text-white" aria-label="Close cart">
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {checkout === 'done' ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <CheckCircle2 className="h-14 w-14 text-fuchsia-400" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold text-white">Order Placed!</h3>
                <p className="mt-2 text-sm text-slate-400">Thank you for your purchase. A confirmation has been sent to your email.</p>
                <button
                  onClick={() => { setCart([]); setCartOpen(false); setCheckout('idle'); }}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Continue Shopping
                </button>
              </div>
            ) : checkout === 'form' ? (
              <CheckoutForm total={cartTotal} onBack={() => setCheckout('idle')} onPlace={() => setCheckout('done')} />
            ) : cart.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <ShoppingBasket className="h-12 w-12 text-slate-600" aria-hidden="true" />
                <p className="mt-4 text-sm text-slate-400">Your cart is empty.</p>
                <button onClick={() => setCartOpen(false)} className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  Browse Products
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4">
                  <ul className="space-y-3">
                    {cart.map((item) => (
                      <li key={item.product.id} className="flex gap-3 rounded-xl border border-white/10 bg-ink-850/80 p-3">
                        <img src={item.product.img} alt={item.product.name} className="h-16 w-16 shrink-0 rounded-lg object-cover" />
                        <div className="flex flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-sm font-semibold text-white">{item.product.name}</h3>
                            <button onClick={() => removeItem(item.product.id)} className="text-slate-500 hover:text-red-400" aria-label="Remove item">
                              <Trash2 className="h-4 w-4" aria-hidden="true" />
                            </button>
                          </div>
                          <p className="text-sm font-semibold text-fuchsia-400">₹{(item.product.price * item.qty).toLocaleString('en-IN')}</p>
                          <div className="mt-auto flex items-center gap-2">
                            <button onClick={() => updateQty(item.product.id, -1)} className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-slate-300 hover:bg-white/10" aria-label="Decrease quantity">
                              <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                            </button>
                            <span className="w-6 text-center text-sm text-white">{item.qty}</span>
                            <button onClick={() => updateQty(item.product.id, 1)} className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-slate-300 hover:bg-white/10" aria-label="Increase quantity">
                              <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-white/10 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Subtotal</span>
                    <span className="font-display text-xl font-extrabold text-white">₹{cartTotal.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">Shipping calculated at checkout.</p>
                  <button
                    onClick={() => setCheckout('form')}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-fuchsia-950 transition-colors hover:bg-fuchsia-400"
                  >
                    Proceed to Checkout <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </DemoLayout>
  );
}

function CheckoutForm({ total, onBack, onPlace }: { total: number; onBack: () => void; onPlace: () => void }) {
  return (
    <form
      className="flex flex-1 flex-col"
      onSubmit={(e) => { e.preventDefault(); onPlace(); }}
    >
      <div className="flex-1 overflow-y-auto px-5 py-4">
        <h3 className="font-display text-base font-bold text-white">Shipping &amp; Payment</h3>
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-200">Full Name</label>
            <input required type="text" placeholder="e.g. Ananya Iyer" className="mt-1.5 w-full rounded-xl border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-fuchsia-400/50 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-200">Address</label>
            <input required type="text" placeholder="House no, street, city" className="mt-1.5 w-full rounded-xl border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-fuchsia-400/50 focus:outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-200">PIN Code</label>
              <input required type="text" placeholder="560001" className="mt-1.5 w-full rounded-xl border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-fuchsia-400/50 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-200">Phone</label>
              <input required type="tel" placeholder="+91 98xxx xxxxx" className="mt-1.5 w-full rounded-xl border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-fuchsia-400/50 focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-200">Payment Method</label>
            <div className="mt-1.5 grid grid-cols-3 gap-2">
              {['UPI', 'Card', 'Net Banking'].map((m, i) => (
                <label key={m} className="flex cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-ink-950 px-3 py-2.5 text-sm text-slate-300 has-[:checked]:border-fuchsia-400/50 has-[:checked]:bg-fuchsia-500/10 has-[:checked]:text-fuchsia-300">
                  <input type="radio" name="payment" defaultChecked={i === 0} className="sr-only" />
                  {m}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">Total Payable</span>
          <span className="font-display text-xl font-extrabold text-white">₹{total.toLocaleString('en-IN')}</span>
        </div>
        <div className="mt-4 flex gap-3">
          <button type="button" onClick={onBack} className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
            Back
          </button>
          <button type="submit" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-fuchsia-950 transition-colors hover:bg-fuchsia-400">
            Place Order
          </button>
        </div>
      </div>
    </form>
  );
}
