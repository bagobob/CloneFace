import Login from "@/components/Login";
import { useSession } from "next-auth/react"
import Head from "next/head";
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Widgets from "@/components/Widgets";
import { db } from "@/firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";


export default function Home({posts}) {
  const { data: session } = useSession()

  if (!session) {
    return (
      <Login />
    )
  }
  // If no session exists, display access denied message

  return (
    <div className="overflow-hidden bg-gray-100">
      <Head>
        <title>Facebook Clone</title>
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
      <Footer />
    </div>
  )

}

export async function getServerSideProps(context) {
  //Get The User
  const session = await getServerSession(context.req, context.res, authOptions);
  const q = query(collection(db, "posts"), orderBy("timestamp", 'desc'));
  const posts = await getDocs(q);
  const docs = posts.docs.map((post)=>({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }))
  return {
    props: {
      session,
      posts: docs
    },
  }
}
