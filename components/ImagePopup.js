import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/solid";

export default function ImagePopup({
  isOpen,
  setIsOpen,
  image_url,
  title,
  description,
}) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white bg-opacity-90 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto ">
          <div className="flex items-center sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative bg-white p-10 sm:p-12 text-left overflow-hidden 
              transform transition-all sm:max-w-5xl  shadow-[0px_2px_7px_rgba(0,_0,_0,_0.14)]"
              >
                <div>
                  <div className="absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      className="bg-white rounded-md focus:outline-none focus:ring-0"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XCircleIcon
                        className="h-6 w-6 text-black"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start justify-center sm:space-x-10">
                    <div className="min-w-[250px] min-h-[250px] max-w-[300px] max-h-[300px] mx-auto flex flex-auto  justify-center">
                      <img
                        src={image_url}
                        className="object-center object-fill"
                      />
                    </div>
                    <div className="mt-12 sm:mt-0 text-start">
                      <Dialog.Title
                        as="h3"
                        className="leading-none text-2xl md:text-3xl text-black font-londrina"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="mt-5">
                        <p className="leading-tight text-lg text-black font-semibold tracking-wide text-justify">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
