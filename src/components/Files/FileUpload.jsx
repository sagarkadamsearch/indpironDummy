// src/components/FileUpload.js
import React, { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

registerPlugin(FilePondPluginFileValidateType);

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  return (
    <div>
      <div>File Upload</div>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={3}
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
      {files.length > 0 && (
        <div>
          <div>Uploaded Files:</div>
          <ul>
            {files.map(file => (
              <li key={file.id}>{file.filename}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
