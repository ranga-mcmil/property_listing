import Link from "next/link";

export function Navbar() {

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:flex-row md:items-center">
        <div className="text-lg font-bold">
          <Link href="/">LOGO</Link>
        </div>
        <nav className="flex items-center space-x-6 md:space-x-6">
          <div className="relative group hidden md:block">
            <button className="text-gray-700">For Sale</button>
            <div className="absolute left-0 hidden mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Option 2
              </a>
            </div>
          </div>
          <div className="relative group hidden md:block">
            <button className="text-gray-700">To Rent</button>
            <div className="absolute left-0 hidden mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Option 2
              </a>
            </div>
          </div>
          <a href="#" className="text-gray-700 hidden md:block">
            New Developments
          </a>
          <a href="#" className="text-gray-700 hidden md:block">
            Showdays
          </a>
          <a href="#" className="text-gray-700 hidden md:block">
            Agencies
          </a>
          <a href="#" className="text-gray-700 hidden md:block">
            Blog
          </a>
          <div className="flex items-center space-x-4 md:hidden">
            <button className="text-gray-700">Login</button>
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700">
                <span>Login</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 hidden mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg group-hover:block">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Signup
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Login
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center space-x-4 hidden md:flex">
          <button className="text-gray-700">Login</button>
          <div className="relative group">
            <button className="flex items-center space-x-2 text-gray-700">
              <span>Login</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute right-0 hidden mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Signup
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    
);
}
