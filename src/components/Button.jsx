export default function Button({children,id,onSelect}){
     
    return(
        <button onClick={() => onSelect(id)} className="btn">{children}</button>
    )
}