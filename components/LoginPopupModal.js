import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";

export default function LoginPopupModal({
  isOpen,
  setIsOpen,
  popupData,
  onClose,
}) {
  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  // Extract popup content - popupData is an object from PrestaShop API
  const content = popupData;

  if (!content) return null;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        {/* <Dialog.Backdrop className="fixed inset-0 bg-white/90" /> */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white bg-opacity-80 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
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
                className="relative bg-white/90  rounded-none py-8 px-6 sm:py-12 sm:px-20 text-left overflow-hidden 
              transform transition-all sm:max-w-3xl w-full mx-4 shadow-xl"
              >
                <div>
                  <div className="absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      className="bg-gray-900 focus:outline-none focus:ring-0 py-1 cursor-pointer"
                      onClick={handleClose}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>

                  <div className="flex flex-col items-center">
                    {/* Title */}
                    {content.popup_title && (
                      <Dialog.Title
                        as="h3"
                        className="text-base sm:text-2xl text-center font-semibold text-gray-900 mb-4 tracking-wide"
                      >
                        {content.popup_title}
                      </Dialog.Title>
                    )}

                    {/* Message */}
                    {content.popup_message && (
                      <div className="text-gray-700 text-sm leading-relaxed mb-4">
                        {typeof content.popup_message === 'string' ? (
                          <div dangerouslySetInnerHTML={{ __html: content.popup_message }} />
                        ) : (
                          <p>{content.popup_message}</p>
                        )}
                      </div>
                    )}

                    {/* Image */}
                    {content.popup_image && (
                      <div className="my-2 sm:my-4 flex justify-center">
                        <img
                          src={`https://b2b-bo.minus-editions.fr/modules/prismaticloginpopup/views/img/${content.popup_image}`}
                          alt={content.popup_title || "Login popup"}
                          className="max-w-full h-auto"
                        />
                      </div>
                    )}

                    

                    {/* Action buttons */}
                    <div className="mt-6 flex justify-end space-x-3">
                      {content.popup_button_url && content.popup_button_label && (
                        <a
                          href={content.popup_button_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex justify-center px-8 py-3 text-base font-medium text-white bg-gray-900 border border-transparent rounded-none hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                          {content.popup_button_label}
                        </a>
                      )}
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