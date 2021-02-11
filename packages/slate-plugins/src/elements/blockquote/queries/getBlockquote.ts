import { Editor, Location } from 'slate';
import { BlockquotePluginOptions } from '..';
import { setDefaults } from '../../../common';
import { getParent } from '../../../common/queries/getParent';
import { someNode } from '../../../common/queries/someNode';
import { DEFAULTS_BLOCKQUOTE } from '../defaults';

export const getBlockquote = (
    editor: Editor,
    { at = editor.selection }: { at?: Location | null } = {},
    options?: BlockquotePluginOptions<'type'>
) => {
    const { blockquote: blockquoteOptions } = setDefaults(options, DEFAULTS_BLOCKQUOTE);

    const isBlockQuoteElement = (element: Element | any): element is Element => {
        return element?.type === blockquoteOptions.type || false;
    }

    const [ node, path ] = (editor.selection && getParent(editor, editor.selection)) || [];

    return isBlockQuoteElement(node) && path && [node, path];
    
};
