export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-green-800">劉媽媽の草本茶</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-stone-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">首頁</a>
              <a href="/story" className="text-stone-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">產品故事</a>
              <a href="/products" className="text-stone-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">主要產品</a>
              <a href="/tips" className="text-stone-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">草本小撇步</a>
              <a href="/contact" className="text-stone-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">聯絡</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}