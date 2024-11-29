

const Button = ({ children }) => {
    // name for this
    return (
        <div>
            <button className="relative inline-flex h-10 md:h-12 active:scale-95 transistion overflow-hidden rounded-full p-[2px] focus:outline-none ">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]">
                </span>
                <span className="inline-flex items-center justify-center w-full h-full gap-2 px-5 text-sm font-medium text-white rounded-full cursor-pointer bg-slate-950 md:px-7 backdrop-blur-3xl undefined">
                    {children}
                </span>
            </button>
        </div>
    )
}

export default Button


