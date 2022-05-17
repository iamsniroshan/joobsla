
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSession } from "next-auth/client";

export function AuthGuard({ children }) {
    const [session, loading] = useSession();
    const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!session?.user) {
        if(router.pathname.startsWith("/admin")) router.push("/admin")
        if(router.pathname.startsWith("/user")) router.push("/")
      }else{
        if(session.user.role === 'user' && router.pathname.startsWith('/admin')) router.push("/admin")
      }
    }
  }, [session, loading])

  /* show loading indicator while the auth provider is still initializing */
  if (loading) {
    return null
  }

  // if auth initialized with a valid user show protected page
  if (!loading && session?.user) {
    return <>{session.user.role === 'user' && router.pathname.startsWith('/admin') ? null : children}</>
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null
}