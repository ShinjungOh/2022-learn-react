class ImageUploader {
    async upload(file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "docs_upload_example_us_preset");
        const result = await fetch(
            "https://api.cloudinary.com/v1_1/demo/image/upload",
            {
                method: "POST",
                body: formData,
            }
        );
        return await result.json();
    }
}

export default ImageUploader;