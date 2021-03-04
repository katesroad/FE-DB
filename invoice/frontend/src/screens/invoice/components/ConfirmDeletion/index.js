import * as React from "react";
import { Button } from "components/lib";
import {
  Modal,
  ModalContent,
  ModalCloseBtn,
  ModalOpenBtn,
} from "components/lib/modal";
import { CofirmContent, ModalFooter, DeleteBtn } from "./styles";

export default function ComfirmDeletion({ id }) {
  const handleDelete = () => {
    console.log(`Delete invoice #${id}`);
    return false;
  };
  return (
    <Modal>
      <ModalOpenBtn>
        <DeleteBtn variant="danger">delete</DeleteBtn>
      </ModalOpenBtn>
      <ModalContent title="Comfirm Deletetion" aria-label="modal">
        <CofirmContent>
          Are you sure you want to delete invoice <span>#{id}? </span>
          This action cannot be undone.
        </CofirmContent>
        <ModalFooter>
          <ModalCloseBtn>
            <Button onClick={() => console.log("clsoe")}>Cancle</Button>
          </ModalCloseBtn>
          <ModalCloseBtn>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </ModalCloseBtn>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}