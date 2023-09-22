import React, { useEffect, useState } from 'react'
import { Button, Image, Input } from 'antd'
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons'
import { styled } from 'styled-components'
function Upload(props) {
  const [fileList, setFileList] = useState([])

  const handleChange = (e) => {
    setFileList([])
    const arr = []
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i]
      arr.push({ name: file.name, url: URL.createObjectURL(file), file: file })
      setFileList(arr)
    }
  }

  useEffect(() => {
    return () => {
      fileList.length > 0 && fileList.map((file) => URL.revokeObjectURL(file.url))
    }
  }, [fileList])
  return (
    <Wrapper>
      <Input {...props} type="file" hidden id="upload" onChange={handleChange} multiple />
      <Button onClick={() => document.getElementById('upload').click()}>
        <UploadOutlined />
        Upload
      </Button>
      {fileList.length > 0 && (
        <>
          <ul className="preview-name">
            {fileList.map((file) => (
              <li key={file.url}>
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>
                <DeleteOutlined />
              </li>
            ))}
          </ul>
          <ul className="preview-image">
            {fileList.map((file) => (
              <li key={file.url}>
                <Image src={file.url} />
              </li>
            ))}
          </ul>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ul {
    margin-bottom: 0;
    margin-top: 0.5rem;
    padding-left: 1rem;
    li {
      list-style: none;
    }

    &.preview-name li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      & + li {
        margin-bottom: 0.25rem;
      }
      svg {
        cursor: pointer;
        font-size: 18px;
        color: #ff4d4f;
      }
    }
    &.preview-image {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 1rem;
      img {
        width: 100%;
      }
    }
  }
`

export default Upload
