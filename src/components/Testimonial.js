import React from 'react'


const Testimonial = ({dispPic, dispPic2})=> {
    return (
        <div data-aos="fade-up">
            <h1 className="text-5xl text-customcolor-header text-center font-semibold leading-none tracking-wider">Hear from students like you</h1>
            <div className="relative flex flex-row items-start container mx-auto mt-10">
                <div className="relative max-w-xs border-4 pl-12 pr-10 pt-8 pb-3 mt-10 ml-20 rounded-btnrad border-customcolor-header shadow-testimonial border-opacity-47">
                    <div className="w-20 border-4 rounded-full border-customcolor-header border-opacity-47 shadow-testimonial absolute -left-10 top-4">
                        <img className='w-full' src={dispPic} alt="display"/>
                    </div>
                    <div className="text-left">
                        <h1 className="font-semibold text-base leading-none">Yingchou Yen</h1>
                        <small className="text-xs font-semibold text-gray-600">FUTA Student</small>
                    </div>
                    <div className="mt-3">
                        <svg className="-ml-4" width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.00425226 14.4891C0.00425226 17.5328 2.13572 20 4.76513 20C7.39458 20 9.52604 17.5328 9.52604 14.4891C9.52604 11.4454 7.39458 8.97821 4.76513 8.97821C4.22474 8.97821 3.70747 9.08725 3.22322 9.27941C4.29462 2.16664 9.08636 -2.4203 4.64443 1.35484C-0.280998 5.54105 -0.00102286 14.3207 0.00448846 14.4816C0.00448846 14.4841 0.00425226 14.4863 0.00425226 14.4891Z" fill="#AF96D9"/>
                        <path d="M10.4782 14.4891C10.4782 17.5328 12.6096 20 15.2391 20C17.8685 20 20 17.5328 20 14.4891C20 11.4454 17.8685 8.97821 15.239 8.97821C14.6986 8.97821 14.1814 9.08725 13.6971 9.27941C14.7685 2.16664 19.5603 -2.4203 15.1183 1.35484C10.1929 5.54105 10.4728 14.3207 10.4784 14.4816C10.4784 14.4841 10.4782 14.4863 10.4782 14.4891Z" fill="#B096D9"/>
                        </svg>
                        <p className="text-left text-sm font-medium leading-testimonnial tracking-wide">Alor sit, amet consectetur adipisicing elit. Error provident esse a hic! Ea sequi dolore modi, officiis perferendis ab modi.</p>
                    </div>  
                </div>

                <div className="relative max-w-xs border-4 pl-12 pr-10 pt-8 pb-3 ml-20 mt-10 rounded-btnrad border-customcolor-header shadow-testimonial border-opacity-47">
                    <div className="w-20 border-4 rounded-full border-customcolor-header border-opacity-47 shadow-testimonial absolute -left-10 top-4">
                        <img className='w-full' src={dispPic2} alt="display"/>
                    </div>
                    <div className="text-left">
                        <h1 className="font-semibold text-base leading-none">Elik Dev</h1>
                        <small className="text-xs font-semibold text-gray-600">FUNAAB Student</small>
                    </div>
                    <div className="mt-3">
                        <svg className="-ml-4" width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.00425226 14.4891C0.00425226 17.5328 2.13572 20 4.76513 20C7.39458 20 9.52604 17.5328 9.52604 14.4891C9.52604 11.4454 7.39458 8.97821 4.76513 8.97821C4.22474 8.97821 3.70747 9.08725 3.22322 9.27941C4.29462 2.16664 9.08636 -2.4203 4.64443 1.35484C-0.280998 5.54105 -0.00102286 14.3207 0.00448846 14.4816C0.00448846 14.4841 0.00425226 14.4863 0.00425226 14.4891Z" fill="#AF96D9"/>
                        <path d="M10.4782 14.4891C10.4782 17.5328 12.6096 20 15.2391 20C17.8685 20 20 17.5328 20 14.4891C20 11.4454 17.8685 8.97821 15.239 8.97821C14.6986 8.97821 14.1814 9.08725 13.6971 9.27941C14.7685 2.16664 19.5603 -2.4203 15.1183 1.35484C10.1929 5.54105 10.4728 14.3207 10.4784 14.4816C10.4784 14.4841 10.4782 14.4863 10.4782 14.4891Z" fill="#B096D9"/>
                        </svg>
                        <p className="text-left text-sm font-medium leading-testimonnial tracking-wide">Alor sit, amet consectetur adipisicing elit. Error provident esse a hic! Ea sequi dolore modi, officiis perferendis ab modi.</p>
                    </div>  
                </div>

                <div className="relative max-w-xs border-4 pl-12 pr-10 pt-8 pb-3 ml-20 mt-10 rounded-btnrad border-customcolor-header shadow-testimonial border-opacity-47">
                    <div className="w-20 border-4 rounded-full border-customcolor-header border-opacity-47 shadow-testimonial absolute -left-10 top-4">
                        <img className='w-full' src={dispPic} alt="display"/>
                    </div>
                    <div className="text-left">
                        <h1 className="font-semibold text-base leading-none">Cute Face</h1>
                        <small className="text-xs font-semibold text-gray-600">UI Student</small>
                    </div>
                    <div className="mt-3">
                        <svg className="-ml-4" width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.00425226 14.4891C0.00425226 17.5328 2.13572 20 4.76513 20C7.39458 20 9.52604 17.5328 9.52604 14.4891C9.52604 11.4454 7.39458 8.97821 4.76513 8.97821C4.22474 8.97821 3.70747 9.08725 3.22322 9.27941C4.29462 2.16664 9.08636 -2.4203 4.64443 1.35484C-0.280998 5.54105 -0.00102286 14.3207 0.00448846 14.4816C0.00448846 14.4841 0.00425226 14.4863 0.00425226 14.4891Z" fill="#AF96D9"/>
                        <path d="M10.4782 14.4891C10.4782 17.5328 12.6096 20 15.2391 20C17.8685 20 20 17.5328 20 14.4891C20 11.4454 17.8685 8.97821 15.239 8.97821C14.6986 8.97821 14.1814 9.08725 13.6971 9.27941C14.7685 2.16664 19.5603 -2.4203 15.1183 1.35484C10.1929 5.54105 10.4728 14.3207 10.4784 14.4816C10.4784 14.4841 10.4782 14.4863 10.4782 14.4891Z" fill="#B096D9"/>
                        </svg>
                        <p className="text-left text-sm font-medium leading-testimonnial tracking-wide">Alor sit, amet consectetur adipisicing elit. Error provident esse a hic! Ea sequi dolore modi, officiis perferendis ab modi.</p>
                    </div>  
                </div>
                <button className="absolute top-half hover:border-customcolor-header focus:outline-none hover:border-opacity-25 hover:border-2 hover:rounded-full">
                    <svg className="shadow-sm rounded-full" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                        <path d="M17.0647 23.5148L29.9643 10.6157C30.7848 9.79469 32.1152 9.79469 32.9354 10.6157C33.7556 11.4359 33.7556 12.7662 32.9354 13.5864L21.5213 25.0002L32.9351 36.4136C33.7553 37.2341 33.7553 38.5643 32.9351 39.3846C32.1148 40.2051 30.7845 40.2051 29.9639 39.3846L17.0644 26.4852C16.6543 26.0749 16.4494 25.5377 16.4494 25.0002C16.4494 24.4625 16.6547 23.9249 17.0647 23.5148Z" fill="#6740AA"/>
                        </g>
                        <circle cx="25" cy="25" r="25" fill="#6740AA" fillOpacity="0.1"/>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="30" height="30.0001" fill="white" transform="translate(40 40) rotate(-180)"/>
                        </clipPath>
                        </defs>
                        </svg>
                </button>

                <button className="absolute top-half right-0 focus:outline-none hover:border-customcolor-header hover:border-opacity-25 hover:border-2 hover:rounded-full">
                    <svg className="shadow-sm rounded-full" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                    <path d="M32.9353 26.4852L20.0358 39.3843C19.2152 40.2053 17.8848 40.2053 17.0646 39.3843C16.2444 38.5641 16.2444 37.2338 17.0646 36.4136L28.4787 24.9998L17.065 13.5864C16.2447 12.7659 16.2447 11.4357 17.065 10.6154C17.8852 9.79486 19.2155 9.79486 20.0361 10.6154L32.9357 23.5148C33.3458 23.9251 33.5506 24.4623 33.5506 24.9998C33.5506 25.5375 33.3454 26.0751 32.9353 26.4852Z" fill="#6740AA"/>
                    </g>
                    <circle cx="25" cy="25" r="25" fill="#6740AA" fillOpacity="0.1"/>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="30" height="30.0001" fill="white" transform="translate(10 10)"/>
                    </clipPath>
                    </defs>
                    </svg>
                </button>

            </div>
            
            
        </div>
    )
}

export default Testimonial