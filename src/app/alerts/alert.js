export default function Alert({children}){

    return(
        <div className="static">
            <div className="absolute bottom-0 w-full left-0 bg-red-100 border-t border-b border-red-500 text-blue-red px-4 py-3" role="alert">
                {children}
            </div>
        </div>
    )
}