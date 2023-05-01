import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"
import { EllipsisHorizontalIcon, VideoCameraIcon } from "@heroicons/react/24/solid"
import Contact from "./Contact"

const contacts = [
    {name: "Sony Sangha",src: 'https://links.papareact.com/zof',},
    {name: "Elon Musk",src: 'https://links.papareact.com/kxk',},
    {name: "Jeff Bezos",src: 'https://links.papareact.com/k2j',},
    {name: "Mark Zuckenberg",src: 'https://links.papareact.com/xql',},
    {name: "Bill Gates",src: 'https://links.papareact.com/zvy',},
    {name: "Mark Zuckenberg", src:"https://links.papareact.com/snf"},
    {name: "Harry Potter", src:"https://links.papareact.com/d0c"},
    {name: "James Bond", src:"https://links.papareact.com/r57"},
]

const Widgets = () => {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <MagnifyingGlassCircleIcon className="h-6" />
                    <EllipsisHorizontalIcon className="h-6" />
                </div>
            </div>

            {contacts && contacts.map((contact) =>(
                <Contact key={contact.name}
                src={contact.src} name={contact.name}
                />
            ))
                
            }
        </div>
    )
}

export default Widgets