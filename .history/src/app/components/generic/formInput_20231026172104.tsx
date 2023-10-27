export default function FormInput({className, label, type, required = false, defaultValue, value, minValue, placeholder, onChange, onBlur, onFocus, inputClassName, messageClassName, validationResult, validationMessage}:{
    className?: string;
    label?: string;
    type?: string;
    required?: boolean;
    defaultValue?: string;
    value?: string;
    minValue?: string | number;
    placeholder?: string;
    onChange?: (value: any) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    inputClassName?: string;
    messageClassName?: string;
    validationResult?: boolean;
    validationMessage?: string;
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
            <div className={`${label ? "" : "hidden"} p-2 flex`} >
                {label || ""} <div className="text-red-500 font-semibold ml-2">*</div>
            </div>
            <input type={type || "text"} defaultValue={defaultValue || ""} placeholder={placeholder ?? ""}
                min={minValue}
                value={value}
                onChange={(e) => handleChange(e.target.value)} 
                onBlur={() => handleBlur()} 
                onFocus={() => handleFocus()}
                className={`${inputClassName ?? ""} p-3 w-full text-white text-base rounded-lg outline-none bg-black focus:bg-stone-800 border-2 border-transparent focus:border-sky-100/50
                transition-all shadow-md shadow-black/30`}/>
            {validationResult ? <></> : 
            <div className="-bottom-6 bg-red-200">
                <h3 className={`${messageClassName ?? ""} text-vermilion-400 text-base flex flex-row-reverse absolute right-0`}>{validationMessage}</h3>
            </div>}
        </div>
    )
}