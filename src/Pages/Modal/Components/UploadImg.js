import React from 'react';
import styled from 'styled-components';

function UploadImg({ setUserImg }) {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
      setUserImg(file);
    }
  };

  return (
    <ImgWrapper>
      <ImgContainer onClick={() => imageUploader.current.click()}>
        <img ref={uploadedImage} />
      </ImgContainer>
      <ImgForm ref={imageUploader}>
        <label for="profile_photo" class="btn">
          Upload Image
        </label>
        <ImgSearch
          id="profile_photo"
          onChange={handleImageUpload}
          type="file"
          accept="image/*"
          multiple="false"
        />
      </ImgForm>
    </ImgWrapper>
  );
}

export default UploadImg;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: label {
    margin-top: 15px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 112.25px;
  height: 112.25px;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    border: 1px solid rgb(228, 228, 228);
    border-radius: 100%;
  }
`;

const ImgForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    margin-top: 15px;
  }
`;

const ImgSearch = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
`;
