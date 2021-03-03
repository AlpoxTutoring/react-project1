/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from 'atoms/button/Button';
import useInputs from 'Hooks/useInputs';
import { useState } from 'react';
import { BaseUrl } from 'config/constants';
import { requestAxios } from 'config/commonRequest';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

const Editor = () => {
  const history = useHistory();
  console.log(`Editor history 체크`, history);

  const [content, setContent] = useState('');
  const [subtitle, setSubtitle] = useState('total');
  const [{ title }, onChange] = useInputs({ title: '' });

  //   console.log(localStorage.getItem('ACCESS_TOKEN'));

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await requestAxios.post(`${BaseUrl}/boards`, { title, subtitle, content });
      const { status, data } = response;

      if (status === 201) {
        // console.log(data, history);
        history.push('/freeboard');
      }
    } catch (error) {
      console.log(error);
      return error;
    }

    // try {
    //   const response = await requestAxios.post(`${BaseUrl}/boards`, { title, subtitle, content });
    //   console.log(response);
    // } catch (error) {
    //   return error;
    // }
  };

  const handleChange = e => {
    setSubtitle(e.target.value);
  };

  const editorChange = (event, editor) => {
    setContent(editor.getData());
    console.log(content);
  };

  return (
    <div css={editorWrapperStyle}>
      <form>
        <select css={selectStyle} value={subtitle} onChange={handleChange}>
          <option value="total">전체</option>
          <option value="freeboard">자유게시판</option>
        </select>
        <input
          type="text"
          required
          name="title"
          value={title}
          css={inputStyle}
          placeholder="제목을 입력해 주세요"
          onChange={onChange}
        />
        <CKEditor
          editor={ClassicEditor}
          config={{ placeholder: '여기에 글을 작성하실 수 있습니다' }}
          // data="<p>여기에 글을 작성하실 수 있습니다</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={editorChange}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
        <ButtonWrarpper>
          <Button onClick={handleSubmit} color={'deepskyblue'}>
            제출하기
          </Button>
        </ButtonWrarpper>
      </form>
    </div>
  );
};

export default Editor;

const selectStyle = css`
  border: 1px solid #c4c4c4;
  height: 30px;
  width: 120px;
`;
const inputStyle = css`
  width: -webkit-fill-available;
  border: 1px solid #c4c4c4;
  padding: 10px;
`;
const editorWrapperStyle = css`
  margin: 0 auto;
  width: 1200px;
  margin-top: 50px;
`;
const ButtonWrarpper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
