import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios'

function BoardUpload(props) {

    const token = window.localStorage.getItem('accessToken')


    const [Inputs, setInputs] = useState({
        title: "",
        subtitle: ""
    })

    const [content, setContent] = useState("")

    const onContentChange = (e) => {
        setContent(e.data)
    }

    const { title, subtitle } = Inputs;

    const onChange = (e) => {
    const { value, name } = e.target; 
    setInputs(prev=>({
      ...prev, 
      [name]: value 
        })
    )};

    const [contentType, setcontentType] = useState("html")

    const contentTypeOptions = [
    {value:0, label: 'html'},
    {value:1, label: 'markdown'}
    ]

    const onContentTypeChange = (e) => {
        e.preventDefault();
        if (e.currentTarget.value === 0) {
            setcontentType("html")
        } else {
            setcontentType("markdown")
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        // const config = {
        //     header:{ 'Authorization': `Bearer ${token}`}
        // }

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        const body = {
            title:title,
            subtitle:subtitle,
            content:content,
            contentType:contentType
        }

        axios.post('https://tutor-dev-api.alpox.dev/boards', body, {
            headers : headers
        })
            .then((response) => {
                if (response.status === 201) {
                    alert('업로드가 성공적으로 완료되었습니다. 잠시후 자동으로 메인페이지로 이동합니다.')
                    setTimeout(() => {
                        props.history.push('/')
                    }, 3000);
                } else {
                    alert('업로드에 실패했습니다.')
                }
            })
            .catch(err => {
                console.log(err)
                alert('서버가 장애에요')
            })
    }


    return (
        <form onSubmit={onSubmit} style={{ marginTop: '50px', width: '100%', height: '30vh', textAlign: 'center' }}>
            <div>
                <input value={title} name="title" onChange={onChange} placeholder="Title" />
                <br />
                <input value={subtitle} name="subtitle" onChange={onChange} placeholder="Subtitle" />
                <br />
            <select onChange={onContentTypeChange}>
                        {contentTypeOptions.map((item, index) => (
                            <option key={index} value={item.value}>{item.label}</option>
                        ))}
                    </select>
            </div>
            <br />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            </div>
            <div style={{ margin:'auto', width:'80%'}}>
                <CKEditor
                    style={{minHeight:'300px'}}
                    value={content}
                    name="content"
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        onContentChange({data});
                    }}
                    editor={ClassicEditor}
                    
                    data="<p>Writing Zone!</p>"
                    onReady={(editor) => {
                        onContentChange(editor.data)
                    }}
                />
                <button onSubmit={onSubmit} >Upload</button>
            </div>
        </form>
    )
}

export default BoardUpload
