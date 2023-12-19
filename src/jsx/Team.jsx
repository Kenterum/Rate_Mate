import React, { useState } from "react";
import { Card, CardFooter, Image, Button, Modal, ModalHeader, ModalBody } from "@nextui-org/react";
import nijat from "../assets/nijat.png";
import murad from "../assets/murad.png";
import aykhan from "../assets/aykhan.png";
import tural from "../assets/tural.png";
import suleyman from "../assets/suleyman.png";
import "../css/Team.css";

export default function Team() {
  const [visible, setVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [blurMemberName, setBlurMemberName] = useState(null);

  const members = [
    { name: "Nijat Ahmadov", src: nijat, about: "Nijat, önemli bir proje üzerinde çalışıyor..." },
    { name: "Tural Gasimov", src: tural, about: "Tural, yazılım geliştirme konusunda deneyimli bir mühendis..." },
    { name: "Suleyman Mammadov", src: suleyman, about: "Suleyman, tasarım ve kullanıcı deneyimi konularında uzmandır..." },
    { name: "Murad Muradzada", src: murad, about: "Murad, yeni teknolojilere ilgi duyar ve sürekli öğrenir..." },
    { name: "Aykhan Ismayilzada", src: aykhan, about: "Aykhan, işbirliği ve ekip çalışması konusunda liderdir..." },
  ];

  const toggleMemberInfo = (member) => {
    if (blurMemberName === member.name) {
      setBlurMemberName(null);
      setSelectedMember(null);
      setVisible(false);
    } else {
      setSelectedMember(member);
      setBlurMemberName(member.name);
      setVisible(true);
    }
  };

  const closeModal = () => {
    setVisible(false);
    setBlurMemberName(null);
    setSelectedMember(null);
  };

  return (
    <>
      <h1 className='text-center text-6xl'>Our Team</h1>
      <div className="px-80 mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4">
        {members.map((member, index) => (
          <Card
            key={index}
            className="team-card"
            isFooterBlurred
            radius="lg"
          >
            <Image
              src={member.src}
              height={200}
              className={`team-image ${blurMemberName === member.name ? 'blur-effect' : ''}`}
            />
            <CardFooter className="team-footer">
              <p className="text-tiny text-black/80">{member.name}</p>
              <Button
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
                onClick={() => toggleMemberInfo(member)}
              >
                About Me
              </Button>
            </CardFooter>
            <div className={`info-overlay ${blurMemberName === member.name ? 'show' : ''}`}>
              <p>About this user</p>
            </div>
          </Card>
        ))}
      </div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeModal}
      >
        <ModalHeader>
          <p>About {selectedMember?.name}</p>
        </ModalHeader>
        <ModalBody>
          <p>{selectedMember?.about}</p>
        </ModalBody>
      </Modal>
    </>
  );
}
