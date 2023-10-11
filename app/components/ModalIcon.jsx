import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Image from "next/image";

export function ModalIcon({ title, body, action }) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [size, setSize] = React.useState('xl')

  const handleOpen = (size) => {
    setSize(size)
    onOpen();
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <button onClick={() => handleOpen(size)}>
          <Image src="/questions.png" alt="preguntas frecuentes" width="64" height="64" />
        </button>
      </div>
      <Modal
        size={size}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {title}
              </ModalHeader>
              <ModalBody>
                {body}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {action && <Button color="primary" onPress={onClose}>
                  {action}
                </Button>}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
