

import Navbar from "@/components/Navbar";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import RedirectButton from "@/features/auth/components/redirect-button";
// import { getCurrent } from "@/features/auth/actions";
import Image from "next/image";
// import Link from "next/link";
// import { redirect } from "next/navigation";


export default async function Home() {


  // const user = await getCurrent()

  // const redirectUser = () => {
  //   if(user){
  //     redirect('/sign-in')
  //   } else {
  //     redirect('/sign-up')

  //   }

  // }

  return (<>
  <main className=" mx-auto max-w-screen-2xl p-4">
    <Navbar />
      <section>
        <ContainerScroll
          titleComponent={
            <>
              {/* <button onClick={() => redirectUser} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-600 bg-[linear-gradient(110deg,#17181a,45%,#2e3747,55%,#17181a)] bg-[length:200%_100%] px-16 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-50 text-xl">
                Start For Free Today
             </button>             */}
             <RedirectButton />

              <h1 className="text-4xl font-semibold text-black dark:text-white py-6 my-12">
                Manage Your Team With <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-10  leading-none">
                  CollaborateX
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/heroImg.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={true}
          />
        </ContainerScroll>

      </section>


  </main>

  </>);
}
