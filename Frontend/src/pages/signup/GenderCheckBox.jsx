import React from 'react'

const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <>
            <div className='flex'>
                <div className='form-control'>
                    <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                        <span className='text-base label-text'>Male</span>
                        <input type="checkbox"
                            className={`checkbox border-slate-900 ${selectedGender === "male"? "selected":"" }`}
                            onChange={() => onCheckboxChange("male")}
                            checked={selectedGender === "male"}
                        />
                    </label>
                </div>
                <div className='form-control'>
                    <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                        <span className=' text-base label-text'>Female</span>
                        <input type="checkbox"
                            className={`checkbox border-slate-900 ${selectedGender === "female"? "selected":"" }`}
                            checked={selectedGender === "female"}
                            onChange={() => onCheckboxChange("female")}
                        />
                    </label>
                </div>
            </div>
        </>
    )
}

export default GenderCheckBox