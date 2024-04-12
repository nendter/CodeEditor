import "./Editor.css";
import {FullScreenLayout} from "../layout/fullscreen/FullScreenLayout";
import {TopBar} from "../layout/topbar/TopBar";
import {createContext, useState} from "react";
import {EditorLanguages, EditorToolBar} from "./toolbar/EditorToolBar";
import {BottomBar} from "../layout/bottombar/BottomBar";
import {Icon, Icons} from "../icon/Icon";
import {Code} from "./code/Code";

export const EditorContext = createContext({});

export const EditorPath = "/editor";
export function Editor(){

    const [language, setLanguage] = useState(EditorLanguages[0]);

    return (
        <EditorContext.Provider value={{
            language: language,
            setLanguage: setLanguage
        }}>
            <FullScreenLayout>
                <TopBar>
                    <div className="editor-top-bar-content">
                        <EditorToolBar></EditorToolBar>
                        <button className="primary">
                            <p>Run</p>
                        </button>
                    </div>
                </TopBar>

                <Code></Code>

                <BottomBar className={"space-between"}>
                    <div className="row">
                        <div className="cell">
                            <p>Line 256</p>
                        </div>
                        <div className="cell">
                            <p>Character 12</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="cell right">
                            <Icon icon={Icons.Bug}></Icon>
                            <p>Debug</p>
                        </div>
                    </div>
                </BottomBar>
            </FullScreenLayout>
        </EditorContext.Provider>
    )
}