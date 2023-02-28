import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

interface Props {
  value: string[];
}

const CommentBox: React.FC<Props> = (props) => {
  const { value: commentVal } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, setText] = useState("");
  const toast = useToast();

  const handleSaveClick = () => {
    if (text.trim() !== "") {
      setIsModalOpen(false);
    } else {
      toast({
        description: "Please enter review to be updated",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    setText("");
  };

  return (
    <TableContainer display="block" >
      <Table variant="simple" colorScheme="teal" overflowX="auto">
        <Thead>
          <Tr>
            <Th fontWeight="medium" fontSize="md">Reviews: </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {commentVal.map((comments, index) => (
            <Tr key={index}>
              <Td>
                <Box as="h2" fontSize="md" maxWidth="50%">
                  <Text>{comments}</Text>
                </Box>
              </Td>

              <Td>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  as={FaPencilAlt}
                  ml="2"
                />
              </Td>

              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Enter Text</ModalHeader>
                  <ModalBody>
                    <Input
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" onClick={handleSaveClick}>
                      Save
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CommentBox;