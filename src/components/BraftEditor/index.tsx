import React, { useState, useContext } from 'react';
import myContext from '@/utils/createContext';
import {} from 'umi';
import BraftEditor from 'braft-editor';
import './index.scss';
import 'braft-editor/dist/index.css';
import { buildPreviewHtml } from './PreviewHtml';
import 'braft-extensions/dist/code-highlighter.css';
import CodeHighlighter from 'braft-extensions/dist/code-highlighter.js';
BraftEditor.use(
  CodeHighlighter({
    syntaxs: [
      {
        name: 'JavaScript',
        syntax: 'javascript',
      },
      {
        name: 'HTML',
        syntax: 'html',
      },
      {
        name: 'CSS',
        syntax: 'css',
      },
    ],
  }),
);

// 写文章
const controls: any = [
  'undo',
  'redo',
  'separator',
  'font-size',
  'line-height',
  'letter-spacing',
  'separator',
  'text-color',
  'bold',
  'italic',
  'underline',
  'strike-through',
  'separator',
  'superscript',
  'subscript',
  'remove-styles',
  'emoji',
  'separator',
  'text-indent',
  'text-align',
  'separator',
  'headings',
  'list-ul',
  'list-ol',
  'blockquote',
  'code',
  'separator',
  'link',
  'separator',
  'hr',
  'separator',
  'media',
  'separator',
  'clear',
];

// 指定不需要展示的控件
const excludeControls: Array<any> = [
  'letter-spacing',
  'line-height',
  'clear',
  'headings',
  'list-ol',
  'list-ul',
  'remove-styles',
  'superscript',
  'subscript',
  'hr',
  'text-align',
];
// 预览按钮

function NextBraftEditor() {
  const [contnent, SetContent] = useState('');
  let OnContent: any = useContext(myContext);
  // console.log(OnContent)
  // 打开新页面 预览
  const preview = () => {
    if (window.previewWindow) {
      window.previewWindow.close();
    }
    window.previewWindow = window.open();
    window.previewWindow.document.write(buildPreviewHtml(contnent));
    window.previewWindow.document.close();
  };

  // 预览按钮
  const extendControls: Array<any> = [
    {
      key: 'custom-button',
      type: 'button',
      text: '预览',
      onClick: preview,
    },
  ];

  return (
    <BraftEditor
      className="my-editor"
      onChange={(e: any) => {
        SetContent(e);
        OnContent.SetContent(BraftEditor.createEditorState(e).toHTML());
      }}
      // excludeControls={excludeControls}
      extendControls={extendControls}
      controls={controls}
      placeholder="请输入正文内容"
    />
  );
}

export default NextBraftEditor;
