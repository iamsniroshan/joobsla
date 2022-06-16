import { BriefcaseIcon } from "@heroicons/react/solid";
import { format } from "date-fns";

export default function ExperienceComponent({ experience = [] }) {
  return (
    <>
      <div className="flow-root">
        {experience.length > 0 ? (
          <ul className="-mb-8">
            {experience.map((eachItem, index) => (
              <li key={index}>
                <div className="relative pb-8">
                {index !== experience.length - 1 ? (
                <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
                  <div className="relative flex items-start space-x-3">
                    <>
                      <div className="relative px-1">
                        <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                          <BriefcaseIcon
                            className="h-5 w-5 text-gray-500"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <a className="font-medium text-gray-900">
                              {eachItem.companyName}
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            From{" "}
                            {format(
                              new Date(eachItem.startDate),
                              "dd MMMM yyyy"
                            )}{" "}
                            to{" "}
                            {format(new Date(eachItem.endDate), "dd MMMM yyyy")}
                          </p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          <p>{eachItem.description}</p>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <button
            type="button"
            className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
              />
            </svg>
            <span className="mt-2 block text-sm font-medium text-gray-900">
              Create a new database
            </span>
          </button>
        )}
      </div>
    </>
  );
}
