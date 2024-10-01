//import { SparklesIcon } from '@heroicons/react/24/solid'
import React from "react";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'

//import { projects } from "../data";

export default function History() {

  return (
    
    <section id="history" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#22c55e" className="mx-auto inline-block w-10 mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>

          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-8 text-white">
            About Me
          </h1>
          <div classname="text-center">
            <p className="lg:text-2xl lg:w-2/3 mx-auto leading-relaxed text-base justify-between text-left ">
            I’m currently a student at the University of North Texas. 
            My major is <span className="text-white font-bold">computer science</span> and my graduation date is <span className="text-white font-bold">December, 2024</span>. 
            I love learning and challenging myself and finding ways to build upon new and old skills. 
            My favorite part about programming is exploring creative opportunities. 
            </p> 
            <div className="my-4"></div>
            <p className="lg:text-2xl lg:w-2/3 mx-auto leading-relaxed text-base text-left">
            Personally, when I don't have to be in front of my laptop, I like to spend my free time
            immersed in a good book. I enjoy reading whenever I can and imagining different worlds. 
            If I'm not reading, I enjoy movies, spending time with my dog on hikes, and 
            cooking a homemade meal! </p>
            <div className="my-4"></div>
            <p className="lg:text-2xl lg:w-2/3 mx-auto leading-relaxed text-base text-left">
            Professionally, I hope to be able to develop my skills and 
            contribute to a team and learn from others. If you'd like to <span className="text-white font-bold">contact</span> me, check out my LinkedIn profile below!
            </p>
            <div className="my-4"></div>
            <SocialIcon target="_blank" url="https://www.linkedin.com/in/shajiraguzman/" />


          </div>
        </div>
      </div>
    </section>
  );
}