import { Box, Button, Container, Snackbar, Stack, TextField } from '@mui/material';
import * as React from 'react';
import { useRef, useState } from 'react';

interface ILabel {
    key: string;
    name: string;
    title: string;
    date: string;
    medium: string;
    price: string;
}

const formatText = (input: string): Array<ILabel> => {
    // Step 1: break into raw lines
    const rawLines = input.split("\n");

    const rows = [];
    let buffer = "";

    // Step 2: rebuild rows until we have 4 tabs (5 columns)
    for (let line of rawLines) {
        if (!line.trim()) continue;

        buffer += (buffer ? "\n" : "") + line;

        const tabCount = (buffer.match(/\t/g) || []).length;

        if (tabCount >= 4) {
            rows.push(buffer);
            buffer = "";
        }
    }

    // Step 3: parse and create array to return
    return rows.map((row, index) => {
        const parts = row.split("\t");

        const [name, title, date, medium, price] = parts;

        return {
            key: `${name}${title}${medium}${index}`,
            name: name.trim(),
            date,
            title,
            medium,
            price
        }
    });
}

const ShowLabels = () => {
    const [toastMessage, setToastMessage] = useState('');
    const [text, setText] = useState('')
    const [labels, setLabels] = useState<Array<ILabel>>([]);

    const textRef = useRef<HTMLElement>(null);

    const handleCopy = async () => {
        if (!textRef.current) return;

        const htmlContent = textRef.current.innerHTML;
        const textContent = textRef.current.innerText;

        try {
            const blobHtml = new Blob([htmlContent], { type: 'text/html' });
            const blobText = new Blob([textContent], { type: 'text/plain' });

            const data = [new ClipboardItem({ 'text/html': blobHtml, 'text/plain': blobText })];
            await navigator.clipboard.write(data);
            setToastMessage('Labels Copied!');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };


    React.useEffect(() => {
        setLabels(formatText(text));
    }, [text])

    return (
        <Container>
            <Snackbar
                message={toastMessage}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={toastMessage !== ''}
                autoHideDuration={1500}
                onClose={() => setToastMessage('')}
            />
            <Stack>
                <Stack alignItems={'end'}>
                    <Button onClick={() => handleCopy()}>
                        {'Copy'}
                    </Button>
                </Stack>
                <Stack direction={'row'} gap={2}>
                    <TextField
                        fullWidth
                        multiline
                        defaultValue={text}
                        placeholder={'Paste label rows here from spreadsheet.'}
                        onChange={(e) => setText(e.target.value)}
                        sx={{ maxHeight: '400px', overflow: 'auto' }}
                    />
                    <Container sx={{
                        border: 'solid 1px #5a5',
                        borderRadius: '4px',
                        position: 'relative',
                        maxHeight: '400px',
                        overflow: 'auto'
                    }}>
                        <Box ref={textRef} sx={{ overflow: 'auto' }}>
                            {labels.map((label) => {
                                return (
                                    <React.Fragment key={label.key}>
                                        {label.name}{'\t'}{label.date}
                                        <br />
                                        <strong>{label.title}</strong>
                                        <br />
                                        {label.medium}
                                        <br />
                                        {label.price.match(/[^0-9.]/) ? label.price : `$${label.price}`}
                                        <br /><br /><br /><br />
                                    </React.Fragment>
                                )
                            })}
                        </Box>
                    </Container>
                </Stack>
            </Stack>
        </Container>
    )
};

export default ShowLabels;
