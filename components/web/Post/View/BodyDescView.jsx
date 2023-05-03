

import BodyCompanyDetailViewComponent from './BodyCompnyDetailView'

export default function BodyDescComponent({ jobDetailObj }) {

  const { jobDescription, userDetail } = jobDetailObj

  if (!userDetail) {
    return null;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1  xl:grid xl:grid-cols-3 mt-8 text-sm">
        <aside className="space-y-1">
          <h2 className="sr-only">Details</h2>
          <BodyCompanyDetailViewComponent userDetail={userDetail[0]} />
        </aside>
        <div className="xl:col-span-2 xl:pl-8 xl:pr-8 xl:border-r xl:border-l xl:border-gray-200">
          <div>
            <div>
              <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6 description">
                <dd className="col-span-2" dangerouslySetInnerHTML={{ __html: jobDescription.longDesc }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
