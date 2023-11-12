import headerLogo from '../../assets/svg/ezVerify-white.svg'

function Header() {
  return (
    <div
      className="relative w-full bg-gradient-to-r from-[#4700A2] to-[#0045A2] text-white drop-shadow-md"
    >
      <div
        className="mx-auto flex max-w-full items-center justify-between px-4 py-2 sm:px-6 lg:px-8"
      >
        <div className="inline-flex items-center space-x-2.5 min-w-fit py-2">
          <span className="w-fit">
            <img src={headerLogo} className="w-10" />
          </span>
          <span className="font-bold">
            <div className="block min-w-fit">Satyalok Certificate</div>
            <div className="text-sm font-semibold">ezverify v4</div>
          </span>
        </div>
        <div className="lg:block">
          <a
            href="/Pages/admin/"
            className="rounded-md bg-white px-3 py-1.5 text-sm font-bold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <i className="fa-solid fa-user-tie"></i> Login
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
