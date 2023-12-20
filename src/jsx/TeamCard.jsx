import { Card, CardFooter, Image, Button } from "@nextui-org/react";

import React, { useState } from 'react'

const TeamCard = ({ member }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none team-card relative"
        >
            <div className={`overlay ${showInfo ? 'info-visible' : ''}`}>
                <h3 className="text-white text-center text-2xl">About</h3>
                <p className="text-white mt-5">{member.about} Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus a facilis voluptatibus, ex repudiandae, molestiae laudantium blanditiis rem, alias dolorum pariatur ab illo error.</p>
            </div>
            <Image
                className="object-cover"
                height={200}
                src={member.src}
            />
            <CardFooter className="justify-between z-20 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1">
                <p className="text-tiny text-white/80">{member.name}</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm" onClick={() => setShowInfo((showInfo) => !showInfo)}>
                    About Me
                </Button>
            </CardFooter>
        </Card>
    )
}

export default TeamCard;
