import temp from '../../assets/certificate.png';

function copyToClipboard(){
    
}

function DisplayCertificate() {

    const certData = {
        id: 'XYZABCD123456',
        image: temp,
        date: '25/02/2023',
        holder: 'Shivam Garg',
        type: 'Internship Certificate',
        program: 'Child Rights & Education',
        url: window.location.href,
        auth:'Sangeeta Kumari (Chairperson)',
        desc:'This is to certify that the ${holder} carried out the Project titled Child Rights & Education in supervision of Mr. Satyendra Narayan Rai in our Organization. It is further certified that he spent minimum of 34 hours on the Project and his contribution because of the Project undertaken has been remarkable.'
    }

  return (
    <>
      <h4 className='pt-5 lg:pt-10 px-5 lg:px-14 font-semibold'>
        Showing result for &quot;{certData.id}&quot;
      </h4>
      <hr className='mx-5 lg:mx-12 border-2' />
      <div className='lg:flex lg:flex-row lg:items-center'>
        <div className='w-full lg:w-1/2 p-5 lg:p-10'>
          <img
            src={certData.image}
            alt='ManWith Laptop'
            className='h-full w-full rounded-md object-cover drop-shadow-lg border border-gray-400'
          />
          <div className='flex mt-8 space-x-5 justify-center'>
            <a className='rounded-md bg-green-700 text-white px-5 py-2 block min-w-fit cursor-pointer'>
                <i className='fa-solid fa-file-pdf'></i> Download PDF
            </a>
            <a className='rounded-md bg-green-700 text-white px-5 py-2 block min-w-fit cursor-pointer'>
                <i className='fa-solid fa-file-image'></i> Save Image
            </a>
          </div>
        </div>
        <div className='w-full lg:w-1/2 px-5 lg:p-10 lg:mb-10'>
          <div className='my-5 lg:my-0 lg:px-10'>
            <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl'>
              {certData.holder}
            </h2>
            <p className='mt-4 max-w-xl text-base leading-relaxed'>
                <p><span className='font-semibold'>Type:</span> {certData.type}</p>
                <p><span className='font-semibold'>Program:</span> {certData.program}</p>
                <p><span className='font-semibold'>Date of Issue:</span> {certData.date}</p>
                <p className='text-justify'>{certData.desc}</p>
                <p><span className='font-semibold'>Authorised:</span> {certData.auth}</p>
            </p>
            <form action='#' method='POST' className='mt-8 max-w-xl'>
              <h4>Certificate Link</h4>
              <div className='flex flex-col sm:flex-row sm:items-center'>
                <div className='flex w-full max-w-sm items-center space-x-2'>
                  <input
                    className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 '
                    type='text'
                    value={certData.url}
                  />
                  <button
                    type='button'
                    className='rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black min-w-fit'
                  >
                    Copy Link
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayCertificate;
