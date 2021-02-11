import { Ancestor, Editor, NodeEntry } from 'slate';
import { ELEMENT_LI } from '..';
import { getBlockquote } from './queries/getBlockquote';
import { insertBlockquoteItem } from './transforms/insertBlockquoteItem';

const CHILD_RULES = [{
    markup: '*',
    type: ELEMENT_LI,
}];
export const onKeyDownBlockquote = () => (
  {key}: KeyboardEvent,
  editor: Editor
) => {
    const res = getBlockquote(editor) as NodeEntry<Ancestor>;

        if (!res) return;

        for (const {
            markup,
        } of CHILD_RULES) {

            if (markup !== key) continue;
            
            insertBlockquoteItem(editor, res);
        }
};
