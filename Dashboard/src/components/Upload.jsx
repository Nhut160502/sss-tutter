import React, { useEffect, useState } from 'react'
import { Button, Image, Input } from 'antd'
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'
const Upload = (props) => {
  const { getValue, id } = props
  const [fileList, setFileList] = useState([])

  const handleChange = (e) => {
    setFileList([])
    const arr = []
    const files = []
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i]
      files.push(file)
      arr.push({ name: file.name, url: URL.createObjectURL(file), file: file })
      setFileList(arr)
    }
    getValue && getValue(files)
  }

  const handleDelete = (url) => {
    const files = fileList.filter((file) => file.url !== url)
    setFileList(files)
    if (fileList.length <= 1) {
      getValue([])
    } else {
      getValue(files)
    }
  }

  useEffect(() => {
    return () => {
      fileList.length > 0 && fileList.map((file) => URL.revokeObjectURL(file.url))
    }
  }, [fileList])
  return (
    <Wrapper>
      <Input type="file" hidden id={`upload-${id}`} onChange={(e) => handleChange(e)} multiple />
      <Button onClick={() => document.getElementById(`upload-${id}`).click()}>
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
                <DeleteOutlined onClick={() => handleDelete(file.url)} />
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
Upload.propTypes = {
  getValue: PropTypes.func,
  id: PropTypes.string,
}

export default Upload
