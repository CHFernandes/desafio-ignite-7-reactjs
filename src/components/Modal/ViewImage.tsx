import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        mx="auto"
        width="auto"
        height="auto"
        maxHeight="600px"
        maxWidth="900px"
      >
        <ModalBody p="0">
          <Image src={imgUrl} maxHeight="600px" maxWidth="900px" />
        </ModalBody>
        <ModalFooter
          background="pGray.800"
          height="40px"
          borderBottomRadius="5px"
        >
          <Link href={imgUrl} isExternal fontSize="1rem" mr="auto">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
