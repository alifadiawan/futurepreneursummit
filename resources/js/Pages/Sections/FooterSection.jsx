import { Link } from '@inertiajs/react'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import logofest from '../../../../public/Logo-FEST-LIGHT.png'

const FooterSection = () => {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img src={logofest} alt="logo fest" className="w-64 mb-5" />
            <p className="text-purple-200">
              Empowering future entrepreneurs with knowledge and connections.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-200 hover:text-white">About</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white">Events</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-xl mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-white"><Facebook size={24} /></a>
              <a href="#" className="text-purple-200 hover:text-white"><Twitter size={24} /></a>
              <a href="#" className="text-purple-200 hover:text-white"><Instagram size={24} /></a>
              <a href="#" className="text-purple-200 hover:text-white"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-700 mt-8 pt-4 text-center text-purple-200">
          <p>
            &copy; {new Date().getFullYear()} FuturePreneurSummit by <a href="https://fesorganizer.com/">FESt Organizer</a> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection