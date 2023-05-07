
import LoginComponent from "components/web/Login";
import BodyDescComponent from "./BodyDescView";
import HeaderViewComponent from "./HeaderView";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import JobApplyComponent from "components/web/JobApply";
import { useSession, signOut } from 'next-auth/react';
import JobApplyPreviewComponent from "components/web/JobApplyPreview";
import { getJobPostByIdApi } from "services/api/jobPostApi";
import { useQueries } from "@tanstack/react-query";
import { getUserInfoApi } from "services/api";


function PostViewComponent({ postDetailsProp }) {

  const router = useRouter();
  const { data: session, status: loading } = useSession();
  const { jobId = null, viewType } = router.query;
  const [jobDetailObj, setJobDetailObj] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const [jobPostData, userInfoData] = useQueries({
    queries: [
      { queryKey: ['jobPostByIdQuery'], queryFn: () => getJobPostByIdApi(jobId) },
      { queryKey: ['userInfoUseQuery'], queryFn: () => getUserInfoApi() }
    ]
  });
  
  const jobPostDataLoading = jobPostData.isLoading
  const userInfoDataLoading = userInfoData.isLoading;

  useEffect(() => {
    if(viewType === 'edit') {
      setJobDetailObj(postDetailsProp)
    }
  }, [postDetailsProp])

  useEffect(() => {
    if (viewType === 'create' && !userInfoDataLoading) {
      const mergeObj = { ...postDetailsProp, userDetail: { ...userInfoData.data.data } }
      setJobDetailObj(mergeObj)
    }
  }, [userInfoData, userInfoDataLoading])
  
  useEffect(() => {
    if(viewType === 'view' && !jobPostDataLoading) {
      setJobDetailObj(jobPostData.data.data[0])
    }
  }, [jobPostData, jobPostDataLoading])
  
  return (
    <>
    {/* {JSON.stringify(jobDetailObj)} */}
      {isLoading
        ? <p>Loading</p>
        : <div className="py-1">
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-12 lg:gap-8">

            <main className="lg:col-span-9 xl:col-span-9">
              <div className="px-4 sm:px-0">
              </div>
              <div className="mt-0">
                <HeaderViewComponent jobDetailObj={jobDetailObj} />
                <BodyDescComponent jobDetailObj={jobDetailObj} />
              </div>
            </main>
            <div className="hidden lg:block lg:col-span-3 xl:col-span-3">
              {viewType === 'create' || viewType === 'edit'
                ? <aside className="sticky top-5 space-y-1"><JobApplyPreviewComponent /></aside>
                :
                <div>
                  {loading === 'unauthenticated' && (<aside className="sticky top-5 space-y-1"><LoginComponent /></aside>)}
                  {session && loading === 'authenticated' && (<aside className="sticky top-5 space-y-1"><JobApplyComponent jobDetailObj={jobDetailObj} /></aside>)}
                </div>
              }
            </div>
          </div>
          <div className="absolute bottom-0 w-full px-0 py-2 bg-gray-700  text-right sm:px-6 h-2">
          </div>
          <div className="block h-16 w-full"></div>
        </div>
      }
    </>
  );
}

export default PostViewComponent;