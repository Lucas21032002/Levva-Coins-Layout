import { ReactNode, RefObject } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton } from "../Modal/styles";
import { X } from "phosphor-react"

interface ModalProps {
    closeModalRef?: RefObject<HTMLButtonElement>;
    title: string;
    trigger: ReactNode;
    children: ReactNode;
}

export function Modal({title, trigger, children, closeModalRef}: ModalProps){
    return (
        < Dialog.Root >
            <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
            <Dialog.Portal>
                <Overlay>
                    <Content>
                        <Dialog.Title>{title}</Dialog.Title>
                        <CloseButton ref={closeModalRef}>
                            <X size={24} />
                        </CloseButton>
                        {children}
                    </Content>
                </Overlay>
            </Dialog.Portal>
        </Dialog.Root >
    )
}