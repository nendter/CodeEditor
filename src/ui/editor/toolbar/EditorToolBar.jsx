import {Icon, Icons} from "../../icon/Icon";
import "./EditorToolBar.css";
import {useContext} from "react";
import {EditorContext} from "../Editor";

export const EditorLanguages = [
    {
        id: "java",
        icon: Icons.Java,
        label: "Java"
    },
    {
        id: "javascript",
        icon: Icons.JavaScript,
        label: "JavaScript"
    },
]

export function EditorToolBar(){
    const editorCtx = useContext(EditorContext);
    return (
        <div className={"editor-toolbar"}>
            {EditorLanguages.map(language =>
                <button key={language.id}
                        className={`tool ${editorCtx.language?.id === language.id ? "selected":""}`}
                        onClick={() => editorCtx.setLanguage(language)}>
                    <Icon icon={language.icon}></Icon>
                    <p className="label">{language.label}</p>
                </button>
            )}
        </div>
    )
}