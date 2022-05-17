import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './app';
import AuthService from "./service/auth-service";
import ImageUploader from "./service/image-uploader";
import ImageFileInput from "./components/image-file-input/image-file-input";

const authService = new AuthService(process.env);
const imageUploader = new ImageUploader();
const FileInput = props => (
    <ImageFileInput {...props} imageUploader={imageUploader}/>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App authService={authService} FileInput={FileInput}/>
    </React.StrictMode>
);
