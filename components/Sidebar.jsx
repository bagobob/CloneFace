import React from 'react'
import SidebarRow from './SidebarRow';
import {ChevronDownIcon, ShoppingBagIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import {CalendarIcon, ClockIcon, ComputerDesktopIcon, UsersIcon} from "@heroicons/react/24/solid";
import {useSession} from "next-auth/react";

const rows = [
  {icon: UsersIcon, title: 'Friends'},
  {icon: UserGroupIcon, title: 'Groups'},
  {icon: ShoppingBagIcon, title: 'MarketPlace'},
  {icon: ComputerDesktopIcon, title: 'Watch'},
  {icon: CalendarIcon, title: 'Events'},
  {icon: ClockIcon, title: 'Memories'},
  {icon: ChevronDownIcon, title: 'See More'},
]
const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
      <SidebarRow src={session.user.image} title={session.user.name} />
      {rows && rows.map((item, index)=> (
        <SidebarRow Icon={item.icon} title={item.title} key={index} />
      ))}
      
    </div>
  )
}

export default Sidebar