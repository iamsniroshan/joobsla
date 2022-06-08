import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from 'react';

const LoginComponent = dynamic(() => import("components/admin/Login"));

function AdminLogin() {
  const {data:session, status:loading } = useSession();
  const router = useRouter();
  if(loading !== 'authenticated') null
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
