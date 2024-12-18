

import NavbarHome from "@/components/NavbarHome";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import RedirectButton from "@/features/auth/components/redirect-button";
// import { getCurrent } from "@/features/auth/actions";
import Image from "next/image";
// import Link from "next/link";
// import { redirect } from "next/navigation";


export default async function Home() {


  return (<>
  <main className=" mx-auto max-w-screen-2xl p-4">
    <NavbarHome />
      <section>
        <ContainerScroll
          titleComponent={
            <>
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
