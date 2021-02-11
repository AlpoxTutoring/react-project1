import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function ArticleUploadPage() {

    const [Inputs, setInputs] = useState({
        title: "",
        subtitle: "",
        content: ""
    })

    const { title, subtitle, content } = Inputs;

    const [contentType, setcontentType] = useState("html")

    const contentTypeOptions = [
    {value:0, label: 'html'},
    {value:1, label: 'markdown'}
    ]

    const onContentTypeChange = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.value)
        if (e.currentTarget.value == 0) {
            setcontentType("html")
        } else {
            setcontentType("html")
        }
    }

    return (
        <div style={{ width: '100%', height: '30vh', textAlign: 'center' }}>
            <div>
                <input placeholder="Title" />
                <br />
                <input placeholder="Subtitle" />
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
                    onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            console.log( { event, editor, data } );
                        } }
                    editor={ClassicEditor}
                    data="<p>Writing Zone!</p>"
                    onReady={(editor) => {
                        console.log("Editor is ready to use!", editor);
                    }}
                />
            </div>
        </div>
    )
}

export default ArticleUploadPage
