import { StoreFactory, StoreOptions } from '@palmyralabs/palmyra-wire';
import { MutableRefObject } from 'react';
import { IAclAPIEditor } from './types';
interface PalmyraAclEditorProps {
    groupId: string;
    storeFactory?: StoreFactory<any, StoreOptions>;
    editorRef?: MutableRefObject<IAclAPIEditor>;
}
declare const useAclAPIEditor: (props: PalmyraAclEditorProps) => {
    aclData: any;
    editorRef: MutableRefObject<IAclAPIEditor>;
    refresh: () => void;
    saveData: () => void;
};
export { useAclAPIEditor };
