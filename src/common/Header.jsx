import React from "react"
import { Link } from "react-router-dom"
import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components = [
  {
    title: "Laptop",
    href: "/products/laptops",
    description:
      "High-performance laptops for work, gaming, and everyday use with the latest processors and sleek designs.",
  },
  {
    title: "Smartphone",
    href: "/products/smartphones",
    description:
      "Latest smartphones with powerful cameras, long-lasting batteries, and cutting-edge technology.",
  },
  {
    title: "Tablet",
    href: "/products/tablets",
    description:
      "Lightweight and portable tablets for studying, reading, entertainment, and professional tasks.",
  },
  {
    title: "Smartwatch",
    href: "/products/smartwatches",
    description:
      "Track your fitness, get notifications, and stay connected on the go with stylish smartwatches.",
  },
  {
    title: "Headphones",
    href: "/products/headphones",
    description:
      "Wireless and wired headphones with superior sound quality, noise cancellation, and comfort.",
  },
  {
    title: "Gaming Console",
    href: "/products/consoles",
    description:
      "Next-gen gaming consoles delivering immersive experiences, stunning graphics, and smooth gameplay.",
  },
]


const Header=()=> {
  return (
    <>
<div className="border flex justify-around items-center p-2 
bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200
">
  <Link to="/">
  <span className= "text-2xl text-white rounded-sm p-2 font-semibold ">
    Gedget  <span className="text-2xl text-yellow-900">Shop </span> 
  </span>
  </Link>
  
  <NavigationMenu viewport={false}>
      <NavigationMenuList className=" ">
        <NavigationMenuItem >
          <NavigationMenuTrigger className="[&>svg]:hidden bg-black text-white ">
                      <Link to="/"> Home</Link></NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" bg-black text-white">Products</NavigationMenuTrigger>
          <NavigationMenuContent className="border  top-12">
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[400px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild  className=" bg-black text-white">
            <Link href="/docs">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
    

        <NavigationMenuItem >
          <NavigationMenuTrigger className=" bg-black text-white ">Register</NavigationMenuTrigger>
          <NavigationMenuContent className=" absolute top-12 ">
            <ul className="grid w-[200px] gap-4 ">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/signin" className="flex-row items-center gap-2">
                    <CircleHelpIcon />
                    Signin
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild className="">
                  <Link to="/signup" className="flex-row items-center gap-2">
                    <CircleIcon />
                   Sign up
                  </Link>
                </NavigationMenuLink>
          
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
</div>
  

    </>
    
  )
}
export default  Header;
// Reusable list item
function ListItem({ title, children, to, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={to}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
