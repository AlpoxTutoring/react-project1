import React,{useState} from 'react'

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
        <div style={{display:'flex' ,alignItems:'center', justifyContent:'center'}}>
            <select onChange={onContentTypeChange}>
                {contentTypeOptions.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                ))}
            </select>
        </div>
    )
}

export default ArticleUploadPage
