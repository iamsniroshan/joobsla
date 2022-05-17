/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon, XIcon } from '@heroicons/react/solid'
import { useState,useEffect  } from "react";

export default function AlertsCommonComponent({type,message}) {

  const [visibleAlert, setVisibleAlert] = useState(false);

  useEffect(() => {
    setVisibleAlert(true)
    const timer = setTimeout(() => {
        setVisibleAlert(false)
    }, 4000);
    return () => clearTimeout(timer);
  }, [type]);

  return (
      <>
    {visibleAlert && (<div className={type === 'error' ? 'rounded-md bg-red-50 p-4 mt-3':'rounded-md bg-green-50 p-4 mt-3'}>
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon className={type === 'error' ? 'h-5 w-5 text-red-400':'h-5 w-5 text-green-400'} aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className={type === 'error' ? 'text-sm font-medium text-red-800':'text-sm font-medium text-green-800'}>{message}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className={type === 'error' ? 'inline-flex bg-red-50 rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600':'inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600'}
            >
              <span className="sr-only" onClick={()=>setVisibleAlert(false)}>Dismiss</span>
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>)}
    </>
  )
}