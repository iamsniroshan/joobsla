import FilterComponent from "components/web/List/Filter";
import InfiniteScrollComponent from "components/web/List/InfiniteScroll";
import LoginComponent from "components/web/Login";
import BodyCompanyDetailViewComponent from "./BodyCompnyDetailView";
import BodyDescComponent from "./BodyDescView";
import HeaderViewComponent from "./HeaderView";

function PostViewComponent(postDetails, postId) {

  const postDetailsx = {
    "_id": "63dff9a700b1fc100e94e786",
    "jobDetail": {
      "jobTitle": "Senior Software Engineer - Frontend",
      "jobType": {
        "value": "full-time",
        "label": "Full-time"
      },
      "jobCategory": {
        "label": "IT-Sware/DB/QA/Web/Graphics/GIS",
        "value": "1",
        "id": "1"
      },
      "expirationDate": "2023-02-05T18:46:25.328Z",
      "_id": "63dff9a700b1fc100e94e787"
    },
    "jobDescription": {
      "longDesc": "<div bis_skin_checked=\"1\">We are looking for a Front End Developer to join our team due to growth! You will be responsible for building our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications. If you’re interested in creating a user-friendly environment by writing code and moving forward in your career, then this job is for you. We expect you to be a tech-savvy professional, who is curious about new digital technologies and aspires to combine usability with visual design. Ultimately, you should be able to create a functional and attractive digital environment for our company, ensuring great user experience.</div><div bis_skin_checked=\"1\"><br></div><div bis_skin_checked=\"1\"><h6><b>Responsibilities</b></h6><div bis_skin_checked=\"1\"><br></div><div bis_skin_checked=\"1\"><div bis_skin_checked=\"1\"><ul><li>Maintain and improve website</li><li>Optimize applications for maximum speed</li><li>Design mobile-based features</li><li>Collaborate with back-end developers and web designers to improve usability</li><li>Get feedback from, and build solutions for, users and customers</li><li>Write functional requirement documents and guides</li><li>Create quality mockups and prototypes</li><li>Ensure high quality graphic standards and brand consistency</li><li>Stay up-to-date on emerging technologies</li></ul><br></div><div bis_skin_checked=\"1\"><br></div><h6><b>Skills</b></h6><div bis_skin_checked=\"1\"><br></div><div bis_skin_checked=\"1\"><div bis_skin_checked=\"1\"><ul><li>5+ years of Front End Developer experience.</li><li>Hands on experience with markup languages</li><li>Experience with JavaScript, HTML &amp; CSS</li><li>Any React, Vue or Angular would be a plus!</li><li>Familiarity with browser testing and debugging</li><li>In-depth understanding of the entire web development process (design, development and deployment)</li><li>An ability to perform well in a fast-paced environment</li><li>Excellent analytical and multitasking skills</li></ul></div><div bis_skin_checked=\"1\"><br></div><div bis_skin_checked=\"1\"><br></div><div bis_skin_checked=\"1\"><h6><b>Benefits</b></h6><div bis_skin_checked=\"1\"><br></div><div bis_skin_checked=\"1\">Dental</div><div bis_skin_checked=\"1\">Health</div><div bis_skin_checked=\"1\">401k Match</div><div bis_skin_checked=\"1\">Vision</div><div bis_skin_checked=\"1\">among many other perks!</div></div></div></div><div bis_skin_checked=\"1\"><br></div></div>",
      "sortDesc": "We are looking for a Front End Developer to join our team due to growth! You will be responsible for building our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications. If you’re interested in creating a user-friendly environment by writing code and moving forward in your career, then this job is for you. We expect you to be a tech-savvy professional, who is curious about new digital technologies and aspires to combine usability with visual design. Ultimately, you should be able to create a functional and attractive digital environment for our company, ensuring great user experience."
    },
    "jobSalary": {
      "minAmount": "45000",
      "maxAmount": "23000.00",
      "currency": "lkr-month"
    },
    "experience": {
      "number": "5",
      "numberTag": "plus-year"
    },
    "workingHours": {
      "hour": "8",
      "hourTag": "h-week"
    },
    "userId": "62aa2bb14a8ff0df26faebab",
    "createdAt": "2023-02-05T18:47:03.280+0000",
    "updatedAt": "2023-02-05T18:47:03.280+0000",
    "__v": 0
  }

  const { jobDetail, jobDescription, jobSalary, experience, workingHours } = postDetailsx;

  return (
    <>
      <div className="py-1">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-12 lg:gap-8">

          <main className="lg:col-span-9 xl:col-span-9">
            <div className="px-4 sm:px-0">
            </div>
            <div className="mt-0">
              <HeaderViewComponent jobDetail={jobDetail} jobSalary={jobSalary} />
              <BodyDescComponent {...jobDescription} />
            </div>
          </main>
          <div className="hidden lg:block lg:col-span-3 xl:col-span-3">
            <aside className="sticky top-5 space-y-1">
            <LoginComponent />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostViewComponent;