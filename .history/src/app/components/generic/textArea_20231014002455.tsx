export default function TextArea({label, value, placeholder, className, inputClassName, validationResult = true, validationMessage, messageClassName,  onChange, onBlur, onFocus}:{
    label?: string; 
    value?: string; 
    placeholder?: string; 
    inputClassName?: string;
    className?: string;
    validationResult?: boolean,
    validationMessage?: string,
    messageClassName?: string,
    onChange?: (value: any) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    }){

    function handleChange(value: string){
        return onChange ? onChange(value) : undefined 
    }
    function handleBlur(){
        return onBlur ? onBlur() : undefined 
    }
    function handleFocus(){
        return onFocus ? onFocus() : undefined 
    }

    return(
        <div className={`${className ?? ""} flex flex-col relative`}>
            <div className={`${label ? "" : "hidden"} p-2 text-xl}`}>
                {label || ""}
            </div>
            <textarea onChange={(e) => handleChange(e.target.value)} value={value} placeholder={placeholder ?? ""} onBlur={() => handleBlur()} onFocus={() => handleFocus()}
                className={`${inputClassName ?? ""} resize-none h-32 p-4 w-full rounded-lg outline-none text-white bg-black focus:bg-stone-800 border-2 border-transparent focus:border-sky-100/50`}/>
            {validationResult ? <></> : 
            <div className="-bottom-6 bg-red-200">
                <h3 className={`${messageClassName ?? ""} text-vermilion-400 text-base flex flex-row-reverse absolute right-0`}>{validationMessage}</h3>
            </div>}
        </div>
    )
}