import dynamic from "next/dynamic";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from 'react';

const LoginComponent = dynamic(() => import("components/admin/Login"));

function AdminLogin() {
  const [session, loading] = useSession();
  const router = useRouter();
  if(loading) null
  useEffect(() => {
    // Update the document title using the browser API
    if (session?.user.role === 'admin') {
      router.replace("/admin/home");
      return null;
    }
  });
  return <LoginComponent />;
}

export default AdminLogin;
