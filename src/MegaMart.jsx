import { useState } from "react";
import {
  Search,
  User,
  ShoppingCart,
  MapPin,
  Truck,
  BadgePercent,
  Menu,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  SlidersHorizontal,
} from "lucide-react";

import smartphonesS22Ultra1 from "./assets/s22-ultra-1.png";
import smartphonesM13 from "./assets/m13.png";
import smartphonesM33 from "./assets/m33.png";
import smartphonesM53 from "./assets/m53.png";
import smartphonesS22Ultra2 from "./assets/s22-ultra-2.png";
import categoriesMobile from "./assets/s22-ultra-1.png";
import categoriesCosmetics from "./assets/cosmetics.png";
import categoriesElectronics from "./assets/electronics.png";
import categoriesFurniture from "./assets/furniture.png";
import categoriesWatches from "./assets/watches.png";
import categoriesDecor from "./assets/decor.png";
import categoriesAccessories from "./assets/accessories.png";
import brandsIphone from "./assets/iphone.png";
import brandsRealme from "./assets/realme.png";
import brandsXiaomi from "./assets/xiaomi.png";
import essentialsDailyEssentials from "./assets/daily-essentials.png";
import essentialsVegetables from "./assets/vegetables.png";
import essentialsFruits from "./assets/fruits.png";
import essentialsStrawberry from "./assets/strawberry.png";
import essentialsMango from "./assets/mango.png";
import essentialsCherry from "./assets/cherry.png";
import appStore from "./assets/app-store.png";
import googlePlay from "./assets/google-play.png";
import heroWatch from "./assets/hero-watch.png";

const topLinks = [
  { icon: MapPin, label: "Deliver to 423651" },
  { icon: Truck, label: "Track your order" },
  { icon: BadgePercent, label: "All Offers" },
];

const navItems = [
  "Groceries",
  "Premium Fruits",
  "Home & Kitchen",
  "Fashion",
  "Electronics",
  "Beauty",
  "Home Improvement",
  "Sports, Toys & Luggage",
];

const slides = [0, 1, 2, 3, 4, 5, 6];

const smartphones = [
  {
    name: "Galaxy S22 Ultra",
    price: 32999,
    mrp: 74999,
    img: smartphonesS22Ultra1,
  },
  {
    name: "Galaxy M13 (4GB | 64 GB )",
    price: 10499,
    mrp: 14999,
    img: smartphonesM13,
  },
  {
    name: "Galaxy M33 (4GB | 64 GB )",
    price: 16999,
    mrp: 24999,
    img: smartphonesM33,
  },
  {
    name: "Galaxy M53 (4GB | 64 GB )",
    price: 31999,
    mrp: 40999,
    img: smartphonesM53,
  },
  {
    name: "Galaxy S22 Ultra",
    price: 67999,
    mrp: 85999,
    img: smartphonesS22Ultra2,
  },
];

const categories = [
  { name: "Mobile", img: categoriesMobile },
  { name: "Cosmetics", img: categoriesCosmetics },
  { name: "Electronics", img: categoriesElectronics },
  { name: "Furniture", img: categoriesFurniture },
  { name: "Watches", img: categoriesWatches },
  { name: "Decor", img: categoriesDecor },
  { name: "Accessories", img: categoriesAccessories },
];

const brands = [
  {
    tag: "IPHONE",
    name: "",
    bg: "bg-neutral-800",
    text: "text-white",
    chip: "bg-neutral-600 text-neutral-200",
    img: brandsIphone,
  },
  {
    tag: "REALME",
    name: "realme",
    bg: "bg-yellow-100",
    text: "text-neutral-800",
    chip: "bg-yellow-300 text-neutral-700",
    img: brandsRealme,
  },
  {
    tag: "XIAOMI",
    name: "mi",
    bg: "bg-orange-100",
    text: "text-neutral-800",
    chip: "bg-orange-200 text-neutral-600",
    img: brandsXiaomi,
  },
];

const essentials = [
  { name: "Daily Essentials", img: essentialsDailyEssentials },
  { name: "Vegitables", img: essentialsVegetables },
  { name: "Fruits", img: essentialsFruits },
  { name: "Strowberry", img: essentialsStrawberry },
  { name: "Mango", img: essentialsMango },
  { name: "Cherry", img: essentialsCherry },
];

const popularCategories = [
  "Staples",
  "Beverages",
  "Personal Care",
  "Home Care",
  "Baby Care",
  "Vegetables & Fruits",
  "Snacks & Foods",
  "Dairy & Bakery",
];

const customerServices = [
  "About Us",
  "Terms & Conditions",
  "FAQ",
  "Privacy Policy",
  "E-waste Policy",
  "Cancellation & Return Policy",
];

const contacts = [
  { icon: MessageCircle, label: "Whats App", value: "+1 202-918-2132" },
  { icon: Phone, label: "Call Us", value: "+1 202-918-2132" },
];

const storeBadges = [
  { name: "App Store", img: appStore },
  { name: "Google Play", img: googlePlay },
];

const inr = (n) => "₹" + n.toLocaleString("en-IN");

/* ---------- REUSABLE SECTION HEADING ---------- */
function SectionHeading({ plain, accent }) {
  return (
    <div className="flex items-end justify-between border-b border-gray-200">
      <h2 className="-mb-px border-b-2 border-[#0b8fd1] pb-3 text-lg font-medium text-gray-700 sm:text-2xl">
        {plain} <span className="text-[#0b8fd1]">{accent}</span>
      </h2>
      <button className="mb-3 flex items-center gap-1 text-sm text-gray-700 hover:text-[#0b8fd1]">
        View All <ChevronRight size={16} className="text-[#0b8fd1]" />
      </button>
    </div>
  );
}

export default function MegaMart() {
  const [activeNav, setActiveNav] = useState(0);
  const [slide, setSlide] = useState(0);
  const [activeCat, setActiveCat] = useState(0);

  const prev = () => setSlide((s) => (s - 1 + slides.length) % slides.length);
  const next = () => setSlide((s) => (s + 1) % slides.length);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <div className="bg-gray-50 text-xs text-gray-500">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
          <p className="hidden sm:block">Welcome to worldwide Megamart!</p>
          <ul className="flex w-full justify-between gap-4 sm:w-auto sm:justify-end">
            {topLinks.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-1.5 sm:border-l sm:pl-4 first:sm:border-0"
              >
                <Icon size={14} className="text-[#0b8fd1]" />
                <span className="whitespace-nowrap">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <header className="border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-4 sm:px-6 lg:flex-nowrap lg:justify-between">
          <div className="flex items-center gap-3">
            <button
              className="rounded-lg bg-sky-50 p-3 text-[#0b8fd1]"
              aria-label="Menu"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-2xl font-bold text-[#0b8fd1] sm:text-3xl">
              MegaMart
            </h1>
          </div>

          <div className="order-3 flex w-full items-center gap-2 rounded-lg bg-sky-50 px-4 py-3 lg:order-none lg:w-[42%]">
            <Search size={18} className="text-[#0b8fd1]" />
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              placeholder="Search essentials, groceries and more..."
            />
            <SlidersHorizontal size={18} className="text-[#0b8fd1]" />
          </div>

          <div className="ml-auto flex items-center gap-4 text-sm font-medium lg:ml-0">
            <button className="flex items-center gap-2">
              <User size={18} className="text-[#0b8fd1]" />
              <span className="hidden sm:inline">Sign Up/Sign In</span>
            </button>
            <span className="hidden h-5 w-px bg-gray-300 sm:block" />
            <button className="flex items-center gap-2">
              <ShoppingCart size={18} className="text-[#0b8fd1]" />
              <span className="hidden sm:inline">Cart</span>
            </button>
          </div>
        </div>
      </header>

      <nav className="mx-auto max-w-7xl overflow-x-auto px-4 py-4 sm:px-6">
        <ul className="flex min-w-max gap-3 lg:min-w-0 lg:justify-between">
          {navItems.map((item, i) => (
            <li key={item}>
              <button
                onClick={() => setActiveNav(i)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition ${
                  activeNav === i
                    ? "bg-[#0b8fd1] text-white"
                    : "bg-sky-50 text-gray-700 hover:bg-sky-100"
                }`}
              >
                {item} <ChevronDown size={14} />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="mx-auto max-w-7xl space-y-12 px-4 pb-16 sm:space-y-16 sm:px-6">
        <section className="relative">
          <div className="flex min-h-[220px] items-center justify-between overflow-hidden rounded-2xl bg-[#1d2147] px-6 py-8 text-white sm:min-h-[320px] sm:px-12 lg:min-h-[400px] lg:px-20">
            <div>
              <p className="text-base sm:text-2xl lg:text-3xl">
                Best Deal Online on smart watches
              </p>
              <h2 className="mt-2 text-3xl font-bold sm:text-5xl lg:text-6xl">
                SMART WEARABLE.
              </h2>
              <p className="mt-2 text-lg sm:text-2xl">UP to 80% OFF</p>
              <ul className="mt-6 flex gap-2 sm:mt-10">
                {slides.map((s) => (
                  <li
                    key={s}
                    className={`h-2 rounded-full transition-all ${slide === s ? "w-8 bg-white" : "w-2 bg-white/60"}`}
                  />
                ))}
              </ul>
            </div>
            <img
              src={heroWatch}
              alt="Smart watch"
              className="h-32 object-contain sm:h-60 lg:h-80"
            />
          </div>

          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute -left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 text-[#0b8fd1] shadow-md sm:-left-5 sm:p-5"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute -right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 text-[#0b8fd1] shadow-md sm:-right-5 sm:p-5"
          >
            <ChevronRight size={20} />
          </button>
        </section>

        <section>
          <SectionHeading plain="Grab the best deal on" accent="Smartphones" />
          <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {smartphones.map((p, i) => (
              <li
                key={i}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:border-[#0b8fd1] hover:shadow-lg"
              >
                <span className="absolute right-0 top-0 rounded-bl-lg bg-[#0b8fd1] px-2 py-1.5 text-center text-[11px] font-medium leading-tight text-white">
                  56%
                  <br />
                  OFF
                </span>
                <div className="flex h-36 items-center justify-center bg-gray-50 p-4 sm:h-44">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-full object-contain"
                  />
                </div>
                <div className="p-3">
                  <p className="truncate text-sm font-medium">{p.name}</p>
                  <p className="mt-1 text-sm font-semibold">
                    {inr(p.price)}{" "}
                    <span className="ml-1 font-normal text-gray-400 line-through">
                      {inr(p.mrp)}
                    </span>
                  </p>
                  <p className="mt-2 border-t border-gray-200 pt-2 text-sm text-green-600">
                    Save - {inr(p.mrp - p.price)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading plain="Shop From" accent="Top Categories" />
          <ul className="mt-6 flex gap-5 overflow-x-auto pb-2 lg:justify-between">
            {categories.map((c, i) => (
              <li key={c.name} className="shrink-0 text-center">
                <button
                  onClick={() => setActiveCat(i)}
                  className="flex flex-col items-center gap-3"
                >
                  <span
                    className={`flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gray-100 p-4 sm:h-28 sm:w-28 ${
                      activeCat === i
                        ? "ring-2 ring-[#0b8fd1] ring-offset-2"
                        : ""
                    }`}
                  >
                    <img
                      src={c.img}
                      alt={c.name}
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <span className="text-sm">{c.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading plain="Top" accent="Electronics Brands" />
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {brands.map((b) => (
              <li
                key={b.tag}
                className={`flex items-center justify-between overflow-hidden rounded-xl p-5 sm:p-6 ${b.bg} ${b.text}`}
              >
                <div className="space-y-3">
                  <span
                    className={`inline-block rounded px-3 py-1 text-xs tracking-widest ${b.chip}`}
                  >
                    {b.tag}
                  </span>
                  <p className="text-lg font-semibold">{b.name || "\u00A0"}</p>
                  <p className="text-xl font-medium sm:text-2xl">
                    UP to 80% OFF
                  </p>
                </div>
                <img
                  src={b.img}
                  alt={b.tag}
                  className="h-32 object-contain sm:h-40"
                />
              </li>
            ))}
          </ul>
          <ul className="mt-5 flex justify-center gap-2">
            {[0, 1, 2, 3, 4, 5, 6].map((d) => (
              <li
                key={d}
                className={`h-1.5 rounded-full ${d === 0 ? "w-5 bg-[#0b8fd1]" : "w-1.5 bg-gray-300"}`}
              />
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading plain="Daily" accent="Essentials" />
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {essentials.map((e, i) => (
              <li key={e.name} className="text-center">
                <div
                  className={`flex h-36 items-center justify-center rounded-lg bg-gray-50 p-4 ${i === 0 ? "border border-[#0b8fd1]" : ""}`}
                >
                  <img
                    src={e.img}
                    alt={e.name}
                    className="h-full object-contain"
                  />
                </div>
                <p className="mt-3 text-sm text-gray-500">{e.name}</p>
                <p className="font-medium">UP to 50% OFF</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="relative overflow-hidden bg-[#0b8fd1] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">MegaMart</h2>
            <div>
              <h3 className="mb-3 text-lg font-medium">Contact Us</h3>
              <ul className="space-y-3">
                {contacts.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3 text-sm">
                    <Icon size={22} />
                    <div>
                      <p>{label}</p>
                      <p>{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium">Download App</h3>
              <div className="flex flex-wrap gap-3">
                {storeBadges.map((b) => (
                  <a key={b.name} href="#">
                    <img src={b.img} alt={b.name} className="h-12" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 inline-block border-b-2 border-white pb-2 text-lg font-medium">
              Most Popular Categories
            </h3>
            <ul className="space-y-3 text-sm">
              {popularCategories.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-white" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 inline-block border-b-2 border-white pb-2 text-lg font-medium">
              Customer Services
            </h3>
            <ul className="space-y-3 text-sm">
              {customerServices.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-white" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="border-t border-white/20 py-6 text-center text-sm">
          © 2022 All rights reserved. Reliance Retail Ltd.
        </p>
      </footer>
    </div>
  );
}
