

import BodyCompanyDetailViewComponent from './BodyCompnyDetailView'

export default function BodyDescComponent(jobDescription) {


    return (
        <>
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8  xl:grid xl:grid-cols-3 mt-8 text-sm">
              <div className="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
                <div>
                  <div>
                    <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6 description">
                    <dd className="col-span-2 xl:border-b"  dangerouslySetInnerHTML={{ __html: jobDescription.longDesc }}/>
                    </div>
                  </div>
                </div>
                {/* <section aria-labelledby="activity-title" className="mt-8 xl:mt-10">
                  <div>
                    <div className="divide-y divide-gray-200">
                      <div className="pb-4">
                        <h2 id="activity-title" className="text-lg font-medium text-gray-900">
                          zzzzzzzz
                        </h2>
                      </div>
                      <div className="pt-6">
                        ccccccccccc
                      </div>
                    </div>
                  </div>
                </section> */}
              </div>
              <aside className="xl:block xl:pl-8">
                <h2 className="sr-only">Details</h2>
                <BodyCompanyDetailViewComponent/>
      
              </aside>
            </div>
        </>
    )
}
