import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useDispatch } from "react-redux";
import { removeUser } from "./userSlice";

export default function RemoveUser({index}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const dispatch= useDispatch();

  return (
    <>
    <Button onPress={onOpen} isIconOnly aria-label="Like" color="danger">
      <i className="fa-solid fa-trash"></i>
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Are You Sure ?</ModalHeader>
              <ModalBody>
                <p>You want to remove this user </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={()=>{
                  dispatch(removeUser(index)),
                  onClose();
                }}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
