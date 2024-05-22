// src/components/FileUpload.js
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

registerPlugin(FilePondPluginFileValidateType);

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>File Upload</Typography>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={3}
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
      {files.length > 0 && (
        <Box mt={2}>
          <Typography variant="h6">Uploaded Files:</Typography>
          <ul>
            {files.map(file => (
              <li key={file.id}>{file.filename}</li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default FileUpload;
