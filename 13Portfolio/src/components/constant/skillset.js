import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

export const skills = [
    {
        title:'HTML',
        icon: FaHtml5,
        className: 'html-skill'
    },
    {
        title:'CSS',
        icon: FaCss3,
        className: 'css-skill'
    },
    {
        title:'JavaScript',
        icon: FaJs,
        className: 'js-skill'
    },
    {
        title:'React',
        icon: FaReact,
        className: 'react-skill'
    },
    {
        title:'Nodejs',
        icon: FaNodeJs,
        className: 'node-skill'
    },
    {
        title:'MongoDB',
        icon: SiMongodb,
        className: 'mongo-skill'
    },
    {
        title:'React Native',
        icon: TbBrandReactNative,
        className: 'rn-skill'
    },
    {
        title:'Tailwind Css',
        icon: RiTailwindCssFill,
        className: 'tailwind-skill'
    },
];
