
const Cart = ({courseSelector, courseCost, courseCredit, creditBudgets}) => {
    // console.log(courseSelector, courseCost, courseCredit, creditBudgets);

    return (
        <div>
            <div className="bg-white p-5 md:p-3 lg:p-3 xl:p-5 rounded-lg">
                <h3 className="text-[#2F80ED] text-lg md:text-sm lg:text-base xl:text-lg font-semibold mb-5">Credit Hour Remaining {creditBudgets} hrs</h3>
                <hr />
                <h2 className="text-[#1C1B1B] font-bold text-xl md:text-base lg:text-xl xl:text-xl my-4">Course Name</h2>
                <div className="mb-4">
                    {
                        courseSelector.map((courseName, idx) => (
                            <div key={idx} id="course_names">
                                <li key={idx} className="list-none text-base md:text-xs lg:text-sm xl:text-base font-normal text-[#1C1B1B99] my-1">{courseName.title}</li>
                            </div>
                        ))
                    }
                </div>
                <hr />
                <p className="text-base font-medium my-3 text-[#1C1B1BCC]">Total Credit Hour : {courseCredit}</p>
                <hr />
                <p className="text-base font-semibold my-3 text-[#1C1B1BCC]">Total Price : {courseCost} USD</p>
            </div>
        </div>
    );
};

export default Cart;