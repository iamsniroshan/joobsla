
import { useSession, signOut } from 'next-auth/react';


export default function JobApplyComponent() {
    const {data:session, status:loading } = useSession();

  return (
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 w-96">
        job apply form
      </div>
  );
}
