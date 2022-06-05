import BodyDescComponent from "./BodyDescView";
import HeaderViewComponent from "./HeaderView";

function PostViewComponent(postDetails) {


  const { jobDetail, jobDescription, jobSalary, experience, workingHours } = postDetails;

  return (
    <>
      <article>
        <HeaderViewComponent jobDetail={jobDetail} jobSalary={jobSalary}/>
        <BodyDescComponent {...jobDescription} />
      </article>

    </>
  );
}

export default PostViewComponent;