import React from 'react';
import Storycard from './Storycard';

const stories =[
    {
        name:"Sonny Sangha",
        src:"https://lonks.papareact.com/zof",
        profile:"https://lonks.papareact.com/l4v"
    },
    {
        name:"Elon Musk",
        src:"https://lonks.papareact.com/4zn",
        profile:"https://lonks.papareact.com/kxk"
    },
    {
        name:"Jeff Bezos",
        src:"https://lonks.papareact.com/k2j",
        profile:"https://lonks.papareact.com/f0p"
    },
    {
        name:"Mark Zukerberg",
        src:"https://lonks.papareact.com/xql",
        profile:"https://lonks.papareact.com/snf"
    },
    {
        name:"Bill Gates",
        src:"https://lonks.papareact.com/4u4",
        profile:"https://lonks.papareact.com/zvy"
    },
];

function Stories() {
    return (
        <div className='fles justify-center space-x-3 mx-auto'>
            {stories.map(story =>(
                <Storycard key={story.src} name={story.name} src={story.src} profile={story.profile}/>
            ))}
        </div>
    )
}

export default Stories
