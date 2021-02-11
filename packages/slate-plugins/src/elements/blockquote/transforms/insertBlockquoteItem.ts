import { wrapNodes } from '../../../';
import { Editor, Transforms, NodeEntry, Ancestor, Path } from 'slate';

export const insertBlockquoteItem = (
    editor: Editor,
    currentBlockquote: NodeEntry<Ancestor>) => {
    const [node,path] = currentBlockquote;
    
    Transforms.unwrapNodes(editor, { at: path });
    editor.insertBreak();
    Transforms.wrapNodes(editor, node);

};
