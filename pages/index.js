import Login from "@/components/Login";
import { useSession } from "next-auth/react"
import Head from "next/head";
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home() {
  const { data: session } = useSession()
  // As this page uses Server Side Rendering, the `session` will be already
  // populated on render without needing to go through a loading stage.

     // If no session exists, display access denied message
  if (!session) {
    return (
      <Login />
    )
  }
    return (
      <>
        <Head>
          <title>Facebook Clone</title>
        </Head>
        <Header />
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
        <Footer />
      </>
    )

}

export async function getServerSideProps(context) {

  return {
    props: {
      session: await getServerSession(context.req, context.res, authOptions),
    },
  }
}
