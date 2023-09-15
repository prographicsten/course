import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
    // useState is "Ok"
    const [course, setCourse] = useState([]);
    const [courseSelector, setCourseSelector] = useState([]);
    const [courseCost, setCourseCost] = useState(0);
    const [courseCredit, setCourseCredit] = useState(0);
    const [creditBudgets, setCreditBudgets] = useState(0);
    // console.log(course);

    // useEffect data load
    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, {})

    // handle select course
    const handleSelectCourse = (course) => {
        // console.log('select course successfully');
        // console.log(course);
        const isExist = courseSelector.find(purchasse => purchasse.id == course.id);
        let courseCost = course?.price;
        let courseCredit = course?.credit;
        let creditBudgets = 20;

        if (isExist) {
           return alert('Already selected this course');
        }else {
            courseSelector.map(cost => {
                courseCost += cost?.price;
                courseCredit += cost?.credit;
            });

            if(courseCredit > 20) {
                return alert('Your selected course credit is over 20 hours');
            }else if(courseCredit < 0) {
                return alert('Your selected course credit is low 0 hours');
            }else {
                creditBudgets = creditBudgets - courseCredit;
                setCreditBudgets(creditBudgets);
                setCourseCredit(courseCredit);
                setCourseCost(courseCost);
                setCourseSelector(isExist);
                setCourseSelector([...courseSelector, course]);
                // console.log(courseCost , courseCredit, creditBudgets); 
            }
        }
    }
    // console.log(courseSelector);

    return (
        <div className="inter_font pt-10 pb-16 px-4 lg:px-10 justify-between gap-5 bg-[#F3F3F3] rounded-lg">
            <h1 className='text-3xl text-center font-bold'>Course Registration</h1>
            <div className="md:flex mt-8 gap-5">
                <div className="md:w-2/3 lg:w-3/4 grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-5">
                    
                    {
                        course.map(courseData => (
                        <div key={courseData.id} className="bg-white p-5 md:p-3 lg:p-3 xl:p-5 rounded-lg mb-6 md:mb-0 lg:mb-0 xl:mb-0">
                            <img className="w-full h-40 md:h-36 lg:h-40" src={courseData.image} alt="" />
                            <h3 className="text-[#1C1B1B] text-lg md:text-sm lg:text-base xl:text-lg font-semibold mt-2">{courseData.title}</h3>
                            <p className="mt-2"><small className="text-[#1C1B1B99] text-sm md:text-xs lg:text-xs xl:text-sm font-normal">{courseData.description}</small></p>
                            <div className="flex justify-between items-center ">
                                <div className="flex justify-between items-center gap-5 md:gap-2 lg:gap-2 xl:gap-5 mt-5">
                                    <i className='bx bx-dollar text-xl md:text-base lg:text-base xl:text-lg'></i>
                                    <p className="text-[#1C1B1B99] font-medium text-base md:text-xs lg:text-sm xl:text-base">Price : {courseData.price}</p>
                                </div>
                                <div className="flex justify-between items-center gap-5 md:gap-2 lg:gap-2 xl:gap-5 mt-5">
                                    <i className='bx bx-book-open text-xl md:text-base lg:text-base xl:text-lg' ></i>
                                    <p className="text-[#1C1B1B99] font-medium text-base md:text-xs lg:text-sm xl:text-base">Credit : {courseData.credit}hr</p>
                                </div>
                            </div>
                            <button onClick={() => handleSelectCourse(courseData)} className="text-center bg-[#2F80ED] w-full rounded-lg py-2 text-white text-lg font-semibold mt-6 hover:bg-gray-600">Select</button>
                        </div>
                        ))
                    }

                </div>
                <div className="md:w-1/3 lg:w-1/4 mt-5 md:mt-0">
                    <Cart
                    creditBudgets = {creditBudgets}
                    courseSelector = {courseSelector}
                    courseCost = {courseCost}
                    courseCredit = {courseCredit}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;