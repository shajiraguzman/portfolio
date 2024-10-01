import React from "react";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'

  export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-5">
            <div className="container mx-auto flex flex-col items-center">
            <div className="mb-4">
                <div className="flex space-x-4">
                    <SocialIcon target="_blank" url="https://www.linkedin.com/in/shajiraguzman/" />
                    <SocialIcon target="_blank" url="https://github.com/shajiraguzman" />
                </div>
            </div>
            <div className="mb-4">
                <p>© 2024 Shajira Guzman. All rights reserved.</p>
            </div>
            <div className="mb-4">
                <a href="#top" className="hover:underline">Back to Top</a>
            </div>
            </div>
        </footer>
    );
  }
  