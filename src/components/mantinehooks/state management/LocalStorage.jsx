import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

export default function LocalStorage() {
    const [colorScheme, setColorScheme] = useLocalStorage < 'light' | 'dark' >
        ({
            key: 'color-scheme',
            defaultValue: 'light',
        });

    const toggleColorScheme = () =>
        setColorScheme((current) =>
            current === 'dark' ? 'light' : 'dark'
        );

    return (
        <ActionIcon onClick={toggleColorScheme}>
            {colorScheme === 'dark' ? <IconSun /> : <IconMoonStars />}
        </ActionIcon>
    );
}