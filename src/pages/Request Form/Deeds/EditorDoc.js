import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

const EditorDoc = (props) => {
  const { PrintPage } = props;

  return (
    <CKEditor
      onReady={(editor) => {
        console.log("Editor is ready to use!", editor);

        // Insert the toolbar before the editable area.
        editor.ui
          .getEditableElement()
          .parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
          );

        this.editor = editor;
      }}
      onError={(error, { willEditorRestart }) => {
        // If the editor is restarted, the toolbar element will be created once again.
        // The `onReady` callback will be called again and the new toolbar will be added.
        // This is why you need to remove the older toolbar.
        if (willEditorRestart) {
          this.editor.ui.view.toolbar.element.remove();
        }
      }}
      onChange={(event, editor) => console.log({ event, editor })}
      editor={DecoupledEditor}
      data='      <p style="text-align: justify" }}>
        Berdasarkan hal-hal tersebut, Para Pihak sepakat untuk mengadakan
        Perjanjian ini dengan syarat dan ketentuan sebagai berikut:
      </p>'
      config={{ toolbarLocation: "top" }}
    />
  );
};

export default EditorDoc;
