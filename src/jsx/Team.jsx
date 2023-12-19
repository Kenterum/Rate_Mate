import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import nijat from "../assets/nijat.png";
import murad from "../assets/murad.png"
import aykhan from "../assets/aykhan.png"
import tural from "../assets/tural.png"
import suleyman from "../assets/suleyman.png"

export default function Team() {
  return (
    <>
  <h1 className='text-center text-6xl'>Our Team</h1>
    <div className="px-80  mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
      {/* Nijat Ahmadov */}
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none"
      >
        <Image
          className="object-cover"
          height={200}
          src={nijat}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Nijat Ahmadov</p>
          <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            About Me
          </Button>
        </CardFooter>
      </Card>
      {/* Tural Gasimov */}
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none"
      >
        <Image
          className="object-cover"
          height={200}
          src={tural}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Tural Gasimov</p>
          <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            About Me
          </Button>
        </CardFooter>
      </Card>
      {/* Suleyman Mammadov */}
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none"
      >
        <Image
          className="object-cover"
          height={200}
          src={suleyman}
        />

        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Suleyman Mammadov</p>
          <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            About Me
          </Button>
        </CardFooter>
      </Card>
      {/* Murad Muradzada */}
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none"
      >
        <Image
          className="object-cover"
          src={murad}
        />

        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Murad Muradzada</p>
          <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            About Me
          </Button>
        </CardFooter>
      </Card>
      {/* Aykhan Ismayilzada */}
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none"
      >
        <Image
          className="object-cover"
          height={200}
          src={aykhan}
        />

        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Aykhan Ismayilzada</p>
          <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            About Me
          </Button>
        </CardFooter>
      </Card>
     
    </div>
    </>
  );
}
