import FilterComponent from "components/web/List/Filter";
import InfiniteScrollComponent from "components/web/List/InfiniteScroll";
import LoginComponent from "components/web/Login";
import BodyCompanyDetailViewComponent from "./BodyCompnyDetailView";
import BodyDescComponent from "./BodyDescView";
import HeaderViewComponent from "./HeaderView";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import JobApplyComponent from "components/web/JobApply";
import { useSession, signOut } from 'next-auth/react';

function PostViewComponent() {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [jobDetailObj, setJobDetailObj] = useState({})
  const {data:session, status:loading } = useSession();
  const { jobId } = router.query;


  const fetchJobPostById = async () => {
    setIsLoading(true)
    const res = await fetch(`/api/jobpost/${jobId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      setIsLoading(false)
      const postDetails = await res.json();
      setJobDetailObj(postDetails.data[0])
    }

  };

  useEffect(() => {
    jobId ? fetchJobPostById() : null;
  }, [jobId]); // Note the curly braces around myFunction!


  return (
    <>
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
              
              {loading === 'unauthenticated' && (<aside className="sticky top-5 space-y-1"><LoginComponent /></aside>)}
              {session && loading === 'authenticated' && (<aside className="sticky top-5 space-y-1"><JobApplyComponent jobDetailObj={jobDetailObj}/></aside>)}
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