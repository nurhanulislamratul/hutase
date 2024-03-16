import PropTypes from 'prop-types';

const CookSection = props => {
    return (
        <div className='w-full lg:w-[514px] h-full px-2 border-[1px] border-[rgba(40,40,40,0.2)] rounded-2xl'>
            <div className="">
                <h3 className="text-2xl mt-8 mb-4 font-semibold text-center">Want to cook: 01</h3>
                <hr className="border-t-[1px] mb-6 border-[rgba(40,40,40,0.15)] w-[350px] mx-auto" />
            </div>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody className='*:border-none bg-[rgba(40,40,40,0.03)] text-[rgba(40,40,40,0.70)] fira-sans'>

                            <tr>
                                <th>1</th>
                                <td>Chicken Caesar Salad</td>
                                <td>20 minutes</td>
                                <td>400 calories</td>
                                <td><button className='btn p-0 h-[38px] w-[115px] bg-[#0BE58A] rounded-[50px] font-semibold text-black'>Preparing</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="">
                <h3 className="text-2xl mt-8 mb-4 font-semibold text-center">Currently cooking: 02</h3>
                <hr className="border-t-[1px] mb-6 border-[rgba(40,40,40,0.15)] w-[350px] mx-auto" />
            </div>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody className='*:border-none bg-[rgba(40,40,40,0.03)] text-[rgba(40,40,40,0.70)] fira-sans'>

                            <tr >
                                <th>1</th>
                                <td>Chicken Caesar Salad</td>
                                <td>20 minutes</td>
                                <td>400 calories</td>
                            </tr>
                        </tbody>
                        <tbody className='*:border-none text-[rgba(40,40,40,1)] fira-sans'>
                            <tr>
                                <th></th>
                                <td></td>
                                <td>Total Time = 45 minutes</td>
                                <td>Total Calories = 1050 calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

CookSection.propTypes = {

};

export default CookSection;