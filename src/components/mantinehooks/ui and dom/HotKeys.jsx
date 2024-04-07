import { useState } from 'react';
import { getHotkeyHandler } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { TextInput } from '@mantine/core';
import { Notification } from '@mantine/core';

export default function HotKeys() {
    const [value, setValue] = useState("I've just used a hotkey to send a message");
    const handleSubmit = () => 
    console.log('handlesubmit working');
//     <Notification title="We notify you that">
//     You are now obligated to give a star to Mantine project on GitHub
//   </Notification>
        notifications.show({ title: 'Your message', message: value });
    
    const handleSave = () => 
    console.log('handlesave working');

        notifications.show({ title: 'You saved', color: 'teal', message: value }); 
    
   

    return (
        <>   
        <TextInput
      placeholder="Your message"
      label="Press ⌘+Enter or Ctrl+Enter when input has focus to send message"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={getHotkeyHandler([
        ['mod+Enter', handleSubmit],
        ['mod+S', handleSave],
      ])}
    />
     
    </>

      
    );
}