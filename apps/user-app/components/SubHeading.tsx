export const SubHeading = ({ title, className }: { title: string, className: string}) => {
    return (
        <h2 className={`text-lg sm:text-2xl font-semibold text-black ${className}`}>
            {title}
        </h2>
    )
}