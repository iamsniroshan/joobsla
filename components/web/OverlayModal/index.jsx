/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from '@heroicons/react/outline'
import { useContextualRouting } from 'next-use-contextual-routing';
import { useRouter } from "next/router";

export default function OverlayModalComponent(props) {
  const { open = false, children, width = 'md:w-min' } = props;
  const router = useRouter()
  const [isOpen, setOpen] = useState(false);
  const { returnHref } = useContextualRouting();

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const closeModalHandler = () => {
    //setOpen(false);
    router.push(returnHref, undefined, { shallow: true });
  };

  return (
    <>
      <Transition.Root show={isOpen ? true : false} as={Fragment}>
          <Dialog
            as="div"
            className="fixed z-10 inset-0 overflow-y-auto"
            onClose={() => closeModalHandler()}
          >
            <div
              className="flex min-h-screen text-center md:block md:px-2 lg:px-4"
              style={{ fontSize: 0 }}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-70 transition-opacity md:block" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden md:inline-block md:align-middle md:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <div className={`flex text-base text-left transform transition  md:inline-block  md:align-middle w-full ${width}`}>
                  <div className="w-full relative flex items-center bg-white  overflow-hidden shadow-2xl">
                    <button
                      type="button"
                      className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
                      onClick={() => closeModalHandler()}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="grid w-full">{children}</div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
    </>
  );
}