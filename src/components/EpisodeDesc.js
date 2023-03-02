import React from 'react'

export const EpisodeDesc = (props) => {
  return (
    <div className="flex items-center px-3 py-5">
              <div className="rounded-2xl relative">
                <div className="w-[418px] h-[222px]">
                  <img
                    className="absolute w-full h-full rounded-2xl object-cover"
                    src={props.epimg}
                    alt=""
                  />
                </div>
              </div>

              <div className="  font-outfit font-medium text-[20px] px-2 items-left">
                <h1 className="left-0">Episode {props.ep}</h1>
                <p className="text-[#747474]">
                  {props.epdesc}
                </p>
              </div>
            </div>
  )
}
