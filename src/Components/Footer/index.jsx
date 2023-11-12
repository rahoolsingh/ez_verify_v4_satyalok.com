import footerLogo from '../../assets/svg/sat-ezVerify.svg'

function Footer() {
  return (
    <div className="relative overflow-hidden py-10 bg-gradient-to-r from-[#4700A2] to-[#0045A2] text-white">
        <div className="mx-auto flex flex-col items-start space-x-8 md:flex-row">
          <div className="w-full lg:px-4">
            <img className="max-w-[100px] lg:max-w-[250px] lg:m-0 m-auto" src={footerLogo} alt="" srcSet="" />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-full lg:grid-cols-3">
            <div className="mb-8 lg:mb-5">
                <p className="mb-6 text-lg font-semibold text-white ">Explore More</p>
                <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
                  <li><a href="#" className="hover:underline cursor-pointer">Internships</a></li>
                  <li><a href="#" className="hover:underline cursor-pointer">About us</a></li>
                  <li><a href="#" className="hover:underline cursor-pointer">Our Team</a></li>
                  <li><a href="#" className="hover:underline cursor-pointer">Our Vision</a></li>
                  <li><a href="#" className="hover:underline cursor-pointer">Contact</a></li>
                </ul>
              </div>
              <div className="mb-8 lg:mb-5">
                <p className="mb-6 text-lg font-semibold text-white ">Social Media</p>
                <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
                  <li><a href="#" className="hover:underline cursor-pointer">Facebook</a></li>
                  <li><a href="#" className="hover:underline cursor-pointer">Instagram</a></li>
                  <li><a href="#" className="hover:underline cursor-pointer">Linkedin</a></li>
                  <li><a href="#" className="hover:underline cursor-pointer">Twitter</a></li>
                </ul>
              </div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-white "><i className="fa-solid fa-headset"></i> Help Centre</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
                <li><a href="#" className="hover:underline cursor-pointer">ezVerify Support</a></li>
                <li><a href="#" className="hover:underline cursor-pointer">WhatsApp Chat</a></li>
                <li><a href="#" className="hover:underline cursor-pointer">Report Issue</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
          <div className="mt-4 md:mt-0">
            <p className="text-sm font-medium text-white">
              © 2023 Secure Wonders. All rights reserved.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Footer
