import React from 'react'

function PlansAndPricing() {
  return (
    <>
      <section>
        <div className='m-10 lg:m-24'>
          <h4 className='font-extrabold text-2xl text-[#4d4d4d] inline-block border-b-2 border-[#4d4d4d]'>
            Plans and Pricing
          </h4>

          <p className='my-10 max-w-xl text-xl'>
            A cloud-based solution equipped with advanced features like patch
            management, mobile device support, antivirus protection, and native
            device encryption to safeguard physical workstations from various
            cyber-attacks such as data breaches, ransomware, and phishing.
          </p>

          <div>
            <div className='grid gap-1 grid-cols-2 lg:grid-cols-4'>
              {/* <!-- Plan --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-extrabold py-3 px-5 bg-[#cccccc] rounded-tl-lg'>
                  Plan
                </div>
                <div className='py-3 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <p className='text-sm text-[#4d4d4d] text-center max-w-xs'>
                    Bitdefender Gravityzone Business Security
                  </p>
                </div>
              </div>

              {/* <!-- Features --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center py-3 px-5 bg-[#cccccc] text-lg font-extrabold text-[#4d4d4d]'>
                  Features
                </div>
                <div className='flex justify-center items-center py-[14px] px-5 border-2'>
                  <p className='text-center text-[#4d4d4d] text-sm max-w-xs'>
                    Complete data protection. Advanced threat defense,
                    Multi-layer ransomware protection, Anti-phising, Social
                    protection
                  </p>
                </div>
              </div>

              {/* <!-- Pricing --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-extrabold py-3 px-5 bg-[#cccccc]'>
                  Pricing
                </div>
                <div className='py-3 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <p className='text-lg font-bold text-[#4d4d4d] text-center max-w-xs'>
                    NPR 1250
                  </p>
                </div>
              </div>

              {/* <!-- cart --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-[26px] px-5 bg-[#cccccc] rounded-tr-lg'></div>
                <div className='py-4 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <div className='flex items-center space-x-6'>
                    <div className='flex flex-col items-center space-y-5'>
                      <img src='./icons/cart.png' className='w-8 h-8' alt='' />
                      <p className='text-[#0000cc]'>Add to Cart</p>
                    </div>
                    <div className='flex flex-col items-center space-y-5'>
                      <img
                        src='./icons/telephone.png'
                        className='w-6 h-6'
                        alt=''
                      />
                      <p className='text-[#4d4d4d]'>Contact Sales</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Plan --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-3 px-5 bg-[#cccccc] lg:hidden'>
                  Plan
                </div>
                <div className='py-3 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <p className='text-sm text-[#4d4d4d] text-center max-w-xs'>
                    Bitdefender Antivirus Plus
                    <br />
                    (Windows; 1 device; 1 Year)
                  </p>
                </div>
              </div>

              {/* <!-- Features --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center py-3 px-5 bg-[#cccccc] text-lg font-bold text-[#4d4d4d] lg:hidden'>
                  Features
                </div>
                <div className='flex justify-center items-center py-[14px] px-5 border-2'>
                  <p className='text-center text-[#4d4d4d] text-sm max-w-xs'>
                    Complete data protection. Advanced threat defense,
                    Multi-layer ransomware protection, Anti-phising, Social
                    protection
                  </p>
                </div>
              </div>

              {/* <!-- Pricing --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-3 px-5 bg-[#cccccc] lg:hidden'>
                  Pricing
                </div>
                <div className='py-3 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <p className='text-lg font-bold text-[#4d4d4d] text-center max-w-xs'>
                    NPR 500
                  </p>
                </div>
              </div>

              {/* <!-- cart --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-[26px] px-5 bg-[#cccccc] lg:hidden'></div>
                <div className='py-4 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <div className='flex items-center space-x-6'>
                    <div className='flex flex-col items-center space-y-5'>
                      <img src='./icons/cart.png' className='w-8 h-8' alt='' />
                      <p className='text-[#0000cc]'>Add to Cart</p>
                    </div>
                    <div className='flex flex-col items-center space-y-5'>
                      <img
                        src='./icons/telephone.png'
                        className='w-6 h-6'
                        alt=''
                      />
                      <p className='text-[#4d4d4d]'>Contact Sales</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Plan --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-3 px-5 bg-[#cccccc] lg:hidden'>
                  Plan
                </div>
                <div className='py-3 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <p className='text-sm text-[#4d4d4d] text-center max-w-xs'>
                    Bitdefender Internet Security
                    <br />
                    (Windows; 1 device; 1 Year)
                  </p>
                </div>
              </div>

              {/* <!-- Features --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center py-3 px-5 bg-[#cccccc] text-lg font-bold text-[#4d4d4d] lg:hidden'>
                  Features
                </div>
                <div className='flex justify-center items-center py-[14px] px-5 border-2'>
                  <p className='text-center text-[#4d4d4d] text-sm max-w-xs'>
                    Complete data protection. Advanced threat defense,
                    Multi-layer ransomware protection, Anti-phising, Social
                    protection
                  </p>
                </div>
              </div>

              {/* <!-- Pricing --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-3 px-5 bg-[#cccccc] lg:hidden'>
                  Pricing
                </div>
                <div className='py-3 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <p className='text-lg font-bold text-[#4d4d4d] text-center max-w-xs'>
                    NPR 600
                  </p>
                </div>
              </div>

              {/* <!-- cart --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-[26px] px-5 bg-[#cccccc] lg:hidden'></div>
                <div className='py-4 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <div className='flex items-center space-x-6'>
                    <div className='flex flex-col items-center space-y-5'>
                      <img src='./icons/cart.png' className='w-8 h-8' alt='' />
                      <p className='text-[#0000cc]'>Add to Cart</p>
                    </div>
                    <div className='flex flex-col items-center space-y-5'>
                      <img
                        src='./icons/telephone.png'
                        className='w-6 h-6'
                        alt=''
                      />
                      <p className='text-[#4d4d4d]'>Contact Sales</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Plan --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-3 px-5 bg-[#cccccc] lg:hidden'>
                  Plan
                </div>
                <div className='py-3 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <p className='text-sm text-[#4d4d4d] text-center max-w-xs'>
                    Bitdefender Total Security
                    <br />
                    (Mac, Windows, iOS, Android, 5 devices, 1 Year single user)
                  </p>
                </div>
              </div>

              {/* <!-- Features --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center py-3 px-5 bg-[#cccccc] text-lg font-bold text-[#4d4d4d] lg:hidden'>
                  Features
                </div>
                <div className='flex justify-center items-center py-[14px] px-5 border-2'>
                  <p className='text-center text-[#4d4d4d] text-sm max-w-xs'>
                    Complete data protection. Advanced threat defense,
                    Multi-layer ransomware protection, Anti-phising, Social
                    protection
                  </p>
                </div>
              </div>

              {/* <!-- Pricing --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-3 px-5 bg-[#cccccc] lg:hidden'>
                  Pricing
                </div>
                <div className='py-3 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <p className='text-lg font-bold text-[#4d4d4d] text-center max-w-xs'>
                    NPR 2000
                  </p>
                </div>
              </div>

              {/* <!-- cart --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-[26px] px-5 bg-[#cccccc] lg:hidden'></div>
                <div className='py-4 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <div className='flex items-center space-x-6'>
                    <div className='flex flex-col items-center space-y-5'>
                      <img src='./icons/cart.png' className='w-8 h-8' alt='' />
                      <p className='text-[#0000cc]'>Add to Cart</p>
                    </div>
                    <div className='flex flex-col items-center space-y-5'>
                      <img
                        src='./icons/telephone.png'
                        className='w-6 h-6'
                        alt=''
                      />
                      <p className='text-[#4d4d4d]'>Contact Sales</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Plan --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-3 px-5 bg-[#cccccc] lg:hidden'>
                  Plan
                </div>
                <div className='py-3 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <p className='text-sm text-[#4d4d4d] text-center max-w-xs'>
                    Bitdefender Internet Security
                    <br />
                    (Windows,3 devices; 1 Year)
                  </p>
                </div>
              </div>

              {/* <!-- Features --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center py-3 px-5 bg-[#cccccc] text-lg font-bold text-[#4d4d4d] lg:hidden'>
                  Features
                </div>
                <div className='flex justify-center items-center py-[14px] px-5 border-2'>
                  <p className='text-center text-[#4d4d4d] text-sm max-w-xs'>
                    Complete data protection. Advanced threat defense,
                    Multi-layer ransomware protection, Anti-phising, Social
                    protection
                  </p>
                </div>
              </div>

              {/* <!-- Pricing --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-3 px-5 bg-[#cccccc] lg:hidden'>
                  Pricing
                </div>
                <div className='py-3 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <p className='text-lg font-bold text-[#4d4d4d] text-center max-w-xs'>
                    NPR 1000
                  </p>
                </div>
              </div>

              {/* <!-- cart --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-[26px] px-5 bg-[#cccccc] lg:hidden'></div>
                <div className='py-4 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <div className='flex items-center space-x-6'>
                    <div className='flex flex-col items-center space-y-5'>
                      <img src='./icons/cart.png' className='w-8 h-8' alt='' />
                      <p className='text-[#0000cc]'>Add to Cart</p>
                    </div>
                    <div className='flex flex-col items-center space-y-5'>
                      <img
                        src='./icons/telephone.png'
                        className='w-6 h-6'
                        alt=''
                      />
                      <p className='text-[#4d4d4d]'>Contact Sales</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Plan --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-3 px-5 bg-[#cccccc] lg:hidden'>
                  Plan
                </div>
                <div className='py-3 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <p className='text-sm text-[#4d4d4d] text-center max-w-xs'>
                    Bitdefender Mobile Security
                    <br />
                    (Android, 1 devices, 1 Year)
                  </p>
                </div>
              </div>

              {/* <!-- Features --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center py-3 px-5 bg-[#cccccc] text-lg font-bold text-[#4d4d4d] lg:hidden'>
                  Features
                </div>
                <div className='flex justify-center items-center py-[14px] px-5 border-2'>
                  <p className='text-center text-[#4d4d4d] text-sm max-w-xs'>
                    Complete data protection. Advanced threat defense,
                    Multi-layer ransomware protection, Anti-phising, Social
                    protection
                  </p>
                </div>
              </div>

              {/* <!-- Pricing --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-3 px-5 bg-[#cccccc] lg:hidden'>
                  Pricing
                </div>
                <div className='py-3 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <p className='text-lg font-bold text-[#4d4d4d] text-center max-w-xs'>
                    NPR 150
                  </p>
                </div>
              </div>

              {/* <!-- cart --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-[26px] px-5 bg-[#cccccc] lg:hidden'></div>
                <div className='py-4 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <div className='flex items-center space-x-6'>
                    <div className='flex flex-col items-center space-y-5'>
                      <img src='./icons/cart.png' className='w-8 h-8' alt='' />
                      <p className='text-[#0000cc]'>Add to Cart</p>
                    </div>
                    <div className='flex flex-col items-center space-y-5'>
                      <img
                        src='./icons/telephone.png'
                        className='w-6 h-6'
                        alt=''
                      />
                      <p className='text-[#4d4d4d]'>Contact Sales</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Plan --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-3 px-5 bg-[#cccccc] lg:hidden'>
                  Plan
                </div>
                <div className='py-3 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <p className='text-sm text-[#4d4d4d] text-center max-w-xs'>
                    Bitdefender Mobile Security
                    <br />
                    (Android & iOS, 3 devices, 1 Year)
                  </p>
                </div>
              </div>

              {/* <!-- Features --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center py-3 px-5 bg-[#cccccc] text-lg font-bold text-[#4d4d4d] lg:hidden'>
                  Features
                </div>
                <div className='flex justify-center items-center py-[14px] px-5 border-2'>
                  <p className='text-center text-[#4d4d4d] text-sm max-w-xs'>
                    Complete data protection. Advanced threat defense,
                    Multi-layer ransomware protection, Anti-phising, Social
                    protection
                  </p>
                </div>
              </div>

              {/* <!-- Pricing --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-3 px-5 bg-[#cccccc] lg:hidden'>
                  Pricing
                </div>
                <div className='py-3 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <p className='text-lg font-bold text-[#4d4d4d] text-center max-w-xs'>
                    NPR 300
                  </p>
                </div>
              </div>

              {/* <!-- cart --> */}
              <div className='flex flex-col'>
                <div className='flex justify-center items-center text-[#4d4d4d] text-lg font-bold py-[26px] px-5 bg-[#cccccc] lg:hidden'></div>
                <div className='py-4 px-5 flex justify-center items-center border-2 h-[91px]'>
                  <div className='flex items-center space-x-6'>
                    <div className='flex flex-col items-center space-y-5'>
                      <img src='./icons/cart.png' className='w-8 h-8' alt='' />
                      <p className='text-[#0000cc]'>Add to Cart</p>
                    </div>
                    <div className='flex flex-col items-center space-y-5'>
                      <img
                        src='./icons/telephone.png'
                        className='w-6 h-6'
                        alt=''
                      />
                      <p className='text-[#4d4d4d]'>Contact Sales</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PlansAndPricing
