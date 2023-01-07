import CardL from "./CardL"
import CardG from "./CardG"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Products = () => {
  const showGrid = () => {
    document.getElementsByClassName("gridView").style.display = "grid"
  }
  return (
    <>
      <div className="flex font-extralight">
        <div className="font-light bg-amber-600/50 pl-5 pt-5 hidden lg:block border border-y-0 border-l-0 border-r-grey">
          <div className="font-light text-2xl w-60 pb-2">Categories</div>
          <div>
            <ul className="pl-3 mr-8">
              <li>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between border border-x-0 border-t-0 border-b-amber-100/50 px-4 py-2 text-left">
                        <span>Vegetables</span>
                        <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-6 w-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pt-4 pb-2 text-sm text-grey">
                          If you're unhappy with your purchase for any reason, email us
                          within 90 days and we'll refund you in full, no questions asked.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>  
              </li>
              <li className="">
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between border border-x-0 border-t-0 border-b-amber-100/50 px-4 py-2 text-left">
                          <span>Vegetables</span>
                          <ChevronUpIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-6 w-6`}
                          />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pt-4 pb-2 text-sm text-grey">
                            If you're unhappy with your purchase for any reason, email us
                            within 90 days and we'll refund you in full, no questions asked.
                      </Disclosure.Panel>
                      </>
                    )}
                </Disclosure>
              </li>
              <li className="">
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between border border-x-0 border-t-0 border-b-amber-100/50 px-4 py-2 text-left">
                          <span>Vegetables</span>
                          <ChevronUpIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-6 w-6`}
                          />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pt-4 pb-2 text-sm text-grey">
                            If you're unhappy with your purchase for any reason, email us
                            within 90 days and we'll refund you in full, no questions asked.
                      </Disclosure.Panel>
                      </>
                    )}
                </Disclosure>
              </li>
              <li className="">
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between border border-x-0 border-t-0 border-b-amber-100/50 px-4 py-2 text-left">
                          <span>Vegetables</span>
                          <ChevronUpIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-6 w-6`}
                          />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pt-4 pb-2 text-sm text-grey">
                            If you're unhappy with your purchase for any reason, email us
                            within 90 days and we'll refund you in full, no questions asked.
                      </Disclosure.Panel>
                      </>
                    )}
                </Disclosure>
              </li>
              <li className="">
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between border border-x-0 border-t-0 border-b-amber-100/50 px-4 py-2 text-left">
                          <span>Vegetables</span>
                          <ChevronUpIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-6 w-6`}
                          />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pt-4 pb-2 text-sm text-grey">
                            If you're unhappy with your purchase for any reason, email us
                            within 90 days and we'll refund you in full, no questions asked.
                      </Disclosure.Panel>
                      </>
                    )}
                </Disclosure>
              </li>
              <li className="">
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between border border-x-0 border-t-0 border-b-amber-100/50 px-4 py-2 text-left">
                          <span>Vegetables</span>
                          <ChevronUpIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-6 w-6`}
                          />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pt-4 pb-2 text-sm text-grey">
                            If you're unhappy with your purchase for any reason, email us
                            within 90 days and we'll refund you in full, no questions asked.
                      </Disclosure.Panel>
                      </>
                    )}
                </Disclosure>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-3 md:px-8 py-5">
          <div className="font-light text-3xl relative top-14 inline-block">All Products</div>
          <div className="py-5 flex justify-end">
            <label className="my-auto mr-2" htmlFor="">Search</label>
            <div className="my-auto bg-white flex w-1/3 rounded-md outline outline-amber-600/50 outline-1 outline-offset-1 hover:outline-black p-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
              </svg>
              <input className="outline-none ml-2 w-full" type="search" name="" placeholder="Search Products" id="" />
            </div>
            <button className="my-auto bg-white p-2 mx-4 rounded-md outline outline-amber-600/50 outline-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </button>
            <button className="my-auto bg-white p-2 rounded-md outline outline-amber-600/50 outline-1" onClick={showGrid}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-2 gap-5">
            <CardL />
            <CardL />
            <CardL />
            <CardL />
            <CardL />
            <CardL />
            <CardL />
            <CardL />
            <CardL />
            <CardL />
            <CardL />
            <CardL />
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 2xl:grid-cols-8 xl:grid-cols-6 gap-5 gridView hidden">
            <CardG />
            <CardG />
            <CardG />
            <CardG />
            <CardG />
            <CardG />
            <CardG />
            <CardG />
            <CardG />
            <CardG />
            <CardG />
            <CardG />
          </div>
        </div>
      </div>
    </>
  )
}

export default Products