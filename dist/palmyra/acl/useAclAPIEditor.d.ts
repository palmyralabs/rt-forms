import { StoreFactory, StoreOptions } from '@palmyralabs/palmyra-wire';
import { RefObject } from 'react';
import { IAclAPIEditor } from './types';
interface PalmyraAclEditorProps {
    groupId: string;
    storeFactory?: StoreFactory<any, StoreOptions>;
    editorRef?: RefObject<IAclAPIEditor>;
}
declare const useAclAPIEditor: (props: PalmyraAclEditorProps) => {
    aclData: any;
    editorRef: RefObject<IAclAPIEditor>;
    refresh: () => void;
    saveData: () => void;
};
export { useAclAPIEditor };
