// import Editor from 'src/ckeditor5/build/ckeditor'
// import { CKEditor } from '@ckeditor/ckeditor5-react'
// import React from 'react'

// export const TextEditor = () => {
//   const editorConfigs = {
//     toolbar: {
//       items: [
//         'heading',
//         '|',
//         'bold',
//         'italic',
//         'link',
//         'bulletedList',
//         'numberedList',
//         'outdent',
//         'indent',
//         '|',
//         'imageUpload',
//         'blockQuote',
//         'insertTable',
//         'mediaEmbed',
//         'undo',
//         'redo',
//         'alignment',
//         'code',
//         'codeBlock',
//         'findAndReplace',
//         'fontColor',
//         'fontFamily',
//         'fontSize',
//         'fontBackgroundColor',
//         'highlight',
//         'horizontalLine',
//         'htmlEmbed',
//         'imageInsert',
//       ],
//     },
//     Language: 'en',
//     image: {
//       toolbar: [
//         'imageTextAlternative',
//         'toggleImageCaption", imageStyle:inline',
//         'imageStyle:block',
//         'imageStyle:side',
//       ],
//     },
//     table: { contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'] },
//   }
//   return (
//     <>
//       <CKEditor
//         editor={Editor}
//         config={editorConfigs}
//         data="<p>Hello</p>"
//         onChange={(event, editor) => {
//           const data = editor.getData()
//           console.log(data)
//         }}
//       />
//     </>
//   )
// }
