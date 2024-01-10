import { useState } from 'react';

export const Appp = () => {

    return (
        <>
            <div className="h-[35px] w-[35px] border-4 border-red-500 rounded-full"></div>
            <form>
                <textarea placeholder="what is happening ?!" className=" pt-[18px] w-[500px] h-auto outline-none text-[25px] min-h-4 max-h-[400px] resize-none hyphens-auto whitespace-normal" style={{ height: 'auto', }} ></textarea>
            </form>
        </>
    )
};