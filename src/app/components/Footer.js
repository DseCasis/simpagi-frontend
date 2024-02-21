import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export default function Footer(){
    return(
        <div className="bg-slate-400">
            <ul className="flex inset-x-0 bottom-0 bg-azul w-full p-4 justify-center  space-x-24">
                <a href="https://twitter.com/INIAPECUADOR" className="text-md text-white tracking-wide cursor-pointer hover:border-b-2 border-b-2 border-transparent transform  ease-in-out transition hover:animate-bounce">
                    <BsTwitter className="text-xl"/>
                </a>
                <a href="https://www.instagram.com/iniapecuador/" className="text-md text-white tracking-wide cursor-pointer hover:border-b-2 border-b-2 border-transparent transform ease-in-out transition hover:animate-bounce">
                    <BsInstagram className="text-xl"/>
                </a>
                <a href="https://www.facebook.com/iniapec" className="text-md text-white tracking-wide cursor-pointer hover:border-b-2 border-b-2 border-transparent transform  ease-in-out transition hover:animate-bounce">
                    <BsFacebook className="text-xl"/>
                </a>
            </ul>
        </div>
    )
}