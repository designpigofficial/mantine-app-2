/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import Link from 'next/link';
import { Button, MantineProvider, Group } from '@mantine/core';

function NextLinkButton() {
    return (
        <>
        <MantineProvider theme={{ activeStyles: { transform: 'scale(0.95)' } }}>
            <Group position="center" mt="xl">
        <Link href="https://nextjs.org" target="_blank" passHref>
        <Button component="a" mx="auto">Github</Button>
        </Link>
            </Group>
        </MantineProvider>
        </>
    );
}

export default NextLinkButton;