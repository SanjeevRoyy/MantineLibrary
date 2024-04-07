import React from 'react'
import { Modal, Button, TextInput, PasswordInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';


const FocusReturn = () => {

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Authentication">
                <TextInput
                    label='Your Name'
                    placeholder='enter your name'
                >
                </TextInput>
                <PasswordInput
                    label='Enter password'
                >
                </PasswordInput>
                <Button>submit </Button>
            </Modal>

            <Button onClick={open}>Open modal</Button>
        </>


    )
}

export default FocusReturn