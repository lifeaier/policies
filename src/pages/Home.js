import React from 'react';
import { Box, Typography, Link, Paper, } from '@mui/material';

export default function Home() {
    
    return (
        <div className="content-layout">

            <Box
                sx={{
                    height: '100vh',
                    bgcolor: '#f5f5f5',
                    display: 'flex',
                    justifyContent: 'center',
                    overflow: 'auto',
                    p: 1,
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        width: '100%',
                        maxWidth: 900,
                        p: { xs: 3, md: 6 },
                        borderRadius: 2,
                        my: 'auto',
                    }}
                >

                    <Box mt={2}>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                            Нууцлалын бодлого (Privacy Policy)
                        </Typography>
                        <Link
                            href={`/privacy-policy`}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                        >
                            https://www.lifeaier.com/privacy-policy
                        </Link>
                    </Box>

                    <Box mt={2}>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                            Үйлчилгээний нөхцөл (Terms of Service)
                        </Typography>
                        <Link
                            href={`/term-of-service`}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                        >
                            https://www.lifeaier.com/term-of-service
                        </Link>
                    </Box>

                    <Box mt={2}>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                            Хувийн мэдээлэл устгах (Data Deletion)
                        </Typography>
                        <Link
                            href={`/data-deletion`}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                        >
                            https://www.lifeaier.com/data-deletion
                        </Link>
                    </Box>

                </Paper>

            </Box>
            
        </div>
    );
}