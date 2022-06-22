import { userLayout } from "components/web/Layout";
import dynamic from "next/dynamic";

const ListComponent = dynamic(() => import("components/web/List"));

const Home = (props) => {
  return (
    <>
      <div>
        {/* <ListComponent data={props.data} /> */}
        <ListComponent/>
      </div>
    </>
  );
}

Home.getLayout = userLayout
export default Home;


// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
//   const data = await res.json();
//   return {
//     props: { data }
//   };
// };




// import { userLayout } from "components/web/Layout";
// import dynamic from "next/dynamic";


// const ListComponent = dynamic(() => import("components/web/List"));

// const Home = () => {
//   return <ListComponent/>
// };
// Home.getLayout = userLayout
// export default Home;

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     }
//   }
//   return {
//     props: {
//       session: session
//     },
//   }
// }
