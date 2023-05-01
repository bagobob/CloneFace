import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Sony Sangha",
        src: 'https://links.papareact.com/zof',
        profile: "https://links.papareact.com/l4v",
    },
    {
        name: "Elon Musk",
        src: 'https://links.papareact.com/4zn',
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Jeff Bezos",
        src: 'https://links.papareact.com/k2j',
        profile: "https://links.papareact.com/snf",
    },
    {
        name: "Mark Zuckenberg",
        src: 'https://links.papareact.com/xql',
        profile: "https://links.papareact.com/snf",
    },
    {
        name: "Bill Gates",
        src: 'https://links.papareact.com/4u4',
        profile: "https://links.papareact.com/zvy",
    },
]

const Stories = () => {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories && stories.map((story, index)=> (
                <StoryCard name={story.name} src={story.src} profile={story.profile} key={index} />
            ))
                
            }
        </div>
    )
}

export default Stories