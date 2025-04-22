export const MiniHeading = ({ name, title }: { name: string; title: string }) => {
    return (
        <label htmlFor={name} className="font-medium text-md sm:text-xl">
            {title}
        </label>
    )
}