import creditLogo from "../../assets/svg/ezVerify.svg";

function VerifyForm() {
  return (
    <>
    <div className="max-w-full px-2 py-10 lg:px-0">
      <div className="flex lg:flex-row lg:items-center lg:justify-between lg:space-x-10">
        <div className="w-fit text-white m-3 lg:my-4 lg:mx-7 p-8 bg-black/80 rounded-lg drop-shadow-lg">
          <p className="text-sm font-bold">
            Help Others ● Improve Yourself ● Build Society
          </p>
          <h2 className="mt-4 text-3xl font-bold">Certificate Verification</h2>
          <div className="mt-4">
            <p>Digitally verify the certificates issued through ezverify.</p>
            <p className="font-semibold lg:block hidden">
              Enter the Certificate Number and click verify.
            </p>
          </div>
          <div className="my-4 flex lg:hidden space-x-2 items-center">
            <a
              type="button"
              href="Pages/readqr/index.html"
              className="w-fit rounded-md bg-green-700 px-3 lg:px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-black/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <i className="fa-solid fa-qrcode"></i> Scan Certificate QR
            </a>
            <span>OR</span>
          </div>
          <div className="text-sm lg:text-lg font-bold mt-6">
            Enter Certificate Details:
          </div>
          <form method="get" action="">
            <div className="flex flex-col w-full max-w-md">
              <div className="flex w-full max-w-md space-x-2 mt-2 items-center">
                <label
                  htmlFor="certificateType"
                  className="text-sm font-semibold"
                >
                  CertificateType:
                </label>
                <select
                  className="text-black lg:max-w-full max-w-[100px] rounded-md px-3 py-1"
                  name="type"
                  id="certificateType"
                  required
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="Internship">
                    Internship/Award/Experience
                  </option>
                  <option value="Donation">Donation</option>
                </select>
              </div>
              <div className="mt-3 text-sm font-semibold">
                <label htmlFor="certificateNumber">Certificate Number:</label>
              </div>
              <div className="flex w-full max-w-md space-x-2 mt-2">
                <input
                  className="flex h-10 w-full rounded-md border-white border-2 bg-white/90 px-3 py-2 text-sm placeholder:text-black placeholder:font-normal focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold"
                  type="text"
                  placeholder="eg. CL2023-4548-884"
                  id="certificateNumber"
                  required
                />
                <button
                  type="submit"
                  className="w-fit rounded-md bg-white px-3 lg:px-5 py-2 text-sm font-bold text-black shadow-sm hover:bg-black/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Verify
                </button>
              </div>
            </div>
          </form>
          <p className="mt-2">
            <span className="text-sm">
              By submiting, you agree to our
              <a href="#" className="underline cursor-pointer">
                terms of service
              </a>
              and
              <a href="#" className="underline cursor-pointer">
                privacy policy
              </a>
              .
            </span>
          </p>
          <p className="mt-6">
            <span className="text-sm">Powered by</span>
            <img
              className="max-w-[100px] mt-[-3px] ml-[-10px]"
              src={creditLogo}
              alt=""
              srcSet=""
            />
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default VerifyForm;
