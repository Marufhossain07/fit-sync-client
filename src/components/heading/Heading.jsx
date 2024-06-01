
const Heading = ({ title, sub }) => {
    return (
        <div>
            <div className="flex items-center gap-2">
                <hr className="border-2 border-red-600 w-10" />
                <p className='font-inter font-medium text-xl'>{sub}</p>
            </div>

            <h3 className='font-arial italic text-[#d62828] font-semibold text-4xl'>{title}</h3>
        </div>
    );
};

export default Heading;