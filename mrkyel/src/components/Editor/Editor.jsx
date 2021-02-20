/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from 'atoms/buttons/Button';
import useInputs from 'Hooks/useInputs';
import { useState } from 'react';
import { BaseUrl } from 'config/constants';
import { requestAxios } from 'config/commonRequest';

const Editor = ({ history }) => {
  const [content, setContent] = useState('');
  const [subtitle, setSubtitle] = useState('total');
  const [{ title }, onChange] = useInputs({ title: '' });

  console.log(localStorage.getItem('ACCESS_TOKEN'));

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('제출할껀뎅');
    try {
      const res = await requestAxios.post(`${BaseUrl}/boards`, { title, subtitle, content });

      console.log(res);
      history.push('/freeboard');
    } catch (error) {
      return error;
    }
  };

  const handleChange = e => {
    setSubtitle(e.target.value);
  };

  const editorChange = (event, editor) => {
    setContent(editor.getData());
    console.log(content);
  };

  return (
    <div css={containerStyle}>
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
          onChange={editorChange}
        />

        <Button onClick={handleSubmit} style={{ float: 'right', padding: 5 }} color={'deepskyblue'}>
          제출하기
        </Button>
      </form>
    </div>
  );
};

export default Editor;

const containerStyle = css`
  margin: 0 auto;
  width: 1200px;
  margin-top: 50px;
`;

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
