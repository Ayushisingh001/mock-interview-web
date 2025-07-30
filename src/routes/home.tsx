import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";

import {Container } from "@/components/Container"
import { Button } from "@/components/ui/button";

import {MarqueImg} from "@/components/marqueeimage"
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
         <div className="my-12 flex flex-col md:flex-row items-center justify-between gap-10">
    <div className="flex-1 text-center md:text-left space-y-4">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Crack Interviews with AI Precision
      </h1>
      <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto md:mx-0">
        Master every round before it begins. Practice smart. Learn faster. Win confidently.
      </p>
      <Link to="/generate">
        <Button className="mt-4 px-6 py-3 text-lg">
          Start Practicing <Sparkles className="ml-2" />
        </Button>
      </Link>
    </div>

    <div className="flex-1">
      <img
        src="assets/img/final.jpeg"
        alt="AI Interview Visual"
        className="rounded-xl object-cover w-full h-full max-h-[400px] shadow-lg shadow-purple-500/20"
      />
    </div>
  </div>
      </Container>

<Container className="py-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-slate-800 p-6 rounded-lg shadow-inner border border-slate-700 text-center">
      <h3 className="font-semibold text-xl text-blue-400">Real-Time Feedback</h3>
      <p className="text-sm text-slate-400 mt-2">
        Instant suggestions to improve after every mock session.
      </p>
    </div>
    <div className="bg-slate-800 p-6 rounded-lg shadow-inner border border-slate-700 text-center">
      <h3 className="font-semibold text-xl text-purple-400">Custom Questions</h3>
      <p className="text-sm text-slate-400 mt-2">
        Practice by role, company, or topic with dynamic question sets.
      </p>
    </div>
    <div className="bg-slate-800 p-6 rounded-lg shadow-inner border border-slate-700 text-center">
      <h3 className="font-semibold text-xl text-pink-400">Track Your Growth</h3>
      <p className="text-sm text-slate-400 mt-2">
        Weekly insights and progress charts to keep you sharp.
      </p>
    </div>
  </div>
</Container>
      {/* marquee section */}

      <div className="w-full my-12">
        <Marquee pauseOnHover>
          <MarqueImg img="assets/img/firebase.png" />
          <MarqueImg img="assets/img/meet.png" />
          <MarqueImg img="assets/img/zoom.png" />
          <MarqueImg img="assets/img/firebase.png" />
          <MarqueImg img="assets/img/microsoft.png" />
          <MarqueImg img="assets/img/meet.png" />
          <MarqueImg img="assets/img/tailwindcss.png" />
          <MarqueImg img="assets/img/microsoft.png" />
        </Marquee>
      </div>

      <Container className="py-8 space-y-8">
        <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-3">
            <img
              src="assets/img/download.jpeg"
              alt=""
              className="w-full max-h-96 rounded-md object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-muted-foreground">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today&apos;s competitive job market.
            </p>

            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
