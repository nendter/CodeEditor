import "./BottomBar.css";

export function BottomBar({ className, children }){
    return (
        <div className={"bottom-bar " + className}>
            {children}
        </div>
    )
}